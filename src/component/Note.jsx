import React, { useState } from "react";
import {
  Typography,
  Button,
  TextField,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  FormControl,
  Stack,
} from "@mui/material/";

import {
  AddCircleOutlineRounded,
  CancelOutlined,
  SaveAsOutlined,
} from "@mui/icons-material";

export default function NoteForm() {
  const [state, setState] = useState({
    txtTitle: "",
    txtDetail: "",
  });
  const url = "http://localhost:4000/notes";

  const { txtTitle, txtDetail } = state;

  const [errTitle, setErrorTitle] = useState(false);
  const [errDetail, setErrorDetail] = useState(false);
  const [category, setCategory] = useState("letter");
  const [flag, setFlag] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isUpdateID, setisUpdateID] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorTitle(false);
    setErrorDetail(false);

    if (txtTitle === "") {
      setErrorTitle(true);
    }

    if (txtDetail === "") {
      setErrorDetail(true);
    }

    if (txtTitle && txtDetail) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ txtTitle, txtDetail, category }),
      }).catch((err) => console.log(err));
      setFlag(!flag);
      setState({
        txtDetail: "",
        txtTitle: "",
      });
    }
  };

  const handleShowData = (id) => {
    if (id) {
      fetch(url + "/" + id)
        .then((res) => res.json())
        .then((data) => {
          setIsUpdate(true);
          setState(data);
          setCategory(data.category);
          setisUpdateID(id);
        })
        .catch((err) => console.log("onClickUpdate :: ", err));
    }
  };

  const handleUpdateData = (id) => {
    if (id) {
      fetch(url + "/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          txtTitle: txtTitle,
          txtDetail: txtDetail,
          category,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to patch data");
          }
        })
        .then((data) => {
          setIsUpdate(false);
          setState({
            txtDetail: "",
            txtTitle: "",
          });
          setCategory("library");
          setFlag(!flag);
        })
        .catch((err) => console.log("onClickUpdate :: ", err));
    }
  };

  const handleCancel = () => {
    setState({
      txtDetail: "",
      txtTitle: "",
    });
    setIsUpdate(false);
    setCategory("letter");
    setisUpdateID("");
  };

  return {
    handleShowData,
    flag,
    isUpdate,
    render: (
      <>
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          sx={{ p: 1 /**bgcolor:"#e17055", */ }}
        >
          Create a new note
        </Typography>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Stack
            justifyContent="center"
            alignItems="stretch"
            spacing={1}
            sx={{ p: 2 /**bgcolor:"#81ecec" */ }}
          >
            <TextField
              onChange={handleChange}
              name="txtTitle"
              value={txtTitle}
              variant="filled"
              label="title"
              required
              error={errTitle}
            />
            <TextField
              onChange={handleChange}
              name="txtDetail"
              variant="filled"
              label="details"
              multiline
              rows={4}
              required
              error={errDetail}
              value={state.txtDetail}
            />

            <FormControl>
              <FormLabel>Category</FormLabel>
              <RadioGroup
                row
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <FormControlLabel
                  value="diary"
                  control={<Radio />}
                  label="Diary"
                />
                <FormControlLabel
                  value="newspaper"
                  control={<Radio />}
                  label="News Paper"
                />
                <FormControlLabel
                  value="magazine"
                  control={<Radio />}
                  label="Magazine"
                />
                <FormControlLabel
                  value="letter"
                  control={<Radio />}
                  label="Letter"
                />
              </RadioGroup>
            </FormControl>
          </Stack>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ p: 1 }}
          >
            {!isUpdate ? (
              <Button
                type="submit"
                variant="contained"
                size="large"
                startIcon={<AddCircleOutlineRounded />}
              >
                {" "}
                Add
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => handleUpdateData(isUpdateID)}
                  variant="contained"
                  size="large"
                  startIcon={<SaveAsOutlined />}
                >
                  {" "}
                  Save
                </Button>
                <Button
                  onClick={handleCancel}
                  variant="outlined"
                  size="large"
                  startIcon={<CancelOutlined />}
                >
                  {" "}
                  Cancel
                </Button>
              </>
            )}
          </Stack>
        </form>
      </>
    ),
  };
}

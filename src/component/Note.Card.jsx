import React from 'react'
import { Avatar,  Card, CardContent, CardHeader, IconButton, styled  } from '@mui/material';
import {DeleteOutlined,EditOutlined } from '@mui/icons-material/';
import { blue, green, pink, yellow } from '@mui/material/colors';

const styleX = {
  "diary": {
    color: yellow[700]
  },
  "newspaper" : {
    color: green[500]
  },
  "letter" : {
    color: pink[500]
  }
}

const MyAvatar = styled(Avatar)(({note}) => ({
  backgroundColor: (()=>{ return styleX[note.category]?.color || blue[500]})(),
}));
export default function NoteCard({note,handleDelete,handlePassData}) {
  return (
    <>
        <Card sx={{margin:1}} elevation={3}>
            <CardHeader
            avatar={
              <MyAvatar note={note}>
                {note.category[0].toUpperCase()}
              </MyAvatar>
            }
            action={
              <>
                <IconButton onClick={()=>handleDelete(note.id)}>
                  <DeleteOutlined />
                </IconButton>

                <IconButton onClick={()=>handlePassData(note.id)}>
                <EditOutlined  />
                </IconButton>
              </>
              }
              title={note.txtTitle}
              subheader={note.category}
            >
            </CardHeader>
            <CardContent variant="body2" color="textSecondary">
                {note.txtDetail}
            </CardContent>
        </Card>
    </>
  )
}

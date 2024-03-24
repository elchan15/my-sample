import { useState } from "react";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    //setFormData({ ...formData, [name]: value });
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-1/2">
        <label>
          <span>First Name:</span>
          <input
            required
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Last Name:</span>
          <input
            required
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
          />
        </label>

        <button className="btn-primary">SAVE</button>
      </form>
    </>
  );
}

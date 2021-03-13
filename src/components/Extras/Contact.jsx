import React from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import "../css/Contact.css";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  multilineColor: {
    color: "#000",
  },
  inputField: {
    margin: "1.2rem !important",
    marginBottom: "1.2rem !important",
  
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hello world");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <Paper elevation={3} className="contact__paper mx-3">
        <img
          src="https://www.bctv.org/wp-content/uploads/2018/09/03410d92d2e3268b72f360400874e439.jpg"
          alt="contact"
          className="contact__img"
        />
        <form className="formBox" autoComplete="off" onSubmit={handleSubmit}>
          <h4 className="text-center my-3 ">Contact Now</h4>
          <TextField
            className={classes.inputField}
            label="Name"
            variant="outlined"
            type="text"
            required
            value={name}
            InputProps={{
              className: classes.multilineColor,
            }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className={classes.inputField}
            label="Email"
            variant="outlined"
            type="email"
            required
            value={email}
            InputProps={{
              className: classes.multilineColor,
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.inputField}
            label="Message"
            type="text"
            variant="outlined"
            required
            value={message}
            InputProps={{
              className: classes.multilineColor,
            }}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit" variant="contained" className="contact__btn">
            Send
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Contact;

import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2rem",
    boxShadow: "2px 2px 10px #ccc",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background:
      "linear-gradient(rgba(26, 38, 68, 0.2), rgba(26, 38, 68, 0.4)), url(https://i.pinimg.com/originals/52/fe/b6/52feb6ce0f78701667f41120b3cca0ea.jpg) center no-repeat",
  },
  input: {
    width: "100%",
    fontSize: "3rem",
    marginTop: "1.2rem",
  },
  button: {
    marginTop: "2rem",
    width: "100%",
    backgroundColor: "#424242",
    color: "#fff",
    outline: "none !important",
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hello world");
    setName("");
    setEmail("");
  };

  return (
    <Paper>
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h4" className="text-center">
          Get Free Email Updates!
        </Typography>
        <Typography variant="body2" className="text-center my-2">
          Join us for FREE to get instant email updates!
        </Typography>
        <TextField
          className={classes.input}
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          type="text"
        />
        <TextField
          className={classes.input}
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.button}
        >
          Subscription
        </Button>
      </form>
    </Paper>
  );
}

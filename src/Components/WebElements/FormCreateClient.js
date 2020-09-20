import React from "react";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

export default function FormCreateClient() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        {/* <TextField
              id="standard-full-width"
              label="Label"
              style={{ margin: 8 }}
              placeholder="Placeholder"
              helperText="Full width!"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            /> */}
        <TextField
          label="Name"
          id="margin-normal"
          defaultValue=""
          className={classes.textField}
          helperText=""
          margin="normal"
        />
        <br />
        <TextField
          label="Adress"
          id="margin-normal"
          defaultValue=""
          className={classes.textField}
          helperText=""
          margin="normal"
        />
        <br />
        <TextField
          label="Contact"
          id="margin-normal"
          defaultValue=""
          className={classes.textField}
          helperText=""
          margin="normal"
        />
        <br />
        <TextField
          label="Email"
          id="margin-normal"
          defaultValue=""
          className={classes.textField}
          helperText=""
          margin="normal"
        />
      </div>
    </form>
  );
}

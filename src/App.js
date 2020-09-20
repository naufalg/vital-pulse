import React from "react";
// router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// css
import "./App.css";
// components
import Navbar from "./Components/WebElements/Navbar";
import NavbarTab from './Components/WebElements/NavbarTab';
// pages
import Home from "./Components/Pages/Home";
import Clients from "./Components/Pages/Clients";
import CreateClient from "./Components/Pages/CreateClient";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// color theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00897b",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

// sidebar vars
// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   toolbar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
// }));

function App() {
  //   const classes = useStyles();

  // <div className={classes.root}>
  //   <main className={classes.content}>
  //     <div className={classes.toolbar} />
  //   </main>
  // </div>;

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Navbar />
      </MuiThemeProvider>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Clients">
          <Clients />
        </Route>
        <Route path="/CreateClient">
          <CreateClient />
        </Route>
        {/* </main> */}
      </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;

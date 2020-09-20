import React from "react";
import axios from "axios";

// material ui
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TableClients() {
  const classes = useStyles();

  //   fetch data

  let userData = [];
  async function getClient() {
    try {
      let url1 = "https://5f67679438ce8700163985d1.mockapi.io/Clients";
      const getResponse = await axios.get(url1);
      let jsonData = getResponse.data;
      return (userData = [...jsonData]);
      //   console.log("userData", userData);
      //   const dataJson = await getResponse
      //   console.log(response);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  getClient();

  async function mapData() {
      let dataToMap = await getClient();
      console.log("dataToMap", dataToMap);
      return dataToMap;
      // return dataToMap.map((row) => (
          //   <TableRow key={row.name}>
    //     <TableCell component="th" scope="row">
    //       {row.name}
    //     </TableCell>
    //     <TableCell align="right">{row.name}</TableCell>
    //     <TableCell align="right">{row.address}</TableCell>
    //     <TableCell align="right">{row.contact}</TableCell>
    //     <TableCell align="right">{row.email}</TableCell>
    //   </TableRow>
    // ));
}
mapData();

let mappedData = mapData();
  console.log("mappedData", mappedData);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {mapData()} */}
          {/* {mappedData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

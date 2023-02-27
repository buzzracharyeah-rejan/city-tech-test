import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Container } from '@mui/material';

const CustomTable = ({ data }) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(data);
  }, [data]);

  if (!data) {
    return <h4>No data to render!</h4>;
  }

  return (
    <>
      <Container maxWidth='lg'>
        <Box sx={{ padding: '1rem', margin: '1rem 0' }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell> ID</TableCell>
                  <TableCell> Current Status</TableCell>
                  <TableCell align='right'>Receive Amount</TableCell>
                  <TableCell align='right'>Receive Country</TableCell>
                  <TableCell align='right'>Receiver Full Name</TableCell>
                  <TableCell align='right'>Send Amount</TableCell>
                  <TableCell align='right'>Send Country</TableCell>
                  <TableCell align='right'>Sender Full Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row, index) => (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align='right'>{index + 1}</TableCell>
                    <TableCell align='right'>{row['Current Status']}</TableCell>
                    <TableCell align='right'>{row['Receive Amount']}</TableCell>
                    <TableCell align='right'>{row['Receive Country']}</TableCell>
                    <TableCell align='right'>{row['Receiver Full Name']}</TableCell>
                    <TableCell align='right'>{row['Send Amount']}</TableCell>
                    <TableCell align='right'>{row['Send Country']}</TableCell>
                    <TableCell align='right'>{row['Sender Full Name']}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default CustomTable;

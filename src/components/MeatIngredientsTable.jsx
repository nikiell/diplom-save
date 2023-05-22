import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const MeatIngredientsTable = () => {
  const meatIngredients = [
    { name: 'Курка', protein: 20, fat: 10, vitamins: 'A, B, C' },
    { name: 'Яловичина', protein: 25, fat: 15, vitamins: 'B, E, K' },
    { name: 'Свинина', protein: 18, fat: 20, vitamins: 'B1, B6, B12' },
    { name: 'Індичка', protein: 22, fat: 8, vitamins: 'A, C, D' },
    { name: 'Кролик', protein: 19, fat: 8, vitamins: 'B, E, K' },
    { name: 'Качка', protein: 18, fat: 12, vitamins: 'A, B, E' },
    { name: 'Телятина', protein: 23, fat: 7, vitamins: 'B, D, K' },
    { name: 'Конина', protein: 21, fat: 4, vitamins: 'A, B, C' },
    { name: 'Теля', protein: 20, fat: 12, vitamins: 'A, C, D' },
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Інгредієнт</TableCell>
            <TableCell style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Білки (г)</TableCell>
            <TableCell style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Жири (г)</TableCell>
            <TableCell style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Вітаміни</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {meatIngredients.map((ingredient, index) => (
            <TableRow key={index}>
              <TableCell>{ingredient.name}</TableCell>
              <TableCell>{ingredient.protein}</TableCell>
              <TableCell>{ingredient.fat}</TableCell>
              <TableCell>{ingredient.vitamins}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MeatIngredientsTable;
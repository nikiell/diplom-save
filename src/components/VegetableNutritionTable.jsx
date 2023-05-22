import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const VegetableNutritionTable = () => {
  const vegetableNutrition = [
    { name: 'Морква', calories: 41, carbohydrates: 10, fiber: 2, protein: 0.9 },
    { name: 'Брокколі', calories: 55, carbohydrates: 11.2, fiber: 3.3, protein: 4.2 },
    { name: 'Солодкий перець', calories: 31, carbohydrates: 6.3, fiber: 1.5, protein: 0.9 },
    { name: 'Салат', calories: 5, carbohydrates: 0.9, fiber: 0.5, protein: 0.5 },
    { name: 'Огірок', calories: 15, carbohydrates: 3.6, fiber: 0.5, protein: 0.6 },
    { name: 'Гарбуз', calories: 26, carbohydrates: 6.5, fiber: 0.5, protein: 1 },
    { name: 'Цвітна капуста', calories: 25, carbohydrates: 5, fiber: 2.5, protein: 2.5 },
    { name: 'Буряк', calories: 43, carbohydrates: 9.6, fiber: 2.8, protein: 1.6 },
    { name: 'Кабачок', calories: 17, carbohydrates: 3.1, fiber: 1, protein: 1.2 },
  ];

  const paragraphStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  };

  return (
    <div>
      <p style={paragraphStyle}>
        В таблиці вказані наступні безпечні овочі для собак ті котів: морква, брокколі, солодкий перець, салат, огірок, гарбуз,
        цвітна капуста, буряк та кабачок. Зверніть увагу, що перед внесенням будь-яких змін до раціону вашої собаки,
        рекомендується звернутися до ветеринарного фахівця.
      </p>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Овоч</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Калорії</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Вуглеводи (г)</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Волокна (г)</TableCell>
              <TableCell style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Білки (г)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vegetableNutrition.map((vegetable, index) => (
              <TableRow key={index}>
                <TableCell>{vegetable.name}</TableCell>
                <TableCell>{vegetable.calories}</TableCell>
                <TableCell>{vegetable.carbohydrates}</TableCell>
                <TableCell>{vegetable.fiber}</TableCell>
                <TableCell>{vegetable.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VegetableNutritionTable;

import React, { useState } from 'react';
import './barf.css';

const DogCalorieCalculator = () => {
  const [weight, setWeight] = useState(''); // Вага собаки
  const [age, setAge] = useState('adult'); // Вік собаки
  const [activityLevel, setActivityLevel] = useState('active'); // Рівень активності
  const [meatOption, setMeatOption] = useState('none'); // Обрана опція м'яса
  const [calories, setCalories] = useState(null); // Кількість калорій
  const [foodRatio, setFoodRatio] = useState(null); // Співвідношення харчування
  const [animalGender, setAnimalGender] = useState('dog');
  const calculateCalories = () => {
    if (!weight || meatOption === 'none') {
      return;
    }

    let calorieAmount;
    if (age === 'puppy') {
      calorieAmount = 55 * weight;
    } else if (age === 'adult') {
      calorieAmount = 40 * weight;
    } else if (age === 'senior') {
      calorieAmount = 30 * weight;
    }

    if (activityLevel === 'lazy') {
      calorieAmount *= 0.95;
    }

    if (animalGender === 'femaleDog') {
      calorieAmount *= 0.93; // Зниження калорій для кошок на 3%
    }

    let meatRatio, boneRatio, liverRatio, veggiesRatio, fruitsRatio;

    switch (meatOption) {
      case 'chicken':
        meatRatio = 0.4;
        boneRatio = 0.1;
        liverRatio = 0.1;
        veggiesRatio = 0.3;
        fruitsRatio = 0.1;
        break;
        case 'rabbit':
          meatRatio = 0.6;
        boneRatio = 0.05;
        liverRatio = 0.1;
        veggiesRatio = 0.2;
        fruitsRatio = 0.05;
        break;
      case 'lamb':
        meatRatio = 0.4;
        boneRatio = 0.15;
        liverRatio = 0.2;
        veggiesRatio = 0.2;
        fruitsRatio = 0.05;
        break;
      default:
        return;
    }

    const meatAmount = Math.round(calorieAmount * meatRatio); // Кількість м'яса в грамах
    const boneAmount = Math.round(calorieAmount * boneRatio); // Кількість кісток в грамах
    const liverAmount = Math.round(calorieAmount * liverRatio); // Кількість печінки в грамах
    const veggiesAmount = Math.round(calorieAmount * veggiesRatio); // Кількість овочів в грамах
    const fruitsAmount = Math.round(calorieAmount * fruitsRatio); // Кількість фруктів в грамах

    const foodRatio = {
      meat: meatAmount,
      bone: boneAmount,
      liver: liverAmount,
      veggies: veggiesAmount,
      fruits: fruitsAmount
    };

    setCalories(calorieAmount);
    setFoodRatio(foodRatio);
  };

  return (
    <div className='conteiner'>
     <h2>Калькулятор калорій барф для песиків</h2>
      <div>
        <label htmlFor="weight">Вага собаки (в кг):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="age">Вік собаки:</label>
        <select id="age" value={age} onChange={(e) => setAge(e.target.value)}>
          <option value="puppy">Цуценя</option>
          <option value="adult">Доросла собака</option>
          <option value="senior">Старенька собака</option>
        </select>
      </div>
      <div>
        <label htmlFor="animalGender">Стать тварини:</label>
        <select
          id="animalGender"
          value={animalGender}
          onChange={(e) => setAnimalGender(e.target.value)}
        >
          <option value="dog">Хлопичк</option>
          <option value="femaleDog">Дівчинка</option>
        </select>
      </div>
      <div>
        <label htmlFor="activityLevel">Рівень активності:</label>
        <select
          id="activityLevel"
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="active">Активний</option>
          <option value="lazy">Ледачий</option>
        </select>
      </div>

      <div>
        <label htmlFor="meatOption">М'ясо:</label>
        <select id="meatOption" value={meatOption} onChange={(e) => setMeatOption(e.target.value)}>
          <option value="none">Оберіть м'ясо</option>
          <option value="chicken">Куряче філе</option>
          <option value="lamb">Вирізка із баранини</option>
          <option value="rabbit">Кролик</option>
        </select>
      </div>

      <button className='buttonDog' onClick={calculateCalories}>Розрахувати калорії</button>

      {calories && (
        <div className="results" id='dog'>
          <h3>Результати:</h3>
          <p>Загальна кількість калорій на день: {calories}</p>
          {foodRatio && (
            <div>
              <p>Порція м'яса в грамах: {foodRatio.meat.toFixed(2)}</p>
              <p>Порція кісток в грамах: {foodRatio.bone.toFixed(2)}</p>
              <p>Порція печінки в грамах: {foodRatio.liver.toFixed(2)}</p>
              <p>Порція овочів в грамах: {foodRatio.veggies.toFixed(2)}</p>
              <p>Порція фруктів в грамах: {foodRatio.fruits.toFixed(2)}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DogCalorieCalculator;

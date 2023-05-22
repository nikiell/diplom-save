import React, { useState } from 'react';
import barf from './barf.css'

const CatCalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('adult');
  const [activityLevel, setActivityLevel] = useState('active');
  const [meatOption, setMeatOption] = useState('none');
  const [animalGender, setAnimalGender] = useState('cat');
  const [calories, setCalories] = useState(null);
  const [foodRatio, setFoodRatio] = useState(null);

  // Функція для розрахунку калорій та раціону
  const calculateCalories = () => {
    if (!weight || meatOption === 'none') {
      return;
    }

    let calorieAmount;
    if (age === 'kitty') {
      calorieAmount = 40 * weight; // Формула для розрахунку калорій кошенят
    } else if (age === 'adult') {
      calorieAmount = 30 * weight; // Формула для розрахунку калорій дорослих кошек
    } else if (age === 'senior') {
      calorieAmount = 25 * weight; // Формула для розрахунку калорій пожилых кошек
    }

    if (activityLevel === 'lazy') {
      calorieAmount *= 0.95; // Зниження калорій при спокійному рівні активності
    }

    if (animalGender === 'female') {
      calorieAmount *= 0.97; // Зниження калорій для кошок на 3%
    }

    let meatRatio, boneRatio, liverRatio, veggiesRatio, fruitsRatio;

    switch (meatOption) {
      case 'chicken':
        meatRatio = 0.75;
        boneRatio = 0.3;
        liverRatio = 0.15;
        veggiesRatio = 0.5;
        fruitsRatio = 0.2;
        break;
      case 'lamb':
        meatRatio = 0.72;
        boneRatio = 0.5;
        liverRatio = 0.15;
        veggiesRatio = 0.5;
        fruitsRatio = 0.3;
        break;
      default:
        return;
    }

    const meatAmount = Math.round(calorieAmount * meatRatio);
    // Кількість м'яса в грамах
    const boneAmount = Math.round(calorieAmount * boneRatio);
    // Кількість кісток в грамах
    const liverAmount = Math.round(calorieAmount * liverRatio);
    // Кількість печінки в грамах
    const veggiesAmount = Math.round(calorieAmount * veggiesRatio); // Кількість овочів в грамах
    const fruitsAmount = Math.round(calorieAmount * fruitsRatio);
    // Кількість фруктів в грамах

    const foodRatio = {
      meat: meatAmount,
      bone: boneAmount,
      liver: liverAmount,
      veggies: veggiesAmount,
      fruits: fruitsAmount
    };

    setCalories(calorieAmount); // Збереження кількості калорій
    setFoodRatio(foodRatio); // Збереження раціону
  };

  return (
    <div className='conteiner'>
      <h2>Калькулятор калорій барф для котика</h2>

      <div>
        <label htmlFor="weight">Вага котика (в кг):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="age">Вік котика:</label>
        <select id="age" value={age} onChange={(e) => setAge(e.target.value)}>
          <option value="kitty">Кошеня</option>
          <option value="adult">Дорослий кіт</option>
          <option value="senior">Старенький котик</option>
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
        <select
          id="meatOption"
          value={meatOption}
          onChange={(e) => setMeatOption(e.target.value)}
        >
          <option value="none">Оберіть м'ясо</option>
          <option value="chicken">Куряче філе</option>
          <option value="lamb">Вирізка барана</option>
        </select>
      </div>

      <div>
        <label htmlFor="animalGender">Стать тварини:</label>
        <select
          id="animalGender"
          value={animalGender}
          onChange={(e) => setAnimalGender(e.target.value)}
        >
          <option value="cat">Кіт</option>
          <option value="female">Кішка</option>
        </select>
      </div>

      <button className='buttonCat' onClick={calculateCalories}>Розрахувати</button>

      {calories && (
        <div className="results" id='cat'>
          <h3>Результати:</h3>
          <p>Загальна кількість калорій в день: {calories}</p>
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

export default CatCalorieCalculator;

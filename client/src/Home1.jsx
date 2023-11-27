import React, { useState } from 'react';
import fitnessImage from './assets/break-workout_602724.jpg'; // Import your fitness image
import Navbar from './Navbar';

const Home = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    if (height !== '' && weight !== '') {
      const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
      let bmiResult = `Your BMI is: ${bmi}`;

      if (bmi < 18.5) {
        bmiResult += ' - Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiResult += ' - Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        bmiResult += ' - Overweight';
      } else {
        bmiResult += ' - Obesity';
      }

      setResult(bmiResult);
    } else {
      alert('Please enter both height and weight.');
    }
  };

  return (
    <>
    <Navbar/>
    <div style={{ display: 'flex' }}>
      {/* Left Section */}
      <div style={{ flex: 1, padding: '20px', borderRadius: '8px', margin: '20px', backgroundImage: `url(${fitnessImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        
        <section>
          <h2 style={{ color: 'black' }}>Welcome to Our Fitness Tracker</h2>
          <p style={{ color: 'black' }}>
            Start your fitness journey with our comprehensive fitness tracker. Whether you're a seasoned athlete or just starting, we have the tools you need to succeed.
          </p>
        </section>
        
        <section>
          <h3 style={{ color: 'black' }}>Why Choose Our Fitness Tracker?</h3>
          <ul style={{ color: 'black' }}>
            <li>Accurate BMI calculations</li>
            <li>Personalized fitness goals</li>
            <li>Progress tracking over time</li>
            <li>Expert guidance and tips</li>
            <li>Varied workout routines for all fitness levels</li>
            <li>Nutritional advice and meal planning</li>
            <li>Community support and challenges</li>
          </ul>
        </section>
        
        <section>
          <h3 style={{ color: 'black' }}>The Importance of Fitness</h3>
          <p style={{ color: 'black' }}>
            Regular exercise has numerous benefits for both physical and mental health. It helps maintain a healthy weight, strengthens muscles and bones, improves cardiovascular health, and boosts mood and mental well-being. Our fitness tracker is designed to make your fitness journey enjoyable and effective.
          </p>
        </section>
        
        <section>
          <h3 style={{ color: 'black' }}>Get Started Today!</h3>
          <p style={{ color: 'black' }}>
            Enter your height and weight in the BMI calculator below to kickstart your fitness journey.
          </p>
        </section>

      {/* Right Section - BMI Calculator */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#fff', borderRadius: '8px', margin: '20px' }}>
        <h2>BMI Calculator</h2>
        <label htmlFor="height">Height (cm):</label>
        <input type="number" id="height" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter height" required />

        <label htmlFor="weight" style={{marginLeft: '30px'}}>Weight (kg):</label>
        <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter weight" required />

        <button onClick={calculateBMI} style={{ backgroundColor: '#333', color: '#fff', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px', marginLeft: '30px' }}>
          Calculate BMI
        </button>

        <div id="result" style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f4f4f4', borderRadius: '8px', textAlign: 'center' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Result:</p>
          <p style={{ fontSize: '16px', margin: '0' }}>{result}</p>
        </div>
      </div>
      </div>
    </div></>
  );
};

export default Home;

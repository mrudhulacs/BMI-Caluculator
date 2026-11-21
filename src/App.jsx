
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container">
            <h1>BMI Calculator</h1>
            <p>Calculate your Body Mass Index</p>
            <Link to="/calculator">
                <button>Start Calculator</button>
            </Link>
        </div>
    );
}

function Calculator() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = () => {
        if (height <= 0 || weight <= 0 || !height || !weight) {
            alert("Please enter valid height and weight");
            return;
        }

        const h = height / 100;
        const result = weight / (h * h);

        setBmi(result.toFixed(2));

        if (result < 18.5) {
            setCategory("Underweight");
        } else if (result < 25) {
            setCategory("Normal Weight");
        } else if (result < 30) {
            setCategory("Overweight");
        } else {
            setCategory("Obesity");
        }
    };

    const reset = () => {
        setHeight('');
        setWeight('');
        setBmi(null);
        setCategory('');
    };

    return (
        <div className="container">
            <h1>BMI Calculator</h1>

            <label>Height (cm)</label>
            <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter height"
            />

            <label>Weight (kg)</label>
            <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
            />

            <button onClick={calculateBMI}>Calculate BMI</button>

            <button className="reset" onClick={reset}>Reset</button>

            {bmi !== null && (
                <div className="result">
                    <h2>BMI: {bmi}</h2>
                    <p>Category: {category}</p>
                </div>
            )}

            <hr />

            <p className="footer">
                Name: CS MRUDHULA <br/>
                Register Number: 212224040056 <br/>
            </p>

            <Link to="/">Home</Link>
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
        </Routes>
    );
}

export default App;

import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import bcrypt from 'bcryptjs'
import './signup.css'; // Import your CSS file
import { Navbar } from '../pages/Navbar';
import ValidationS from './signupvlidation';
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css'; // Import the CSS file for zmdi icons

export const Signup = () => {
  const [values, setValues] = useState({
    cin: '', // Cin can start with 0, so it should be treated as string
    nom: '',
    prenom: '',
    email: '',
    password: '',
    confirmPassword: '', // New field for confirming password
    gender: '',
    age: ''
  });
  
  
  // Validation for date of birth
  const dobValidation = (day, month, year) => {
    let error = '';
    if (!day || !month || !year) {
      error = 'Date of birth is required';
    }
    return error;
  };

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validate form values
    const validationErrors = ValidationS(values);
    const { day, month, year } = values;
    const dobError = dobValidation(day, month, year);
  
    // Combine all validation errors
    const combinedErrors = { ...validationErrors, dob: dobError };
    setErrors(combinedErrors);
  
    // If there are no validation errors, proceed with form submission
    if (Object.values(combinedErrors).every(error => error === '')) {
      // Check if CIN already exists in the database
      try {
        const responseCIN = await axios.get(`http://localhost:4000/checkCIN/${values.cin}`);
        if (responseCIN.data.exists) {
          setErrors(prevErrors => ({ ...prevErrors, cin: 'CIN already exists' }));
          return; // Exit form submission if CIN already exists
        }
  
        // Check if Email already exists in the database
        const responseEmail = await axios.get(`http://localhost:4000/chackMAIL/${values.email}`);
        if (responseEmail.data.exists) {
          setErrors(prevErrors => ({ ...prevErrors, email: 'Email already exists' }));
          return; // Exit form submission if email already exists
        }
  
        const dob = `${year}-${month}-${day}`;
        const age = calculateAge(new Date(dob));
        const hashedPassword = await bcrypt.hash(values.password, 6); // Hash the password
  
        // Check if password and confirmPassword match
        if (values.password !== values.confirmPassword) {
          setErrors(prevErrors => ({ ...prevErrors, confirmPassword: 'Passwords do not match' }));
          return; // Exit form submission if passwords do not match
        }
  
        const data = { ...values, dob, age, gender: values.gender.toLowerCase(), password: hashedPassword }; // Set age, gender, and hashed password
        axios.post('http://localhost:4000/signup', data)
          .then(res => {
            console.log(res.data); // Log the response data
            navigate('/Login');
          })
          .catch(err => console.log(err));
      } catch (error) {
        console.log(error);
        // Handle error
      }
    }
  };
  
  // Function to calculate age based on provided date of birth
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  return (
    <>
      <Navbar />
      <div className="wrapperS" style={{ backgroundImage: 'url("../assets/img/Id.jpeg")' }}>
        <div className="inner">
          <div className="image-holder">
            <img src="../assets/img/dett.jpeg" alt="" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Registration Form</h3>
            <div className="form-group">
              <input type="text" placeholder="First Name" name="nom" value={values.nom} onChange={handleInput} className="form-controlS" />
              {/* Add error handling for nom */}
              {errors.nom && <span className="text-danger">{errors.nom}</span>}
              <input type="text" placeholder="Last Name" name="prenom" value={values.prenom} onChange={handleInput} className="form-controlS" />
              {/* Add error handling for prenom */}
              {errors.prenom && <span className="text-danger">{errors.prenom}</span>}
            </div>
            <div className="form-wrapper">
              <input type="text" placeholder="Username (CIN)" name="cin" value={values.cin} onChange={handleInput} className="form-controlS" />
              {/* Add error handling for cin */}
              {errors.cin && <span className="text-danger">{errors.cin}</span>}
              <i className="zmdi zmdi-account" />
            </div>
            <div className="form-wrapper">
              <input type="email" placeholder="Email Address" name="email" value={values.email} onChange={handleInput} className="form-controlS" />
              {/* Add error handling for email */}
              {errors.email && <span className="text-danger">{errors.email}</span>}
              <i className="zmdi zmdi-email" />
            </div>
            <div className="form-wrapper">
              <select name="gender" value={values.gender} onChange={handleInput} className="form-controlS">
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {/* Add error handling for gender */}
              {errors.gender && <span className="text-danger">{errors.gender}</span>}
              <i className="zmdi zmdi-caret-down" style={{ fontSize: 17 }} />
            </div>
            <div className="mb-3">
              <label htmlFor="dob">Date of Birth</label>
              <div className="d-flex">
                <select id="day" name="day" value={values.day} onChange={handleInput} className="form-controlS rounded-0">
                  <option value="">Day</option>
                  {generateOptions(1, 31)}
                </select>
                <select id="month" name="month" value={values.month} onChange={handleInput} className="form-controlS rounded-0">
                  <option value="">Month</option>
                  {generateOptions(1, 12)}
                </select>
                <select id="year" name="year" value={values.year} onChange={handleInput} className="form-controlS rounded-0">
                  <option value="">Year</option>
                  {generateOptions(1900, new Date().getFullYear())}
                </select>
              </div>
              {errors.dob && <span className="text-danger">{errors.dob}</span>}
            </div>
            <div className="form-wrapper">
              <input type="password" placeholder="Password" name="password" value={values.password} onChange={handleInput} className="form-controlS" />
              {/* Add error handling for password */}
              {errors.password && <span className="text-danger">{errors.password}</span>}
              <i className="zmdi zmdi-lock" />
            </div>
            <div className="form-wrapper">
              <input type="password" placeholder="Confirm Password" name="confirmPassword" value={values.confirmPassword} onChange={handleInput} className="form-controlS" />
              {/* Add error handling for confirmPassword */}
              {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
              <i className="zmdi zmdi-lock" />
            </div>
            <button type="submit">Register <i className="zmdi zmdi-arrow-right" /></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

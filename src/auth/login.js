import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "../pages/Navbar";
import axios from "axios";
import Validation from "./loginvalidation";
import { useState } from "react";
import './Login.css'


export const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.email === "admin@gmail.com" && values.password === "admin") {
      navigate("/admin");
      return;
    }
    setErrors(Validation(values));
    console.log(values)
  
    if (errors.email === "" && errors.password === "") {
      axios.post('http://localhost:4000/login', values)
        .then(res => {
          if (res.data === "success") {
            navigate("/File");
            console.log(res.data)
          } else {
            alert('Invalid email or password');
          }
        })
        .catch(err => console.log(err));
    }
    
  };
  return (
    <>
      <Navbar />
    {/*  <div className='login  d-flex   '>
        <div className=''>
          <div className='"'>
            <div className='d-flex align-items-center'>
              <div className='bg-white p-5 rounded w-100 '>
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                  <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" placeholder='Enter email' name='email' onChange={handleInput} className='form-control rounded-0' />
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" placeholder='Enter password' name='password' onChange={handleInput} className='form-control rounded-0' />
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                  </div>
                  <button type="submit" className='btn btn-success w-100'><strong>Log In</strong></button>
                  <div className="mt-3 text-center">
                    <Link to="/signup" className='btn btn-default border w-100 text-decoration-none'>Create Account</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
  </div>*/}
  
  
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="../assets/img/img-01.png" alt="IMG" />
            </div>
            <form onSubmit={handleSubmit} className="login100-form validate-form">
              <span className="login100-form-title">
                Member Login
              </span>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="email" name="email" placeholder="Email" onChange={handleInput} />
                {errors.email && <span className='text-danger'>{errors.email}</span>}
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="password" placeholder="Password" onChange={handleInput} />
                {errors.password && <span className='text-danger'>{errors.password}</span>}
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button type="submit" className='btn btn-success w-100'><strong>Log In</strong></button>
              </div>
              <div className="text-center p-t-12">
                <span className="txt1">
                  Forgot
                </span>
                <a className="txt2" href="#">
                  Username / Password?
                </a>
              </div>
              <div className="text-center p-t-136">
                <Link to="/signup" className="txt2" >
                  Create your Account
                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default Login;
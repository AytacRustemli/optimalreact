import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Register/Register.scss";
import Swal from "sweetalert2";
import { Alert } from "@mui/material";
import { BASE_URL } from './../../api/config';

const Register = () => {

  const navigate = useNavigate();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const registerUser = async () => {
    var user = await fetch(`${BASE_URL}Auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        password: password,
      }),
    }).then((respons) => respons.json());

    if (user.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Təbriklər! Sizin hesabınız müvəffəqiyyətlə yaradıldı!",
        showConfirmButton: false,
        timer: 1500,
      }).then((c) => {
        navigate("/login");
      });
    } else {
      setErrorMessage(user.message);
    }
  };
  

  return (
    <div id="register">
      <div className="container">
        <div className="hesab">
          <h1>HESAB QEYDİYYATI</h1>
          <p>Əgər artıq hesabınızı yaratmısınızsa, giriş səhifəsinə keçin.</p>
        </div>
        <div className="legend">
          <p>Şəxsi məlumatlar</p>
          
          <div className="containerr">
            <div className="row">
              <div className="col-lg-2">
                <div className="d-flex align-items-center">
                  <i class="fa-solid fa-star"></i>
                  <span>Ad</span>
                </div>
              </div>
              <div className="col-lg-10">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Ad"
                  id="input-firstname" onChange={(e) => setFullName(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="containerr">
            <div className="row">
              <div className="col-lg-2">
                <div className="d-flex align-items-center">
                  <i class="fa-solid fa-star"></i>
                  <span>E-mail</span>
                </div>
              </div>
              <div className="col-lg-10">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  id="input-email" onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="legend">
          <p style={{ marginTop: "20px" }}>Şifrə</p>
          {errorMessage && (
          <Alert variant="outlined" severity="error">
            {errorMessage}
          </Alert>
        )}
          <div className="containerr">
            <div className="row">
              <div className="col-lg-2">
                <div className="d-flex align-items-center">
                  <i class="fa-solid fa-star"></i>
                  <span>Şifrə</span>
                </div>
              </div>
              <div className="col-lg-10">
                <input
                  type="password"
                  name="password"
                  placeholder="Şifrə"
                  id="input-password" onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="legend">
          <p style={{ marginTop: "20px" }}>Xəbər bülleteni</p>
          <div className="containerr">
            <div className="row">
              <div className="col-lg-2">
                <div className="d-flex align-items-center">
                  <span>Abunə ol</span>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="row">
                  <div className="col-lg-1">
                    <label>
                      <input
                        className="radio-inline"
                        type="radio"
                        name="newsletter"
                        value="1"
                      />
                    </label>
                    <p className="first">Bəli</p>
                  </div>
                  <div className="col-lg-1">
                    <label>
                      <input
                        className="radio-inline"
                        type="radio"
                        name="newsletter"
                        value="1"
                      />
                    </label>
                    <p className="first">Xeyr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gizlilik">
            <div className="d-flex">
                <p>Mən <span>Gizlilik siyasəti</span> -ni oxudum və razıyam
                <input type="checkbox" name="agree" value="1"></input>
                </p>
                
            </div>
        </div>
        <div class="comment-submit">
            <button type="submit" className="cart-btn" onClick={() => registerUser()}>
              Davam et
            </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

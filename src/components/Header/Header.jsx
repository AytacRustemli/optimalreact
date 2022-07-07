import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserAction, logoutUserAction } from "../../redux/Actions/UserAction";
import "../Header/header.scss";
import { BASE_URL } from "./../../api/config";

const Header = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [category, setCategory] = useState([]);
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = () =>{
    dispatch(logoutUserAction())
    navigate("/")
  }

  const getCAtegories = async () => {
    await fetch(BASE_URL + "category/getall")
      .then((a) => a.json())
      .then((data) => setCategory(data));
  };

  useEffect(() => {
    getCAtegories();
  }, [userInfo]);

  return (
    <div>
      <section id="header">
        <div className="topNav">
          <div className="container">
            <div className="d-flex align-items justify-content-between">
              <div className="left">
                <ul className="d-flex">
                  <li>Vakansiyalar</li>
                  <li>Kampaniyalar</li>
                  <li>Brendlər</li>
                  <li>Filiallar</li>
                  <li>Servis</li>
                  <li>Əlaqə</li>
                  <img
                    src="https://optimal.az/image/catalog/Optimal/samsung_logo.png"
                    alt=""
                  />
                </ul>
              </div>
              <div className="right">
                <div className="d-flex align-items justify-content-between">
                  <div className="flag">
                    <img src="https://optimal.az/image/flags/az.png" alt="" />
                    <span>AZ</span>
                    <i class="fa-solid fa-angle-down"></i>
                    <ul>
                      <li>AZƏRBAYCAN</li>
                      <li>RUS</li>
                    </ul>
                  </div>
                  <div className="money">
                    <i class="fa-solid fa-money-bill-1"></i>
                    <span>Aylıq Ödəniş</span>
                  </div>
                  <div className="qeydiyyat">
                    <i class="fa-solid fa-circle-check"></i>
                    <span>Qeydiyyat</span>
                  </div>
                  <div className="user">
                    <i
                      style={{ fontSize: "15px" }}
                      class="fa-solid fa-user"
                    ></i>
                    <span>Hesabım</span>
                    <i class="fa-solid fa-angle-down"></i>
                    <ul>
                      {
                        userInfo.length === 0 ? (
                          <Link to="/login" style={{textDecoration: "none"}}>
                          </Link>
                        ) : (
                          <Link to='/account' style={{textDecoration: "none"}}>
                            <li>Hesabım</li>
                          </Link>
                        )
                      }
                      
                      <li>Sifariş Tarixçəsi</li>
                      {userInfo.length === 0 ? (
                          <Link to="/login" style={{textDecoration: "none"}}>
                            <li>Giriş</li>
                          </Link>
                      ) : (
                        <Link to="/" style={{textDecoration: "none"}}>
                          <li onClick={() => logOut()}>Çıxış</li>
                        </Link>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="centerNav">
          <div className="container">
            <div className="d-flex align-items justify-content-between">
              <div className="image">
                <img
                  src="https://optimal.az/image/catalog/Optimal/Optimal%20logo.png"
                  alt=""
                />
              </div>
              <div className="search">
                <input type="text" placeholder="axtar" />
              </div>
              <div className="tel">
                <div className="d-flex">
                  <img
                    src="https://optimal.az/image/cache/catalog/Optimal/phone-100x100.png"
                    alt=""
                  />
                  <div className="cagri">
                    <div className="d-flex">
                      <h3>Çağrı mərkəzi</h3>
                      <h1>(012)954</h1>
                    </div>
                    <p class="workdays">Hər gün 09:00 - 21 : 00 </p>
                  </div>
                </div>
              </div>
              <div className="heart">
                <div className="d-flex">
                  <div className="box">
                    <i class="fa-solid fa-heart"></i>
                    <div className="zero">
                      <p>0</p>
                    </div>
                  </div>
                  <div className="box1">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div className="box2">
                    <span className="eded">0</span>
                    <span class="qiymet">Ədəd - 0.00₼</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomNav">
          <div className="container">
            <ul className="category d-flex">
              {category.map((e) => (
                <li key={Math.floor(Math.random() * 100000000)}>{e.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

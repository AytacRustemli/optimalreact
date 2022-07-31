import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/MyContext";
import { getUserAction, logoutUserAction } from "../../redux/Actions/UserAction";
import "../Header/header.scss";
import { BASE_URL } from "./../../api/config";

const Header = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [category, setCategory] = useState([]);
  const [parentcategory, setParentCategory] = useState([]);
  const {cartCount} = useContext(CartContext)
  const { cartItems } = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const[navbar,setNavbar] = useState(false)


  const countTotal = () => {
    var price = 0;
    cartItems.map((cart) => {
      price += cart.price * cart.quantity;
    });
    setTotalPrice(price);
  };

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
    countTotal();
    getCAtegories();
  }, [totalPrice, cartItems,userInfo]);

  const changeBackground = () =>{
    if(window.scrollY >= 10){
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  };

  window.addEventListener('scroll',changeBackground);

  return (
    <div>
      <section id="header">
        <div className={navbar ? 'topNav active' : 'topNav'}>
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
                <Link to='/'>
                  <img
                    src="https://demo.hasthemes.com/img/upohar/logo.png"
                    alt=""
                  />
                </Link>
              </div>
              <div className="d-flex align-items">
                <input placeholder='Axtar...' type="text" />
                <i class="fa-solid fa-magnifying-glass go"></i>
                
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
                      <h1>(018)2337</h1>
                    </div>
                    <p class="workdays">Hər gün 09:00 - 21 : 00 </p>
                  </div>
                </div>
              </div>
              <div className="heart">
                <div className="d-flex">
                  <div className="box">
                    <Link to='/favories'>
                      <i class="fa-solid fa-heart"></i>
                    </Link>

                  </div>
                  <div className="box1">
                    <Link to='/cart'>
                      <i class="fa-solid fa-cart-shopping"></i> 
                    </Link>
                  </div>
                  <div className="box2">
                    <span className="eded">{cartCount}</span>
                    <span class="qiymet">Ədəd - {totalPrice}₼</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomNav">
          <div className="container">
            <ul className="category d-flex justify-content-between">
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

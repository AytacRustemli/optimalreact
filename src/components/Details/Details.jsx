import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from './../../api/config';
import '../Details/Details.scss'
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { FaStar } from "react-icons/fa";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";


const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Details = () => { 
    const {id} = useParams();
    const [products,setProducts] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [count, setCounter] = useState(1);
    const [userName, setUserName] = useState("");
    const [review, setReview] = useState("");
    const [email, setEmail] = useState("");
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [value, setValue] = useState("1");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const handleClick = (value) => {
      setCurrentValue(value);
    };
    const handleMouseOver = (value) => {
      setHoverValue(value);
    };
    const handleMouseLeave = (value) => {
      setHoverValue(undefined);
    };
    const postComment = async () => {
      fetch(BASE_URL + "Comment/addcomment", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          userName: userName,
          userEmail: email,
          review: review,
          ratings: currentValue,
          productId: id,
        }),
      });
    };
    const artir = () => {
      setCounter((count) => count + 1);
    };
    const azalt = () => {
      if (count < 1) {
        count = 1;
      }
      setCounter((count) => count - 1);
    };

    var starCount = products.rating;
    var test = [
      <StarOutlineIcon />,
      <StarOutlineIcon />,
      <StarOutlineIcon />,
      <StarOutlineIcon />,
      <StarOutlineIcon />,
    ];

    for (let index = 0; index < 5; index++) {
      if (starCount % 1 != 0) {
        starCount -= starCount % 1;
      }
      if (index < starCount) {
        test[index] = <StarIcon />;
      } else {
        if (products.rating % 1 == 0) {
          break;
        }
        if (index == starCount) {
          test[index] = <StarHalfIcon />;
          break;
        }
      }
    }
    const reviewStar = (stars) => {
      var star = [
        <StarOutlineIcon />,
        <StarOutlineIcon />,
        <StarOutlineIcon />,
        <StarOutlineIcon />,
        <StarOutlineIcon />,
      ];

      for (let i = 0; i < stars; i++) {
          star[i]= <StarIcon style={{color:"#FFBA5A"}} />
      }

        return (
          <>
            {
                star.map(e => (e))
            }
          </>
        )
    }
    const getProducts = async () => {
        await fetch(BASE_URL + "product/getbyid/" + id)
          .then((res) => res.json())
          .then((data) => setProducts(data.message));
    };
    useEffect(() => {
       getProducts();
    }, []);

    return (
        <div id='detail'>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                      <div className="imagee">
                        <div className="row">
                          <div className="col-lg-2">
                            {
                              products.productPictures &&
                                products.productPictures.map((e) => (
                                  <img onClick={(a) => setPhoto(e)} className='sml-picture' width="100%" src={e} alt="" />
                                ))
                            }
                          </div>
                          <div className="col-lg-10">
                            {products.productPictures && (
                              <div className="big-picture">
                                <img width="100%" src={photo.length === 0 ? products.productPictures[0] : photo} alt="" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
              </div>
              <div className="col-lg-8">
                      <div className="right">
                        <h1 className="first">{products.name}</h1>
                        <div className="d-flex">
                          <div className="star">
                            <img src="https://optimal.az/catalog/view/theme/default/image/stars-0.png" alt="" />
                          </div>
                          <span className='span'>{products.reviewCount} şərh</span>
                        </div>
                        <ul>
                          <li>
                            Brend: <span>Vestel</span>
                          </li>
                          <li>Məhsulun Kodu: W810T2S</li>
                        </ul>
                        <div className="price">
                          <p>Qiymət: <span>849.99₼</span></p>
                        </div>
                        <div className="red">
                          <p>-120₼</p>
                          <span>nağd alışda 729.99₼</span>
                        </div>
                      </div><hr />
                      <div className="right1">
                        <div className="d-flex">
                          <h4>Sayı</h4>
                          <div className="input">
                            <input type="number" name="quantity" min="1" value={count} size="2" id="input-quantity" class="form-control" />
                          </div>
                          <span className='span' onClick={azalt}><i class="fa fa-minus"></i></span>
                          <span className='span' onClick={artir}><i class="fa fa-plus"></i></span>
                          <div className="sebet">
                            <span>Səbətə Əlavə et</span>
                          </div>
                          <div className="box">
                            <i class="fa-solid fa-heart"></i>
                          </div>
                          <div className="boxx">
                            <i class="fa-solid fa-minimize"></i>
                          </div>
                        </div>
                      </div><hr />
                      <div className="right2">
                        <div className="d-flex">
                          <img src="https://optimal.az/image/catalog/IKONLAR/15%20deqiqe%20kredit.png" alt="" />
                          <img src="https://optimal.az/image/catalog/IKONLAR/pulsuz%20birlikde.png" alt="" />
                          <img src="https://optimal.az/image/catalog/IKONLAR/Zemanet-ikonu-1-il.png" alt="" />
                        </div>
                        <span class="krm_stock">Anbarda var</span>
                      </div>
              </div>
            </div>
          </div>
          <div className="container">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Xüsusiyyətlər" value="1" />
                    <Tab label={`Şərhlər (${products.reviewCount})`} value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <table>
                    <tbody>
                      <tr className='tr'>
                        <td>Brend</td>
                        <td>Vestel</td>
                      </tr>
                      <tr className='tr2'>
                        <td>Proqramlar</td>
                        <td>Sürətli, Əllə Yuma / Həssas 30°C, Qarışıq 30°C, Gündəlik 60°C.</td>
                      </tr>
                      <tr className='tr'>
                        <td>Enerji sinfi</td>
                        <td>A+++</td>
                      </tr>
                      <tr className='tr2'>
                        <td>Buxar texnologiyası</td>
                        <td>Var</td>
                      </tr>
                      <tr className='tr'>
                        <td>Uşaq kilidi</td>
                        <td>Var</td>
                      </tr>
                      <tr className='tr2'>
                        <td>Eko</td>
                        <td>Var</td>
                      </tr>
                      <tr className='tr'>
                        <td>Displey</td>
                        <td>Var</td>
                      </tr>
                      <tr className='tr2'>
                        <td>Maksimal yüklənmə</td>
                        <td>8 kq</td>
                      </tr>
                      <tr className='tr'>
                        <td>Ütüləmə funksiyası</td>
                        <td>Var</td>
                      </tr>
                      <tr className='tr2'>
                        <td>Rəngi</td>
                        <td>Ağ</td>
                      </tr>
                    </tbody>
                  </table>
                </TabPanel>
                <TabPanel value="2">
                  <div id="comment">
                    <div className="container">
                      <div className="top">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="add">
                              <div className="d-flex">
                                <div className="admin">
                                  {products.comments &&
                                    products.comments.map((comment) => (
                                      <div key={comment.userEmail}>
                                        <h6 className="date">
                                          {comment.userName} - {comment.userEmail}
                                        </h6>
                                        <p className="light">Sizin yazdığınız şərh : {comment.review}</p>
                                        <p>
                                          Sizin verdiyiniz rating :{reviewStar(comment.ratings)}
                                        </p>
                                        <hr />
                                      </div>
                                    ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bottom">
                        <div class="comment-title">
                          <h2>Şərh yaz</h2>
                        </div>
                        <div class="comment-input-box">
                          <div class="row">
                            <div class="col-lg-12">
                              <div class="comment-input">
                                <input
                                  width='100%'
                                  onChange={(e) => setUserName(e.target.value)}
                                  type="text"
                                  placeholder="Adınız"
                                  required
                                />
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="comment-input">
                                <input
                                  onChange={(e) => setEmail(e.target.value)}
                                  type="email"
                                  placeholder="Email'iniz"
                                  required
                                />
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <textarea
                                onChange={(e) => setReview(e.target.value)}
                                placeholder="Şərhiniz"
                                class="comment-input comment-textarea"
                              ></textarea>
                            </div>
                            <div class="comment-rating">
                              <div className="d-flex">
                                <span>Reytinq</span>
                                <div style={styles.containerr}>
                                  <div style={styles.stars}>
                                    {stars.map((_, index) => {
                                      return (
                                        <FaStar
                                          key={index}
                                          size={15}
                                          style={{
                                            marginRight: 10,
                                            cursor: "pointer",
                                          }}
                                          color={
                                            (hoverValue || currentValue) > index
                                              ? colors.orange
                                              : colors.grey
                                          }
                                          onClick={() => handleClick(index + 1)}
                                          onMouseOver={() => handleMouseOver(index + 1)}
                                          onMouseLeave={handleMouseLeave}
                                        />
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="comment-submit">
                                <button
                                  onClick={(e) => postComment()}
                                  type="submit"
                                  class="cart-btn"
                                >
                                  Davam et
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
              
    )
}


const styles = {
  containerr: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};


export default Details
import React from 'react'
import '../Footer/Footer.scss'

const Footer = () => {
  return (
    <div id='footer'>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="footer-title">
              <h3>ŞƏXSİ KABİNET</h3>
            </div>
            <div className="footer-content">
              <ul>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Sifarişlərim</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Sifariş tarixçəsi</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>İstək siyahısı</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Xəbər bülleteni</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-title">
              <h3>"OPTİMAL ELEKTRONİKA" MMC</h3>
            </div>
            <div className="footer-content">
              <ul>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Haqqımızda</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>İstifadə şərtləri</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Çatdırılma və Quraşdırılma</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Mediada Biz</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-title">
              <h3>MÜŞTƏRİ ÜÇÜN</h3>
            </div>
            <div className="footer-content">
              <ul>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Sifarişlərim</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Korporativ satış</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>FAQ</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Məxfilik siyasəti</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-title">
              <h3>MƏLUMAT</h3>
            </div>
            <div className="footer-content">
              <ul>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Kampaniyalar</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Brendlər</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Filiallar</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Servis</span>
                </li>
                <li className='d-flex align-items-center'>
                  <i class="fa-solid fa-angles-right"></i>
                  <span>Vakansiyalar</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-title">
              <h3>ƏLAQƏ</h3>
            </div>
            <div className="footer-contentt">
              <ul>
                <li className='d-flex align-items-center'>
                  <span>Ünvan:</span>
                  <span>Bakı şəh, Nəsimi ray., Azadlıq pr. 120 B</span>
                </li>
                <li className='d-flex align-items-center'>
                  <span>Telefon:</span>
                  <span>(+99412) 954</span>
                </li>
                <li className='d-flex align-items-center'>
                  <span>Email:</span>
                  <span>info@optimal.az</span>
                </li>
              </ul>
            </div>
            <div className="footer-biz">
              <h3>BİZİ İZLƏYİN</h3>
              <div className="readmore">
                <input type="email" placeholder='Email' />
                <span>Abunə olun</span>
              </div>
            </div>
          </div>
        </div>
        <hr style={{color: "white"}} />
        <div className="row">
          <div className="col-lg-3">
            <h3 className='h3'>BİZ SOSİAL ŞƏBƏKƏLƏRDƏ</h3>
          </div>
          <div className="col-lg-4">
            <ul className='d-flex link'>
              <li>
                <i class="fa-brands fa-facebook-f icon1"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram icon2"></i>
              </li>
              <li>
                <i class="fa-brands fa-twitter icon3"></i>
              </li>
              <li>
                <i class="fa-brands fa-linkedin-in icon4"></i>
              </li>
              <li>
                <i class="fa-brands fa-youtube icon5"></i>
              </li>
              <li>
                <i class="fa-brands fa-whatsapp icon6"></i>
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="d-flex">
              <div className="image">
                <img src="https://www.credit-card-logos.com/images/visa_credit-card-logos/visa_classic_chip.gif" alt="" />
              </div>
              <div className="image">
                <img src="https://www.credit-card-logos.com/images/mastercard_credit-card-logos/mastercard_logo_5.gif" alt="" />
              </div>
              <div className="image">
                <img src="https://optimal.az/image/catalog/cart/albali.png?v=2" alt="" />
              </div>
              <div className="image">
                <img src="https://optimal.az/image/catalog/cart/birkart.png" alt="" />
              </div>
              <div className="image">
                <img src="https://optimal.az/image/catalog/cart/bolkart1.png?v=2" alt="" />
              </div>
              <div className="image">
                <img src="https://optimal.az/image/catalog/cart/tamkart1.png" alt="" />
              </div>
              <div className="image">
                <img src="https://optimal.az/image/catalog/cart/worldcard1.png" alt="" />
                <img src="https://optimal.az/image/catalog/cart/UCard-visa.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr style={{color: "white"}} />
        <div className="row justify-content-between">
          <div className="col-lg-10">
            <span className='span'>Copyright © 2022 "Optimal Elektronika" MMC. All rights reserved.</span>
          </div>
          <div className="col-lg-2">
            <div className="d-flex">
              <span className='span'>Created by:</span>
              <img className='img1' src="https://optimal.az/image/catalog/amiroff.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../Login/login.scss'
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../redux/Actions/UserAction';
import  Swal  from 'sweetalert2';

const Login = () => {
  const { userInfo } = useSelector((state) => state.user)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const dispach = useDispatch() 

  const loginHandler = () => {
    dispach(loginUserAction(email, password))
  }


  useEffect(() => {
    if (userInfo.status) {
      if (userInfo.status === 200) {
        navigate("/")
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Bir xəta baş verdi.',
          text: 'Emailiniz və ya şifrəniz yanlışdır!'
        })
        navigate("/login")
      }
    }
  }, [userInfo])



  return (
    <div id='login'>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="well">
              <h2>YENİ MÜŞTƏRİ</h2>
              <p><strong>Hesab qeydiyyatı</strong></p>
              <p style={{color: "#6b6a81"}}>Hesab yaradaraq saytın tam funksionallığından istifadə edə bilərsiniz.</p>
              <div class="comment-submit">
                <button type="submit" class="cart-btn" onClick={() => navigate("/register")}>
                  Davam et
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="well">
              <h2>DAİMİ MÜŞTƏRİ</h2>
              <p><strong>Mən daimi müştəriyəm</strong></p>
              <p><strong>E-mail ünvanı</strong></p>
              <input type="text" name="email" placeholder="E-mail ünvanı" id="input-email" class="form-control" onChange={(e) => setEmail(e.target.value)} />
              <p style={{marginTop:"10px"}}><strong>Şifrə</strong></p>
              <input type="password" name="password" placeholder="Şifrə" id="input-password" class="form-control" onChange={(e) => setPassword(e.target.value)} />
              <div class="comment-submit">
                <button type="submit" class="cart-btn" onClick={() => loginHandler()}>
                  GİRİŞ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
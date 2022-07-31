import React from 'react'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import './finish.scss'


const Finish = () => {
  return (
    <div id='finish'>
      <div className="container">
        <div className="finishBox">
          <h3>Sifarişi tamamla</h3>
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="card p-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <TextField  id="outlined-basic" fullWidth label="Ad" required variant="outlined"/>
                    </div>
                    <div className="col-lg-6 ">
                      <TextField required id="outlined-basic" fullWidth label="Soyad" variant="outlined" />
                    </div>
                    <div className="col-lg-6 my-4">
                      <TextField required id="outlined-basic" fullWidth label="Mobil nömrə" type="number" variant="outlined" />
                    </div>
                    <div className="buttonBox">
                      <Link to="/contact">
                        <button ><span>Sifarişi tamamla</span></button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Finish
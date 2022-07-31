import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/config';
import { useParams } from 'react-router-dom';
import './meslehetler.scss'

const Meslehetler = () => {
    const {id} = useParams();
    const [products,setProducts] = useState([]);

    const getProducts = async () => {
        await fetch(BASE_URL + "product/getbyid/" + id)
          .then((res) => res.json())
          .then((data) => setProducts(data.message));
    };
    useEffect(() => {
       getProducts();
    }, []);

  return (
    <div id='meslehetler'>
        <div className="container">
            <div className="text">
                <h2>{products.name}</h2>
            </div>
            <div className="text1">
                <p>{products.description}</p>
                <ul>
                    <li>{products.marka}</li>
                    <li>{products.model}</li>
                    <li>{products.ekran}</li>
                    <li>{products.ceki}</li>
                    <li>{products.kamera}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Meslehetler
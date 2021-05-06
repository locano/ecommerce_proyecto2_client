import React from 'react';
import { EcommerceData } from './EcommerceData';
import './Ecommerce.css';
import * as AiIcons from 'react-icons/ai';

const Ecommerce = () => {
    return (
        <div className='shopContainer'>
            <h1 className='eShopTitle'>Productos</h1>
            <ul className='custom-ul'>
                {EcommerceData.map((item, key) => {
                    return (
                        <li key={key} className='row eProductCard'>
                            <img src={item.img} className='col-12 productImage' alt='imagen'></img>
                            <h2 className='col-12 productName'>{item.title}</h2>
                            <p className='col-12 prodDescription'>{item.descr}</p>
                            <h2 className='col-6 aling-middle productPrice'>{item.price}</h2>
                            <AiIcons.AiOutlineShoppingCart className='col-6 align-middle eCart'/>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Ecommerce;

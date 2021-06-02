import React, {useState, useEffect} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {db, firebase, auth} from "../../../config/firebase.config";
import './shopAdmin.css';

const AddProd = () =>{
    const [qtyNum, setqtyNum] = useState(0);
    const [prodName, setprodName] = useState("");
    const [prodDesc, setprodDesc] = useState("");
    const [prodCateg, setprodCateg] = useState("");
    const [priceNum, setpriceNum] = useState(0.0);
    const [prodImg, setprodImg] = useState("");
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        let newQtyNum = parseInt(qtyNum);
        let newPriceNum = parseFloat(priceNum).toFixed(2);
        db.collection("products").doc().set({
            Qty: newQtyNum,
            Title: prodName,
            descr: prodDesc,
            category: prodCateg,
            img: prodImg,
            price: newPriceNum
        }).then(() => { 
            alert("changes uploaded successfully!")
            history.push('/admin/shop');
        }).catch((error) => {
            console.error("Error editing product: ", error);
        })
    }
    
    return(
        <div className='row d-flex justify-content-center'>
            <h1 className='col-12 formTitle'>Add products</h1>

            <label className= 'col-5 formInput'>Insert product's initial quantity: </label>
            <input className= 'col-5 formInput' placeholder='Quantity' onChange={(e) => setqtyNum(e.target.value)} />

            <label className= 'col-5 formInput'>Insert product's Name: </label>
            <input  className= 'col-5 formInput'placeholder='Name'  onChange={(e) => setprodName(e.target.value)} />

            <label className= 'col-5 formInput'>Insert product's Description: </label>
            <textarea className= 'col-5 formInput' placeholder='Description'  onChange={(e) => setprodDesc(e.target.value)} />

            <label className= 'col-5 formInput'>Insert product's category: </label>
            <input className= 'col-5 formInput' placeholder='Price' onChange={(e) => setprodCateg(e.target.value)} />

            <label className= 'col-5 formInput'>Insert product's Price: </label>
            <input className= 'col-5 formInput' placeholder='Price' onChange={(e) => setpriceNum(e.target.value)} />

            <label className= 'col-5 formInput'>Insert link to the new Product's image: </label>
            <input className= 'col-5 formInput' placeholder='Image link' onChange={(e) => setprodImg(e.target.value)} />

            <button className= 'col-5 formInput' type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    )
}
export default AddProd;
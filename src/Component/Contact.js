import React, { useState } from "react";
import "../App.css";
import {db} from "../firebase";

const Contact=()=>{

    const[email,setEmail] = useState("");
    const[number,setNumber] = useState("");

    const [loader,setLoader] = useState(false);

    const handleSubmit =(e)=>{
        e.preventDefault();
    
       setLoader(true)

        db.collection('conatcts').add({
            email:email,
            number:number,
        })
        .then(()=>{
            alert('Messagae has been submittedd ');
            setLoader(false)

        })
        .catch((error)=>{
            alert(error.message);
            setLoader(false)

        })

        setEmail("");
        setNumber("");
    }

    return(
       <div className="container">
        <h1 style={{color:"purple"}}>Welcome to Unilet Vouchers...</h1>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <p> 
                <input type={{email}} placeholder="Email"
                value={email}
                onChange = {(e) =>setEmail(e.target.value) } required
            ></input></p>
           

           <label>Mobile Number</label>
           <p><input type={{number}} maxLength={10} placeholder="Number"
             value={number}
             onChange = {(e) =>setNumber(e.target.value) } required

></input></p> 

           <button type="submit" style={{background:loader ? "#ccc" : "rgb(2,2,110"}}>GET CARD</button>
        </form>
       </div>
    );
}
export default Contact;
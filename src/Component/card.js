import React, { useState } from "react";
import "./card.css";
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


const Card=()=>{

    const [image,setImage]=useState(false)
    const reveal=()=>{
        setImage(true)
    }

    // const { width, height } = useWindowSize()

    return(
        <div className="card" >
            
            <div className="inner-card">
          
             {!image ? (
                <button onClick={reveal}>tap to reveal</button>
            ) : (
                <>
                <img src="../voucher.jpg" alt="not found" />
                <Confetti
        width={1500}
        height={700}
      />
                </>
                
                // <h1>hii its done</h1>
            )}
           
           
        </div>
        
         
       </div>
        
    )
}

export default Card;
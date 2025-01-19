import React from "react";
import "./shoe.css";
import Header from "../header";
import Footer from "../footer";
const Shoe = () => {
  return (
    <div>
		<Header/>
        <div className="cleaningOuter shoe">
            <div className="container">
                <div className="dataBoxInfoShoe">
                    <h3>SHOE SERVICE</h3>
                    <p>From cleaning and polishing to repairs and full <br/>restorations, we bring your shoes back to life with expert <br/>care. Preserve their style, comfort, and durability with <br/>our specialized services.</p>
                    <div><span className="washingLiner"></span></div>
                </div>
                <div class="perfectInfo">
                  <p>Soles may carry you, but only clean <br/>shoes leave a lasting impression." 
                 <br/> –  Winston Churchill</p>
                </div>
            </div>
        </div>
		<Footer/>
    </div>
  );
};

export default Shoe;

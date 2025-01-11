import React from "react";
import "./steamIron.css";
import Header from "../header";
import Footer from "../footer";
const StreamIron = () => {
  return (
    <div>
		<Header/>
        <div className="cleaningOuter streamInfo">
            <div className="container">
                <div className="dataBoxInfo">
                    <h3>STEAM IRON</h3>
                    <p>Every garment is expertly steamed, leaving <br/>it impeccably crease-free and Every garment <br/>is delivered hung, ready to wear. </p>
                    <div><span className="steamLiner"></span></div>
                </div>
                <div class="perfectInfo">
                  <p>"Perfectly ironed clothes are the silent <br/>heralds of dignity and elegance."<br/> — Oscar Wilde</p>
                </div>
            </div>
        </div>
		<Footer/>
    </div>
  );
};

export default StreamIron;

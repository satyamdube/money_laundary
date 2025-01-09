import React from "react";
import "./services.css";
import Header from "../header";
import Footer from "../footer";
const OurServices = () => {
  return (
    <div>
		<Header/>
		<div className="cleaningOuter">
            <div className="container">
                <div className="dataBoxInfo">
                    <h3>CLEANING</h3>
                    <p>Our cleaning process uses fabric-specific, eco-friendly <br/>chemicals tailored to the unique thread count and <br/>material of each garment. Whether it’s delicate silks, fine <br/>wools, or everyday wear, we ensure impeccable <br/>cleanliness while preserving the integrity and longevity <br/>of your clothes.</p>
                    <div><span className="cleaningLiner"></span></div>
                </div>
            </div>
        </div>
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
		<div className="cleaningOuter alter">
            <div className="container">
                <div className="dataBoxInfo">
                    <h3>ALTERATIONS AND REPAIRS</h3>
                    <p>We tailor your garments to perfection, ensuring they fit <br/>your needs and style seamlessly. From precise <br/>alterations to invisible repairs, our experts ensure your <br/>clothes feel as good as new while matching your unique <br/>preferences.</p>
                    <div><span className="washingLiner"></span></div>
                </div>
            </div>
        </div>
		<div className="cleaningOuter spotting">
            <div className="container">
                <div className="dataBoxInfo">
                    <h3>PRE AND POST SPOTTING</h3>
                    <p>We go beyond cleaning with meticulous pre and post-<br/>spotting care, treating every stain based on its type and <br/>fabric. Our expertise ensures flawless results while <br/>preserving the integrity of your garments</p>
                    <div><span className="washingLiner"></span></div>
                </div>
            </div>
        </div>
		<div className="cleaningOuter shoe">
            <div className="container">
                <div className="dataBoxInfo">
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

export default OurServices;

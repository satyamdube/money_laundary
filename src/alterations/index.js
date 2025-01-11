import React from "react";
import "./alterations.css";
import Header from "../header";
import Footer from "../footer";
const Alterations = () => {
  return (
    <div>
		<Header/>
		<div className="cleaningOuter alter">
            <div className="container">
                <div className="dataBoxInfo">
                    <h3>ALTERATIONS AND REPAIRS</h3>
                    <p>We tailor your garments to perfection, ensuring they fit <br/>your needs and style seamlessly. From precise <br/>alterations to invisible repairs, our experts ensure your <br/>clothes feel as good as new while matching your unique <br/>preferences.</p>
                    <div><span className="washingLiner"></span></div>
                </div>
            </div>
        </div>
		<Footer/>
    </div>
  );
};

export default Alterations;

import React, { useState } from "react";
import "./book_now.css";
import Header from "../header";
import Footer from "../footer";

const BookNow = () => {
  return (
    <div>
      <Header />
        <div className="placeOurderInfoOuter">
           <div className="topContentInfo">
              <div className="logoCenter"><img src="./images/whiteLogo.png" alt="Washing machine"/></div>
              <span className="linerInfo"></span>
              <h2> JUST A REMINDER...</h2>
              <h3>ITEMS</h3>
              <p><span>.</span> No need to list your items, just place them in a bag clearly labelled with your name and drop off at your building reception or we can come collect it. </p>
              <p><span>.</span> Our expert team check them after collection and send you an email including prices.</p>
              <h3>PRICES</h3>
              <p><span>.</span> The minimum order value is 650/- INR. If you place an order for less than 650/- it will be rounded up.</p>
              <p><span>.</span> View our full PRICE LIST to find out how much your order will be. </p>
              <h3>WANT TO GET HOLD OF US?</h3>
              <p><span>.</span> If you have any questions at all you can contact us at +91 92666 12700  or contactus@themoneylaundry.in</p>
           </div>
           <span className="washingLinerBottom mt-5 mb-5"></span>
           <br/>
           <div className="container">
              <div className="formDataInnerInfo mb-4">
                 <div className="innerCardInfo">
                    <div className="rowInput">
                       <input type="text" placeholder="Name*"/>
                    </div>
                    <div className="rowInput">
                       <input type="text" placeholder="Email*"/>
                    </div>
                    <div className="rowInput">
                       <input type="text" placeholder="Address*"/>
                    </div>
                    <div className="rowInput">
                       <input type="text" placeholder="Phone no*"/>
                    </div>  
                 </div>
                 <br/>
                 <div className="mt-5 mb-5 noteData">
                    <p>Note: <br/> If you do not select a specific pickup time and date, we will schedule your pickup at our standard time after confirming the details with you. Rest assured, our team will reach out to ensure the timing is convenient for you.</p>
                 </div>
                 <div className="row">
                    <div className="col-sm-6">
                      <div className="rowInput">
                        <input type="text" placeholder="Pick up date*"/>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="rowInput">
                        <input type="text" placeholder="Pick up time*"/>
                      </div>
                    </div>
                 </div>
                 <br/>
                 <div className="innerCardInfo mt-5 nrwTxt">
                   <h4>Special Instruction</h4>
                    <div className="rowInput">
                       <textarea placeholder="Any repairs and alterations needed/ Stain details/ Damage Informations? Eg. Shorten Grey Reiss trouser by 3 Cm"></textarea>
                    </div>
                 </div>
                 <div className="submit"><button className="btnIngo">Submit</button></div>
              </div>
           </div>
        </div>
      <Footer />
    </div>
  );
};

export default BookNow;

import React from 'react';
import './home.css';
const Home = () => {
  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="/images/banner1.jpg" className="d-block w-100" alt="..."/>
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div> */}
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="/images/banner2.jpg" className="d-block w-100" alt="..."/>
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div> */}
            </div>
            <div className="carousel-item">
              <img src="/images/banner3.jpg" className="d-block w-100" alt="..."/>
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div> */}
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container">
          <div className="outerTrustedPartner">
            <div className="contentInfoDataStay">
              <div className="contentsty">
                <h1>We Might Not Wash Your Money, But We’ll Wash Your Laundry Like It’s Cash!</h1>
                <p>A premium laundry service designed for those who value quality and perfection. we set out to challenge the outdated and misleading practices of the laundry and dry cleaning industry in India. Inspired by the seamless, transparent services we experienced abroad, we knew there was a better way. </p>
                </div>
                <a href="/contact"><button className="bookingInfo">Book Now</button></a>
                </div>
          </div>
         </div>
         <div className='outerSectionIonfoData'>
         <div className="container">
											<div className="how-it-works">
							<div className="flex-row">
																	<div className="col-xs-12 col-sm-6 col-md-4 flex-item">
										<div className="hw-item">
											<img src="./images/circle1.png" alt="Laundry Service In Maraimalai Nagar Urapakkam"/>
											<h3>Place Order &amp; Pick Up</h3>
											You can walk-in to any of our outlets, give us a call, visit our website/google search dry cleaners in Chennai or online laundry service near me to schedule a pickup.										</div>
									</div>
																	<div className="col-xs-12 col-sm-6 col-md-4 flex-item">
										<div className="hw-item">
											<img src="./images/Clothes-Washing-In-Chennai.png" alt="Clothes Washing In Chennai"/>
											<h3>Washing</h3>
											We at Tidy Laundry value your garments. After your garments are collected, they are washed in the latest state-of-the-art imported professional machines, designated to give superior wash with minimum friction.										</div>
									</div>
																	<div className="col-xs-12 col-sm-6 col-md-4 flex-item">
										<div className="hw-item">
											<img src="./images/Premium-Care-Laundry-Service.png" alt="Premium Care Laundry Service"/>
											<h3>Drying</h3>
											It is essential to dry garments at a low heat and with minimum tumble. We are equipped with high capacity steam tumble dryers which are the latest computerized dryers and, are programmable so that your clothes dry without overheating.										</div>
									</div>
																	<div className="col-xs-12 col-sm-6 col-md-4 flex-item">
										<div className="hw-item">
											<img src="./images/Steam-Ironing-Services-In-Chennai.png" alt="Steam Ironing Services In Chennai"/>
											<h3>Pressing</h3>
											This stage of laundry service operations at Tidy Laundry includes ironing clothes to smoothen out the intricacies. We are your online laundry service partner in Chennai.										</div>
									</div>
																	<div className="col-xs-12 col-sm-6 col-md-4 flex-item">
										<div className="hw-item">
											<img src="./images/Mother-Touch-Laundry.png" alt="Mother Touch Laundry"/>
											<h3>Sorting &amp; Post Spotting</h3>
											Sorting and Post spotting is one of the most important processes after pressing. Your clothes are sorted according to the identification label which are then, inspected for any leftover dirt and pressing quality. We ensure that only clean garments are delivered back.										</div>
									</div>
																	<div className="col-xs-12 col-sm-6 col-md-4 flex-item">
										<div className="hw-item">
											<img src="./images/fastest-laundry-service-in-chennai.png" alt="Fastest Laundry Service In Chennai"/>
											<h3>Bundling &amp; Delivery</h3>
											We are the best online laundry service provider. We cross-check the laundry note and thoroughly count and bundle your garments which are to be delivered on the scheduled day.										</div>
									</div>
															</div>
						</div>
									</div>
         </div>

         <div className="section-grids">
	<div className="container">
		<h2 className="section-title">The care doesn’t end <br/>until it reaches you.</h2>					<div className="grid-tems">
				<div className="flex-row">
											<div className="col-xs-12 col-sm-3 flex-item">
							<div className="white-card flex-inner">
								<img src="./images/dry-cleaners-in-chennai.png" alt="Dry Cleaners In Chennai"/>
								<h3>Mending &amp; Repairs</h3>
								<p></p><p>We offer all-inclusive, one-stop laundry service in Chennai so that your clothes are altered and repaired within an affordable budget without wasting your time.</p><p></p>
							</div>
						</div>
											<div className="col-xs-12 col-sm-3 flex-item">
							<div className="white-card flex-inner">
								<img src="./images/Best-Laundry-Services-In-Chennai.png" alt="Ironing Shop Near Me"/>
								<h3>Pressing</h3>
								<p></p><p>Years of experience has helped our staff at the best laundry service in Chennai to understand the basics of ironing different kinds of fabric and applying them to ensure the best ironing service available.</p><p></p>
							</div>
						</div>
											<div className="col-xs-12 col-sm-3 flex-item">
							<div className="white-card flex-inner">
								<img src="./images/Laundry-In-Chennai.png" alt="Laundry Service Near Me"/>
								<h3>Sorting &amp; <br/>Post Spotting</h3>
								<p></p><p>Sorting &amp; post spotting is done to ensure that spots &amp; stains are removed, clothes look clean &amp; refreshed. This is done for every garment that comes in at Tidy laundry and we promise quality care.</p><p></p>
							</div>
						</div>
											<div className="col-xs-12 col-sm-3 flex-item">
							<div className="white-card flex-inner">
								<img src="./images/online-laundry-service-in-chennai.png" alt="Online Laundry Service In Chennai"/>
								<h3>Bundling &amp; <br/>Delivery</h3>
								<p></p><p>Post sorting &amp; spotting, we collect all of your garments according to identification label which is bundled and delivered by the best laundry service in Chennai to your doorstep.</p><p></p>
							</div>
						</div>
									</div>
			</div>
			</div>
</div>
    </div>
  );
}

export default Home;

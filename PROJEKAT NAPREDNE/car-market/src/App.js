import "./App.css";
import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageSlider";
import png1 from "./images/1.png";
import png2 from "./images/2.png";
import png3 from "./images/3.png";
import e63 from './images/e63.jpeg';
import png4 from "./images/4.png";
import rs6 from "./images/rs62.jpg";
import m8 from "./images/M8.jpeg";
import rs7 from "./images/rs7.jpg";
import audi from "./images/car-logos/audi.png";
import mercedes from "./images/car-logos/mercedes.png";
import porsche from "./images/car-logos/porsche.svg";
function App() {
  const slides = [
    { url: png1, title: "Audi RS6" },
    { url: png2, title: "Mercedes GT" },
    { url: png3, title: "Mercedes E63S" },
    { url: png4, title: "BMW M8" },
  ];

  return (
    <div className="App">
      <section className="main">
        <div className="overlay"></div>
        <div
          style={{ backgroundImage: "url(" + png2 + ")" }}
          className="background-slider"
        ></div>
        <Navbar></Navbar>
        <div className="landing-text container">
          <p className="main-text">
            Live Life at<span>The Maximum</span>
          </p>
          <p className="support-text">
            Serbia's first luxury car dealer, founded in 2004. <br /> Spanning
            multiple continents, we are one of the best worldwide.
          </p>

          <p className="cta">Unleash your power</p>
        </div>
      </section>
      <section className="home-body">
        <div className="container car-logos">
          <img src={porsche} alt="" />
          <img src={audi} alt="" />
          <img src={mercedes} alt="" />
          <img src={porsche} alt="" />
          <img src={audi} alt="" />
          <img src={mercedes} alt="" />
          <img src={porsche} alt="" />
          <img src={audi} alt="" />
        </div>
        <div className="container hook">
          <p class="hook-main">LUXURIOUS CAR MARKET INDUSTRY LEADER</p>
          <div className="mini-cta">
            <p class="hook-support">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              obcaecati dolorem optio adipisci eveniet corrupti ipsum quis eius
              minus voluptatum! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Laborum fuga exercitationem doloremque suscipit
              quisquam ipsum sapiente nam ducimus velit quod?
            </p>
            <a href="#a" className="learn-more">
              Learn More
            </a>
          </div>
        </div>
        <div className="video-show container">
          <img src={rs6} alt="" />
        </div>
        <div className="statement container">
          <p className="statement-main">OUR CAR COLLECTION</p>
          <p className="statement-second">
            Get the car of your dreams with the installments of your choice.
            There are various attractive offers from AUTOZO <br /> through our
            collaboration with various trusted leasing partners.
          </p>
        </div>
        <div className="car-listings container">
          <div className="car-listings-content">
            <div className="car-card">
              <img src={rs6} alt="" />
              <div className="car-info">
                <div className="price-location">
                  <p className="price">$ 124.556</p>
                  <p className="location">Veternik</p>
                </div>
                <p className="car-name">Mercedes C-Class AMG</p>
                <a href="#a" className="buy">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="car-card">
              <img src={e63} alt="" />
              <div className="car-info">
                <div className="price-location">
                  <p className="price">$ 124.556</p>
                  <p className="location">Veternik</p>
                </div>
                <p className="car-name">Mercedes C-Class AMG</p>
                <a href="#a" className="buy">
                  Buy Now
                </a>
              </div>
            </div>
            <div className="car-card">
              <img src={rs7} alt="" />
              <div className="car-info">
                <div className="price-location">
                  <p className="price">$ 124.556</p>
                  <p className="location">Veternik</p>
                </div>
                <p className="car-name">Mercedes C-Class AMG</p>
                <a href="#a" className="buy">
                  Buy Now
                </a>
              </div>
            </div>
            
            <div className="car-card">
              <img src={m8} alt="" />
              <div className="car-info">
                <div className="price-location">
                  <p className="price">$ 124.556</p>
                  <p className="location">Veternik</p>
                </div>
                <p className="car-name">Mercedes C-Class AMG</p>
                <a href="#a" className="buy">
                  Buy Now
                </a>
              </div>
            </div>
            
            <div className="car-card">
              <img src={rs6} alt="" />
              <div className="car-info">
                <div className="price-location">
                  <p className="price">$ 124.556</p>
                  <p className="location">Veternik</p>
                </div>
                <p className="car-name">Mercedes C-Class AMG</p>
                <a href="#a" className="buy">
                  Buy Now
                </a>
              </div>
            </div>
            
            <div className="car-card">
              <img src={rs6} alt="" />
              <div className="car-info">
                <div className="price-location">
                  <p className="price">$ 124.556</p>
                  <p className="location">Veternik</p>
                </div>
                <p className="car-name">Mercedes C-Class AMG</p>
                <a href="#a" className="buy">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="see-all-container">
            <a href="#a" className="see-all">
                    See all cars 
                  </a>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

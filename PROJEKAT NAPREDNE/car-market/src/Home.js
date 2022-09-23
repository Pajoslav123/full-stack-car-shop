import png1 from "./images/1.png";
import logo from "./images/logo-test.png";
import png2 from "./images/2.png";
import png3 from "./images/3.png";
import e63 from "./images/e63.jpeg";
import png4 from "./images/4.png";
import rs6 from "./images/rs62.jpg";
import m8 from "./images/M8.jpeg";
import rs7 from "./images/rs7.jpg";
import a6 from "./images/a6.jpg";
import r8 from "./images/r8.jpg";
import rsq8hero from "./images/rsq8-hero2.png";
import audi from "./images/car-logos/audi.png";
import mercedes from "./images/car-logos/mercedes.png";
import porsche from "./images/car-logos/porsche.svg";
import beast from "./images/besat.jpg";
import Navbar from "./Components/Navbar";
const Home = () => {
  return (
    <div className="all">
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
          <img src={audi} alt="" />
          <img src={porsche} alt="" />
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

            <div className="car-card space-top">
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

            <div className="car-card space-top">
              <img src={r8} alt="" />
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

            <div className="car-card space-top">
              <img src={a6} alt="" />
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
        <div className="market container">
          <div className="market-content">
            <div className="left">
              <p className="slogan">THE UNTAMED BEAST</p>
              <div className="spacer-line"></div>
              <p className="market-title">BMW M8 Gran Coupe</p>
              <p className="market-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
                Cumque cum nobis ducimus beatae quibusdam!
                <br />
                Temporibus nostrum commodi voluptas quibusdam aliquam.
              </p>
              <div className="specs">
                <div class="specs-row">
                  <div className="small-dash"></div>
                  <p>
                    {" "}
                    Fuel consumption: <span>12.4l/100</span>
                  </p>
                </div>
                <div class="specs-row">
                  <div className="small-dash"></div>
                  <p>
                    {" "}
                    Horsepower: <span>12.4l/100</span>
                  </p>
                </div>
                <div class="specs-row">
                  <div className="small-dash"></div>
                  <p>
                    {" "}
                    Idegas: <span>12.4l/100</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={beast} alt="" />
            </div>
          </div>
        </div>
        <div className="hero">
          {/* <img src={rsq8hero} alt="" className="hero-bg" /> */}
          <div className="hero-content container">
            <img class="autozo" src={logo} alt="" />
            <p className="hero-heading">
              Start Living Your
              <br />
              Dreams Today!
            </p>
            <p className="hero-support">
              Luxury cars are a life icon second to none. <br />
              With you on every road.
            </p>
            <a className="hero-cta" href="#a">
              PRE-ORDER NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

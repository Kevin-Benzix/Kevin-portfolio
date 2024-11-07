import "../css/style.css";
export default function Project() {
  return (
    <main>
      <div className="m-view">
        <p>
          <a href="#home">HOME</a>
        </p>
        <p>
          <a href="#about">ABOUT</a>
        </p>
        <p>
          <a href="#photos">PHOTOS</a>
        </p>
        <p>
          <a href="#contact">CONTACT</a>
        </p>
      </div>
      <header>
        <nav>
          <ul>
            <li className="img">
              <img src="small pic.jpg" />
            </li>

            <li className="home2">
              <a href="#home">
                <i className="fa fa-home"></i>
                <span>HOME</span>
              </a>
            </li>

            <li>
              <a href="#about">
                <i className="fa fa-user"></i>
                <span>ABOUT</span>
              </a>
            </li>
            <li>
              <a href="#photos">
                <i className="fa fa-eye"></i>
                <span>PHOTOS</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="fa fa-envelope"></i>
                <span>CONTACT</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="main-page">
        <div className="home" id="home">
          <h1>Im Kevin Benzix.</h1>
          <p>Programmer and Web Designer.</p>
          <img src="small pic.jpg" />
        </div>
        <div className="about" id="about">
          <h2>My Name</h2>
          <p>
            Some text about me; My name is Ifemeje Kevin Belusochi. I am a
            professional programmer in both front-end and back-end application
            designs. I started programming at an early age which was an
            advantage for me dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <h3>My Skills</h3>
          <p>Photography</p>

          <div className="white_1">
            <div className="grey_1"></div>
          </div>
          <p>Web Design</p>
          <div className="white_2">
            <div className="grey_2"></div>
          </div>
          <p>Photoshop</p>
          <div className="white_3">
            <div className="grey_3"></div>
          </div>
          <div className="white_color">
            <h3>
              <span className="number">11+</span>
              <br /> <span className="under">Partners</span>
            </h3>
            <h3>
              <span className="number_2">55+</span>
              <br /> <span className="under">Projects Done</span>
            </h3>
            <h3>
              <span className="number_2">89+</span>
              <br /> <span className="under">Happy Clients</span>
            </h3>
            <h3>
              <span className="number">150+</span>
              <br /> <span className="meeting">Meetings</span>
            </h3>
          </div>
          <button className="download">
            <i className="fa fa-download"></i>
            <span>Download Resume</span>
          </button>
          <h3 className="prices">My Price</h3>
          <div className="main-prices">
            <div className="left-price">
              <div className="l-head">
                <span className="basic">Basic</span>
              </div>
              <div className="l-body">
                <p className="l-bodyContent">Web Design</p>
                <p className="l-bodyContent">Photography</p>
                <p className="l-bodyContent">5GB Storage</p>
                <p className="l-bodyContent">Mail Support</p>
                <p className="l-bodyContent">
                  <strong className="dollar">$ 10</strong>
                  <br /> per month
                </p>
              </div>
              <div className="l-footer">
                <button className="footer-button">Sign Up</button>
              </div>
            </div>
            <div className="right-price">
              <div className="l-head">
                <span className="basic">Pro</span>
              </div>
              <div className="l-body">
                <p className="l-bodyContent">Web Design</p>
                <p className="l-bodyContent">Photography</p>
                <p className="l-bodyContent">50GB Storage</p>
                <p className="l-bodyContent">Endless Support</p>
                <p className="l-bodyContent">
                  <strong className="dollar">$ 25</strong>
                  <br /> per month
                </p>
              </div>
              <div className="l-footer">
                <button className="footer-button">Sign Up</button>
              </div>
            </div>
          </div>
          <h3>My Reputation</h3>
          <div className="reputation">
            <div className="l-reputation">
              <img src="benzix.jpg" />
            </div>
            <div className="r-reputation">
              <p>
                <span>Lionel Messi.</span> Eight times Ballon dor Winner.
              </p>
              <p>Benzix Kevin saved us from a web disaster.</p>
            </div>
          </div>
          <div className="reputation2">
            <div className="l-reputation">
              <img src="benzix.jpg" />
            </div>
            <div className="r-reputation">
              <p>
                <span>Lamine Yamal.</span> Best Youngstar in History.
              </p>
              <p>No one is better than Benzix Kevin.</p>
            </div>
          </div>
        </div>
        <h2 className="foto">My Photos</h2>
        <div className="photos" id="photos">
          <div className="l-photos">
            <div className="photo1">
              <img src="benzix_1.jpg" />
            </div>
            <div className="photo2">
              <img src="benzix_2.jpg" />
            </div>
            <div className="photo3">
              <img src="benzix_3.jpg" />
            </div>
          </div>
          <div className="r-photos">
            <div className="photo4">
              <img src="benzix_4.jpg" />
            </div>
            <div className="photo5">
              <img src="benzix_5.jpg" />
            </div>
            <div className="photo6">
              <img src="benzix_6.jpg" />
            </div>
            <div className="photo7">
              <img src="benzix_7.jpg" />
            </div>
          </div>
        </div>
        <div className="contact" id="contact">
          <h2 className="foto">Contact Me</h2>
          <p>
            <i className="fa fa-map-marker"></i>
            <span>Asaba, Delta State</span>
          </p>
          <p>
            <i className="fa fa-phone"></i>
            <span>08144133104</span>
          </p>
          <p>
            <i className="fa fa-envelope"></i>
            <span>Email: Kevinbelusochi@gmail.com</span>
          </p>
          <p className="message">Lets get in touch. Send me a message:</p>
          <form action="">
          <input placeholder="Name" title="Please fill out this field."  required/>
          <input placeholder="Email" title="Please fill out this field." required/>
          <input placeholder="Subject" title="Please fill out this field." required/>
          <input placeholder="Message" title="Please fill out this field." required/>
          <button className="telegram">
            <i className="fa fa-telegram"></i>
            <span>SEND MESSAGE</span>
          </button>
          </form>
          <div className="end">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-snapchat"></i>
            <i className="fa fa-pinterest"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-linkedin"></i>
            <p>
              Powered by{" "}
              <a href="https://www.w3schools.com/w3css/default.asp">w3.css</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

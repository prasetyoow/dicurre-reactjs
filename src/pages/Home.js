import React from "react";
import {Link} from 'react-router-dom'
import { Helmet } from "react-helmet";
import Imgbg from "../assets/img/Mask Group.png";
import Imgph from "../assets/img/png-phone.png"
import Imgsupp from "../assets/img/phone-icon.png"
import Imgpriv from "../assets/img/lock-icon.png"
import Imgdl from "../assets/img/dl-icon.png"
import Imglogo from "../assets/img/logos.png"
import Imgph2 from "../assets/img/png-phone2.png"
import Imgsherina from "../assets/img/sherina.jpg"
import Imgjess from "../assets/img/jessica.png"
import Imgrobert from "../assets/img/robert.png"

function Home() {
  return (
    <>
    {/* Start of Header */}
    <Helmet>
      <title>Dicurre</title>
    </Helmet>
    <header>
      <div>
        <h1 className="top-h1">Zwallet</h1>
      </div>
      
        <div>
          <Link to="/Login" >
            <button className="login">Login</button>
          </Link>
        
        
          <Link to="/Signup" >
            <button className="signup">Sign Up</button>
          </Link>
        </div>
     

      <div className="container-topleft">
        <h1 className="h1-topleft">Awesome App For Saving <span>Time.</span></h1>
        <h3 className="h3-topleft" >We bring you a mobile app for banking problems that oftenly wasting much of your times.</h3>
        <Link to="/Signup" >
          <button className="try-free">Try it Free</button>
        </Link>
        </div>
    </header>
    
    <div className="rectangle">
      <img src={Imgbg} alt="rectangle"></img>
    </div>

    <div className="phone">
      <img src={Imgph} alt="phone"></img>
    </div>
    {/* End of Header */}

    {/* Start of Main */}
    <main className="container-main">
        <div>
          <h1 className="h1-main"> <span>About</span> the Application.</h1>
          <h2>We have some great features from the application and it's totally free to use by all users around the world.</h2>  
        </div>

        <div className="mini-container">
          <div className="cards">
            <div className="card-one">
              <img src={Imgsupp} alt="Support"></img>
              <h1>24/7 Support</h1>
              <h2>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</h2>
            </div>
            <div className="card-two">
              <img src={Imgpriv} alt="Privacy"></img>
              <h1>Data Privacy</h1>
              <h2>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</h2>
            </div>
            <div className="card-three">
              <img src={Imgdl} alt="Download"></img>
              <h1>Easy Download</h1>
              <h2>Zwallet is 100% totally free to use it's now available on Google Play Store and App Store.</h2>
            </div>
          </div>
        </div>
    </main>
    {/* End Of Main */}

    {/* Start of Section */}
    <section>
      <div className="container-top">
        <div className="content-top">
          <div className="text-top">
            <h1>100+ <span>Trusted</span> Partners.</h1>
            <h2>We have reached global level and have 100+ brand partners around the globe.</h2>
          </div>
          <div className="logos-top">
            <img src={Imglogo} alt="logos"></img>
          </div>
        </div>
      </div>
      
      <div className="container-mid">
        <div className="content-mid">
          <div className="phone-transaction">
            <img src={Imgph2} alt="phone"></img>
          </div>
          <div className="mid-content">
              <div className="text-mid">
                <h1>All The <span>Great</span> Zwallet Features</h1>
              </div>
              <div className="box-one">
                <h1><span>1.</span> Small Fee</h1>
                <h2>We only charge 5% of every success transaction done in Zwallet app.</h2>
              </div>
              <div className="box-two">
                <h1><span>2.</span> Data Secured</h1>
                <h2>All your data is secured properly in our system and it's encrypted.</h2>
              </div>
              <div className="box-three">
                <h1><span>3.</span> User Friendly</h1>
                <h2>Zwallet come up with modern and sleek design and not complicated.</h2>
              </div>
          </div>
        </div>
      </div>

      <div className="container-bottom">
        <div>
          <h1 className="h1-bottom">What Users are <span>Saying.</span></h1>
          <h2 className="h2-bottom">We have some great features from the application and it's totally free to use by all users around the world</h2>  
        </div>
        <div className="bottom-container">
          <div className="testimonials">
            <div className="testi-one">
              <img src={Imgsherina} alt="Testimoni"></img>
              <h1>Sherina Chaw</h1>
              <h2>“I use this app since 2 years ago and this is the best app that I've ever use in my entire life”</h2>
            </div>
            <div className="testi-two">
              <img src={Imgjess} alt="Testimoni"></img>
              <h1>Jessica Mera</h1>
              <h2>“I use Zwallet to manage all financial needs. It's super easy to use and it's 100% free app”</h2>
            </div>
            <div className="testi-three">
              <img src={Imgrobert} alt="Testimoni"></img>
              <h1>Robert Chandler</h1>
              <h2>“Since I'm using this app, I'm not going to move to another similar app. Thank you Zwallet!”</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* /* End of Section */}

    {/* Start of Footer */}
    <footer className="footer-container">
        <div className="footer-content">
        <h1>Zwallet</h1>
        <h2>Simplify financial needs and saving much time in banking needs with one single app.</h2>
        <hr/>
          <div className="copyright">
            <h4>2020 Zwallet. All right reserved.</h4>
            <h4 className="flex">+62 5637 8882 9901</h4>
            <h4>contact@zwallet.com</h4>
          </div>
        </div>
    </footer>
    {/* End of Footer */}
    </>
  )
}

export default Home
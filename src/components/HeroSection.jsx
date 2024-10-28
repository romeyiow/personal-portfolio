export default function HeroSection(){
    return (
        <section className="hero" id="hero">
        <div className="texts">
          <span className="elli-marks">Welcome</span>
          <h1 className="">
            Avid <span>Learner</span>. Problem
            <span>Solver</span>.  <span>Ready</span> to serve!
          </h1>
          <p className="desc">
            Hi! I am Jers, a full stack web developer. I have been helping
            businesses solve their problems with my creative works for more than 4
            years now.{" "}
          </p>
          <div className="cta-btns">
            <a className="hire" href="#contact">
              Hire Me
            </a>
            <a className="view-proj" href="#projects">
              View Projects 
              {/* <img src="assets/icons/go-to-arrow.png" alt="" /> */}
            </a>
          </div>
        </div>
        <div className="graphics">
          <div className="wrapper-dp">
            <img className="dp" src="assets/images/hero/dp.png" alt="" />
          </div>
          <div className="socmed">
            <img src="assets/icons/Follow me on_.png" alt="" />
            <span className="line" />
            <div className="wrapper-imgs">
              <a href="">
                <img src="assets/icons/facebook.png" alt="" />
              </a>
              <a href="">
                <img src="assets/icons/instagram.png" alt="" />
              </a>
              <a href="">
                <img src="assets/icons/linkedin.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}
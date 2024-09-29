function App() {
  return (
    <>
      <nav id="nav">
        <div className="identifier">
          <div className="wrapper-logo">

          </div>
          <span className="name">EROME IMPERIAL</span>
        </div>
        <div className="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="dlcv">
          <a className="dl-btn" href="#"> Download CV</a>
        </div>
      </nav>
      <section className="hero" id="hero">
        <div className="texts">
          <span className="elli-marks">Welcome</span>
          <h1 className="">Avid <span>Learner</span>. Problem
            <span>Solver</span>. <span>Ready</span> to serve!
          </h1>
          <p className="desc">Hi! I am Jers, a full stack web developer. I have been helping businesses solve their
            problems with my
            creative works for more than 4 years now. </p>
          <div className="cta-btns">
            <a className="hire" href="">Hire Me</a>
            <a className="view-proj" href="">View Projects <img src="assets/icons/go-to-arrow.png" alt=""/></a>
          </div>
        </div>
        <div className="graphics">
          <div className="wrapper-dp">
            <img src="assets/images/hero/dp.png" alt=""/>
          </div>
          <div className="socmed">
            <img src="assets/icons/Follow me on_.png" alt=""/>
              <span className="line"></span>
              <div className="wrapper-imgs">
                <a href=""><img src="assets/icons/facebook.png" alt=""/></a>
                <a href=""><img src="assets/icons/instagram.png" alt=""/></a>
                <a href=""><img src="assets/icons/linkedin.png" alt=""/></a>

              </div>
          </div>
        </div>
      </section>
      <section className="stats" id="stats">
        <div className="item">
          <h2>80+</h2>
          <p>Satisfied clients</p>
        </div>
        <div className="divider-line"></div>
        <div className="item">
          <h2>200+</h2>
          <p>Projects completed</p>
        </div>

        <div className="divider-line"></div>
        <div className="item">
          <h2>99+</h2>
          <p>Reviews given</p>
        </div>
      </section>
      <section className="skills" id="skills">
        <div className="texts">
          <span className="elli-marks">My Skills</span>
          <h2>Why Hire Me For Your <br/>
            Next <span>Project?</span></h2>
          <p className="desc">With a proven track record of delivering high-quality results and a commitment to meeting
            deadlines, I bring your revolutionary vision to ife.</p>
          <div className="cta-btn">
            <a className="contact" href="">Contact Me</a>
          </div>
        </div>
        <div className="graphics">
          <div className="wrapper">
            <div className="card">
              <img src="assets/icons/diamond.png" alt=""/>
                <h2>UI & UX Designing</h2>
                <p>Create user interface design with
                  unique & modern ideas </p>
            </div>
            <div className="card">
              <img src="assets/icons/pulse-outline.png" alt=""/>
                <h2>Responsive!</h2>
                <p>My works function well across various screen sizes.</p>
            </div>
          </div>
          <div className="card">
            <img src="assets/icons/grad-toga.png" alt=""/>
              <h2> Programmer</h2>
              <p>I am proficient in Python, JavaScript and C++</p>
          </div>
        </div>
      </section>
      <section className="projects" id="projects">
        <div className="texts">
          <span className="elli-marks">Portfolio</span>
          <h2>Check Out My <br/>
            <span>Latest</span> Works
          </h2>
          <p className="desc">With a proven track record of delivering high-quality results and a commitment to meeting
            deadlines, I bring your revolutionary vision to ife.</p>
          <div className="cta-btn">
            <a className="contact" href="">See More</a>
          </div>
        </div>
        <div className="projects-visuals">
          <div className="item highlight">
          </div>
          <div className="item slide-show">
            <div className="slide-card top-image"></div>
            <div className="slide-card mid-image"></div>
            <div className="slide-card bottom-image"></div>
            <div className="controls">
              <div className="indicators">
                <div className="box-wrapper active-wrapper" id="wrapper1">
                  <div className="box active-box" id="box1"></div>
                </div>
                <div className="box-wrapper" id="wrapper2">
                  <div className="box" id="box2"></div>
                </div>
                <div className="box-wrapper" id="wrapper3">
                  <div className="box" id="box3"></div>
                </div>
              </div>
              <div className="arrows">
                <button type="button" className="arr-btn" id="larr" onclick="changeBackgroundImage(-1)"><img
                  src="assets/icons/arrow-left.png" alt=""/></button>
                <button type="button" className="arr-btn" id="rarr" onclick="changeBackgroundImage(1)"><img
                  src="assets/icons/arrow-right.png" alt=""/></button>
              </div>

            </div>
          </div>

        </div>
      </section>
      <section className="reviews" id="reviews">
        <div className="top-part">
          <div className="review-texts">
            <span className="elli-marks">Portfolio</span>
            <h2>Here's What My <span>Clients Say </span> <br/>
              About Me
            </h2>
          </div>
          {/* <div className="arrows">
            <img src="assets/icons/arrow-left.png" alt="">
              <img src="assets/icons/arrow-right.png" alt="">
              </div> */}
          </div>
          <div className="review-cards">
            <div className="item">
              <img className="rating" src="assets/icons/five-stars.png" alt=""/>
                <p>We will also facilitate the business marketing of these products with our SEO experts so that they
                  become a ready to use website & help sell product from company</p>
                <div className="reviewer-profile">
                  <div className="dp-wrapper">
                    <img src="assets/icons/reviewer1.png" alt=""/>
                  </div>
                  <div className="info">
                    <p>Amir Uddin</p>
                    <span>UX Designer </span>
                  </div>
                </div>
            </div>
            <div className="item">
              <img className="rating" src="assets/icons/five-stars.png" alt=""/>
                <p>We will also facilitate the business marketing of these products with our SEO experts so that they
                  become a ready to use website & help sell product from company</p>
                <div className="reviewer-profile">
                  <div className="dp-wrapper">
                    <img src="assets/icons/reviewer2.png" alt=""/>
                  </div>
                  <div className="info">
                    <p>Salim Ahmed</p>
                    <span>UX Designer </span>
                  </div>
                </div>
            </div>
            <div className="item">
              <img className="rating" src="assets/icons/five-stars.png" alt=""/>
                <p>We will also facilitate the business marketing of these products with our SEO experts so that they
                  become a ready to use website & help sell product from company</p>
                <div className="reviewer-profile">
                  <div className="dp-wrapper">
                    <img src="assets/icons/reviewer3.png" alt=""/>
                  </div>
                  <div className="info">
                    <p>Guy Hawkins</p>
                    <span>UX Designer </span>
                  </div>
                </div>
            </div>
            <div className="item">
              <img className="rating" src="assets/icons/five-stars.png" alt=""/>
                <p>We will also facilitate the business marketing of these products with our SEO experts so that they
                  become a ready to use website & help sell product from company</p>
                <div className="reviewer-profile">
                  <div className="dp-wrapper">
                    <img src="assets/icons/reviewer1.png" alt=""/>
                  </div>
                  <div className="info">
                    <p>Amir Uddin</p>
                    <span>UX Designer </span>
                  </div>
                </div>
            </div>
            <div className="item">
              <img className="rating" src="assets/icons/five-stars.png" alt=""/>
                <p>We will also facilitate the business marketing of these products with our SEO experts so that they
                  become a ready to use website & help sell product from company</p>
                <div className="reviewer-profile">
                  <div className="dp-wrapper">
                    <img src="assets/icons/reviewer2.png" alt=""/>
                  </div>
                  <div className="info">
                    <p>Salim Ahmed</p>
                    <span>UX Designer </span>
                  </div>
                </div>
            </div>
            <div className="item">
              <img className="rating" src="assets/icons/five-stars.png" alt=""/>
                <p>We will also facilitate the business marketing of these products with our SEO experts so that they
                  become a ready to use website & help sell product from company</p>
                <div className="reviewer-profile">
                  <div className="dp-wrapper">
                    <img src="assets/icons/reviewer3.png" alt=""/>
                  </div>
                  <div className="info">
                    <p>Guy Hawkins</p>
                    <span>UX Designer </span>
                  </div>
                </div>
            </div>


          </div>
      </section>
      <section className="contact">
        <div className="contact-texts">
          <div><span className="elli-marks">Contact Me</span></div>
          <h2>Let’s Discuss Your <span>Project</span></h2>
          <p className="desc">Let’s make something new, different and more meaningful or make thing more visual or
            conceptual.</p>
        </div>
        <div className="main">
          <div className="my-contact-info">
            <div className="contact-card">
              <img src="assets/icons/phone.png" alt=""/>
                <div className="content">
                  <span>Call me</span>
                  <p>+639163484780</p>
                </div>
            </div>
            <div className="contact-card">
              <img src="assets/icons/email-ad.png" alt=""/>
                <div className="content">
                  <span>Email me</span>
                  <p>jcimperial@student.laverdad.edu.ph</p>
                </div>
            </div>
            <div className="contact-card">
              <img src="assets/icons/phone.png" alt=""/>
                <div className="content">
                  <span>Find me</span>
                  <p>2016, Apalit, Pampanga, Philippines</p>
                </div>
            </div>

          </div>
          <div className="contact-form">
            <form action="" method="get">
              {/* <label for="register-email">Email address</label> */}
              <div className="inputs">
                <input type="text" name="register-name" id="register-name" placeholder="Full Name"/>
                  <input type="email" name="register-email" id="register-email" placeholder="Email"/>
                  </div>
                  <textarea name="message" id="message" rows="5" placeholder="Send a message"></textarea>

                  <button className="contact-btn" type="submit">Submit Message</button>
                </form>
              </div>
          </div>
      </section>
      <footer>
        <span className="cpr">© Copyright 2024</span>
        <span className="credits"> JCI - All Rights Reserved</span>
        <div className="social-media">
          <a href=""><img src="assets/icons/vuesax/bold/dribbble.png" alt=""/></a>
          <a href=""><img src="assets/icons/vuesax/bold/facebook.png" alt=""/></a>
          <a href=""><img src="assets/icons/vuesax/bold/instagram.png" alt=""/></a>
          <a href=""><img src="assets/icons/vuesax/bold/sms.png" alt=""/></a>
        </div>
      </footer>
    </>
  )
}

export default App

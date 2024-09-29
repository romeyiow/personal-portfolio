import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav id="nav">
        <div class="identifier">
          <div class="wrapper-logo">

          </div>
          <span class="name">EROME IMPERIAL</span>
        </div>
        <div class="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="dlcv">
          <a class="dl-btn" href="#"> Download CV</a>
        </div>
      </nav>
      <section class="hero" id="hero">
        <div class="texts">
          <span class="elli-marks">Welcome</span>
          <h1 class="">Avid <span>Learner</span>. Problem
            <span>Solver</span>. <span>Ready</span> to serve!
          </h1>
          <p class="desc">Hi! I am Jers, a full stack web developer. I have been helping businesses solve their
            problems with my
            creative works for more than 4 years now. </p>
          <div class="cta-btns">
            <a class="hire" href="">Hire Me</a>
            <a class="view-proj" href="">View Projects <img src="assets/icons/go-to-arrow.png" alt=""></a>
          </div>
        </div>
        <div class="graphics">
          <div class="wrapper-dp">
            <img src="assets/images/hero/dp.png" alt="">
          </div>
          <div class="socmed">
            <img src="assets/icons/Follow me on_.png" alt="">
              <span class="line"></span>
              <div class="wrapper-imgs">
                <a href=""><img src="assets/icons/facebook.png" alt=""></a>
                <a href=""><img src="assets/icons/instagram.png" alt=""></a>
                <a href=""><img src="assets/icons/linkedin.png" alt=""></a>

              </div>
          </div>
        </div>
      </section>
      <section class="stats" id="stats">
        <div class="item">
          <h2>80+</h2>
          <p>Satisfied clients</p>
        </div>
        <div class="divider-line"></div>
        <div class="item">
          <h2>200+</h2>
          <p>Projects completed</p>
        </div>

        <div class="divider-line"></div>
        <div class="item">
          <h2>99+</h2>
          <p>Reviews given</p>
        </div>
      </section>
      <section class="skills" id="skills">
        <div class="texts">
          <span class="elli-marks">My Skills</span>
          <h2>Why Hire Me For Your <br>
            Next <span>Project?</span></h2>
          <p class="desc">With a proven track record of delivering high-quality results and a commitment to meeting
            deadlines, I bring your revolutionary vision to ife.</p>
          <div class="cta-btn">
            <a class="contact" href="">Contact Me</a>
          </div>
        </div>
        <div class="graphics">
          <div class="wrapper">
            <div class="card">
              <img src="assets/icons/diamond.png" alt="">
                <h2>UI & UX Designing</h2>
                <p>Create user interface design with
                  unique & modern ideas </p>
            </div>
            <div class="card">
              <img src="assets/icons/pulse-outline.png" alt="">
                <h2>Responsive!</h2>
                <p>My works function well across various screen sizes.</p>
            </div>
          </div>
          <div class="card">
            <img src="assets/icons/grad-toga.png" alt="">
              <h2> Programmer</h2>
              <p>I am proficient in Python, JavaScript and C++</p>
          </div>
        </div>
      </section>
      <section class="projects" id="projects">
        <div class="texts">
          <span class="elli-marks">Portfolio</span>
          <h2>Check Out My <br>
            <span>Latest</span> Works
          </h2>
          <p class="desc">With a proven track record of delivering high-quality results and a commitment to meeting
            deadlines, I bring your revolutionary vision to ife.</p>
          <div class="cta-btn">
            <a class="contact" href="">See More</a>
          </div>
        </div>
        <div class="projects-visuals">
          <div class="item highlight">
          </div>
          <div class="item slide-show">
            <div class="slide-card top-image"></div>
            <div class="slide-card mid-image"></div>
            <div class="slide-card bottom-image"></div>
            <div class="controls">
              <div class="indicators">
                <div class="box-wrapper active-wrapper" id="wrapper1">
                  <div class="box active-box" id="box1"></div>
                </div>
                <div class="box-wrapper" id="wrapper2">
                  <div class="box" id="box2"></div>
                </div>
                <div class="box-wrapper" id="wrapper3">
                  <div class="box" id="box3"></div>
                </div>
              </div>
              <div class="arrows">
                <button type="button" class="arr-btn" id="larr" onclick="changeBackgroundImage(-1)"><img
                  src="assets/icons/arrow-left.png" alt=""></button>
                <button type="button" class="arr-btn" id="rarr" onclick="changeBackgroundImage(1)"><img
                  src="assets/icons/arrow-right.png" alt=""></button>
              </div>

            </div>
          </div>

        </div>
      </section>
      <section class="reviews" id="reviews">
        <div class="top-part">
          <div class="review-texts">
            <span class="elli-marks">Portfolio</span>
            <h2>Here's What My <span>Clients Say </span> <br>
              About Me
            </h2>
          </div>
          <!-- <div class="arrows">
            <img src="assets/icons/arrow-left.png" alt="">
              <img src="assets/icons/arrow-right.png" alt="">
              </div> -->
          </div>
          <div class="review-cards">
            <div class="item">
              <img class="rating" src="assets/icons/five-stars.png" alt="">
                <p>We will also facilitate the business marketing of these products with our SEO experts so that they
                  become a ready to use website & help sell product from company</p>
                <div class="reviewer-profile">
                  <div class="dp-wrapper">
                    <img src="assets/icons/reviewer1.png" alt="">
                  </div>
                  <div class="info">
                    <p>Amir Uddin</p>
                    <span>UX Designer </span>
                  </div>
                </div>
            </div>
            <div class="item">
              <img class="rating" src="assets/icons/five-stars.png" alt="">
                <p>We will also facilitate the business marketing of these products with our SEO experts so that they
                  become a ready to use website & help sell product from company</p>
                <div class="reviewer-profile">
                  <div class="dp-wrapper">
                    <img src="assets/icons/reviewer2.png" alt="">
                  </div>
                  <div class="info">
                    <p>Salim Ahmed</p>
                    <span>UX Designer </span>
                  </div>
                </div>
            </div>
            <div class="item">
              <img class="rating" src="assets/icons/five-stars.png" alt="">
                <p>We will also facilitate the business marketing of these products with our SEO experts so that they
                  become a ready to use website & help sell product from company</p>
                <div class="reviewer-profile">
                  <div class="dp-wrapper">
                    <img src="assets/icons/reviewer3.png" alt="">
                  </div>
                  <div class="info">
                    <p>Guy Hawkins</p>
                    <span>UX Designer </span>
                  </div>
                </div>
            </div>
            <div class="item">
              <img class="rating" src="assets/icons/five-stars.png" alt="">
                <p>We will also facilitate the business marketing of these products with our SEO experts so that they
                  become a ready to use website & help sell product from company</p>
                <div class="reviewer-profile">
                  <div class="dp-wrapper">
                    <img src="assets/icons/reviewer1.png" alt="">
                  </div>
                  <div class="info">
                    <p>Amir Uddin</p>
                    <span>UX Designer </span>
                  </div>
                </div>
            </div>
            <div class="item">
              <img class="rating" src="assets/icons/five-stars.png" alt="">
                <p>We will also facilitate the business marketing of these products with our SEO experts so that they
                  become a ready to use website & help sell product from company</p>
                <div class="reviewer-profile">
                  <div class="dp-wrapper">
                    <img src="assets/icons/reviewer2.png" alt="">
                  </div>
                  <div class="info">
                    <p>Salim Ahmed</p>
                    <span>UX Designer </span>
                  </div>
                </div>
            </div>
            <div class="item">
              <img class="rating" src="assets/icons/five-stars.png" alt="">
                <p>We will also facilitate the business marketing of these products with our SEO experts so that they
                  become a ready to use website & help sell product from company</p>
                <div class="reviewer-profile">
                  <div class="dp-wrapper">
                    <img src="assets/icons/reviewer3.png" alt="">
                  </div>
                  <div class="info">
                    <p>Guy Hawkins</p>
                    <span>UX Designer </span>
                  </div>
                </div>
            </div>


          </div>
      </section>
      <section class="contact">
        <div class="contact-texts">
          <div><span class="elli-marks">Contact Me</span></div>
          <h2>Let’s Discuss Your <span>Project</span></h2>
          <p class="desc">Let’s make something new, different and more meaningful or make thing more visual or
            conceptual.</p>
        </div>
        <div class="main">
          <div class="my-contact-info">
            <div class="contact-card">
              <img src="assets/icons/phone.png" alt="">
                <div class="content">
                  <span>Call me</span>
                  <p>+639163484780</p>
                </div>
            </div>
            <div class="contact-card">
              <img src="assets/icons/email-ad.png" alt="">
                <div class="content">
                  <span>Email me</span>
                  <p>jcimperial@student.laverdad.edu.ph</p>
                </div>
            </div>
            <div class="contact-card">
              <img src="assets/icons/phone.png" alt="">
                <div class="content">
                  <span>Find me</span>
                  <p>2016, Apalit, Pampanga, Philippines</p>
                </div>
            </div>

          </div>
          <div class="contact-form">
            <form action="" method="get">
              <!-- <label for="register-email">Email address</label> -->
              <div class="inputs">
                <input type="text" name="register-name" id="register-name" placeholder="Full Name">
                  <input type="email" name="register-email" id="register-email" placeholder="Email">
                  </div>
                  <textarea name="message" id="message" rows="5" placeholder="Send a message"></textarea>

                  <button class="contact-btn" type="submit">Submit Message</button>
                </form>
              </div>
          </div>
      </section>
      <footer>
        <span class="cpr">© Copyright 2024</span>
        <span class="credits"> JCI - All Rights Reserved</span>
        <div class="social-media">
          <a href=""><img src="assets/icons/vuesax/bold/dribbble.png" alt=""></a>
          <a href=""><img src="assets/icons/vuesax/bold/facebook.png" alt=""></a>
          <a href=""><img src="assets/icons/vuesax/bold/instagram.png" alt=""></a>
          <a href=""><img src="assets/icons/vuesax/bold/sms.png" alt=""></a>
        </div>
      </footer>
    </>
  )
}

export default App
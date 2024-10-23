export default function ContactSection() {
    return (
        <section className="contact" id="contact">
            <div className="contact-texts">
                <div>
                    <span className="elli-marks">Contact Me</span>
                </div>
                <h2>
                    Let’s Discuss Your <span>Project</span>
                </h2>
                <p className="desc">
                    Let’s make something new, different and more meaningful or make thing
                    more visual or conceptual.
                </p>
            </div>
            <div className="main">
                <div className="my-contact-info">
                    <div className="contact-card">
                        <img src="assets/icons/phone.png" alt="" />
                        <div className="content">
                            <span>Call me</span>
                            <p>+639163484780</p>
                        </div>
                    </div>
                    <div className="contact-card">
                        <img src="assets/icons/email-ad.png" alt="" />
                        <div className="content">
                            <span>Email me</span>
                            <p>jcimperial@student.laverdad.edu.ph</p>
                        </div>
                    </div>
                    <div className="contact-card">
                        <img src="assets/icons/phone.png" alt="" />
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
                            <input
                                type="text"
                                name="register-name"
                                id="register-name"
                                placeholder="Full Name"
                            />
                            <input
                                type="email"
                                name="register-email"
                                id="register-email"
                                placeholder="Email"
                            />
                        </div>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            placeholder="Send a message"
                            defaultValue={""}
                        />
                        <button className="contact-btn" type="submit">
                            Submit Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
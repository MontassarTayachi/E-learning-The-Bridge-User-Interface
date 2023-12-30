import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import "../Styles/Contact.css"
import { AnimationOnScroll } from "react-animation-on-scroll";
import { toast } from "sonner";

export const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send");
  const [mouseOver, setMouseOver] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_fnyf9c9",
        "template_ouif5o1",
        form.current,
        "GBujCcQec2WCh5u_J"
      )
      .then(
        (result) => {
          console.log(result.text);
          setButtonText("Sent");
          toast.success("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          setButtonText("Send");
          toast.error("Message Failed to Send!");
        }
      );
  };

  return (
    <section
      className="contact"
      id="connect"
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      style={{
        width: `${mouseOver ? "100%" : "90%"}`,
        margin: "auto",
        borderRadius: `${mouseOver ? "0" : "50px"}`,
        transition: "all 1s ",
      }}
    ><Container className={mouseOver ? "full-width" : "normal-width"}> 
      <Row className="align-items-center">
  
  <Col md={6}>
    <AnimationOnScroll animateIn="animate__animated animate__fadeIn">
      <div>
        <h2>Contact US</h2>
        <form ref={form} onSubmit={sendEmail}>
          <Row>
            
            <Col sm={6} className="px-1">
              <input
                type="text"
                name="last_name"
                placeholder=" Name"
                required
              />
            </Col>
            <Col sm={6} className="px-1">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
            </Col>
            
            <Col sm={12} className="px-1">
              <textarea name="message" placeholder="Message" required />
              <button type="submit">
                <span>{buttonText}</span>
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </AnimationOnScroll>
  </Col>
</Row>

      </Container>
    </section>
  );
};

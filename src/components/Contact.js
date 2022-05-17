import React from "react";
import resume from "../assets/resume/resume2022.pdf";

function Contact() {
  return (
    <>
      <h2 className="margin subhead text-center">Contact Me</h2>
      <div className="container-fluid flex-parent jc-center">
        <a href="https://github.com/heatherveva" target="_blank">
          <button type="button" className="btn btncolor marginlandr">
            GitHub
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/heather-v-stevens/"
          target="_blank"
        >
          <button type="button" className="btn btncolor marginlandr">
            LinkedIn
          </button>
        </a>
        <a href="mailto:heatherveva@gmail.com" target="_blank">
          <button type="button" className="btn btncolor marginlandr">
            Email Me
          </button>
        </a>
        <a href={resume} target="_blank">
          <button type="button" className="btn btncolor marginlandr">
            Resume
          </button>
        </a>
      </div>
    </>
  );
}

export default Contact;

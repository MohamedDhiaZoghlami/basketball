import React from "react";
import "./Hero.scss";
import Profile from "../../assets/profile.jpg";

const Hero = () => {
  const movingMouse = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const anchor = document.getElementById("anchor");
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    const eyes = document.querySelectorAll(".oneEye");
    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    });
  };
  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  };
  return (
    <section className="hero--wrapper" onMouseMove={movingMouse}>
      <div className="hero--infos">
        <h1>👋 Hi Welcome,</h1>
        <h2>For all Basketball fans, we made this for you.</h2>
        <div className="boxInfos">
          <p>
            This is a project made for showing our Ontology in the subject of
            "semantic web", made by the 'Code Geeks' group.
          </p>
        </div>
      </div>
      <div className="hero--image">
        <img src={Profile} alt="profile" className="profileImg" />
      </div>
    </section>
  );
};

export default Hero;

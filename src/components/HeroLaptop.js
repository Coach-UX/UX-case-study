import React from "react";
import styled from "styled-components";
import ScrollMagic from "scrollmagic";
import {gsap, Power2} from "gsap";

// styled components
const HeroLaptopWrapper = styled.div`
  grid-column: var(--gridSection-LG);
  width: 100%;
  padding-bottom: 150px;
  z-index: 1;
  position: relative;
`;
const Laptop = styled.img`
  position: relative;
  width: 92%;
  z-index: 2;
  left: 50%;
  margin-left: -46%;
`;
const LaptopScreen = styled.video`
  position: absolute;
  width: 46%;
  z-index: 0;
  top: 2.5%;
  opacity: 1;
  left: 50%;
  margin-left: -23%;
`;
const LaptopScreenMask = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: white;
  position: relative;
  margin-top: -6vh;
  z-index: 1;
`;
const Trigger = styled.div`
  position: absolute;
  top: 110vh;
`;

// desktop
if (window.innerWidth > window.innerHeight) {
  var laptopScale = "2.19";
  var screenTop = "24.5%";
  var laptopTop = "11.5%"
}
// mobile
else {
  var laptopScale = "1.43";
  var screenTop = "-5%";
  var laptopTop = "-28.5%"
}



class HeroLaptop extends React.Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();
    var tl2 = gsap.timeline({paused:true});
    tl2.to("#screen", 0.3, { scale: laptopScale, top: screenTop, ease:Power2.easeInOut }, 0)
      .to("#laptop", 0.3, { scale: laptopScale, marginTop: laptopTop, ease:Power2.easeInOut }, 0)
      .to("#screenMask", 0.2, { autoAlpha: 0, height: "137vw" }, 0)
      // .to(".introCopyScroll", 0.2, { autoAlpha: 0 }, 0)
      .to("#laptop", 0.2, { autoAlpha: 0 }, 0);
    var scaleLaptop = new ScrollMagic.Scene({ triggerElement: "#trigger" })
       .setTween(tl2)
       .addTo(controller);
  }
  render() {
    const { src } = this.props;
    return (
      <React.Fragment>
        <Trigger id="trigger"></Trigger>
        <HeroLaptopWrapper>
          <Laptop id="laptop" className="heroDesktop" src={"img/" + this.props.projectClass + "/hero.png"} />
          <Laptop id="laptop" className="heroMobile" src={"img/" + this.props.projectClass + "/hero-mobile.png"} />
          <LaptopScreenMask id="screenMask"></LaptopScreenMask>
          <LaptopScreen id="screen" src={src} autoPlay muted playsInline loop></LaptopScreen>
        </HeroLaptopWrapper>
        </React.Fragment>
    );
  }
}

export default HeroLaptop;

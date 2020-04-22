import React from "react";
import ScrollMagic from "scrollmagic";
import {gsap, Power3, Power2} from "gsap";
import DelayLink from 'react-delay-link';
import styled from "styled-components";
import media from "../Mixins";

const NextProject = styled.h1`
  width: 100%;
  height: 30px;
  text-align: center;
  padding: 50px 0;
  cursor: pointer;
  position: fixed;
  bottom: -145px;
  transition: padding .2s ease-in-out, bottom .3s ease-in-out;
   &:hover {
     padding: 70px 0;
     transition: padding .2s ease-in-out;
   }
   ${media.portrait`
    bottom: -210px;
    padding: 40px 0;
  `}
  ${media.sm`
    bottom: -210px;
    padding: 40px 0;
  `}
  ${media.touch`
    &:hover {
      padding: 40px 0;
    }
 `}
`;

// gsap animation that triggers when button is clicked
function nextProjectTransition() {
  var nextProjectAnim = gsap.timeline();
  nextProjectAnim.to("#nextProject", 0, {transition: "all 0s", ease:Power2.easeInOut}, 0)
                  .to("#nextProject", .2, {color: "rgba(0,0,0,0)", ease:Power2.easeInOut},0)
                  .to("#nextProject", .3, {padding: "19vh 0 77.8vh", ease:Power2.easeInOut});
  nextProjectAnim.play();
}

// when to trigger next project button to show
if (window.innerWidth > window.innerHeight) {
  var nextProjectTriggerHook = "0.5"; // desktop
}
else {
  var nextProjectTriggerHook = "0.7"; // mobile
}

export default class NextProjectButton extends React.Component {
  componentDidMount() {
    // make button only appear once user reaches the end of the page
    var controller = new ScrollMagic.Controller();
    var nextProject = new ScrollMagic.Scene({triggerElement: ".footer", triggerHook: nextProjectTriggerHook})
    .setTween(gsap.to("#nextProject", 0.3, {
      bottom: 0,
      ease:Power3.easeInOut
    }))
    .addTo(controller);
 }
  render() {
    return (
        <DelayLink id="nextProjectBtn" to={this.props.nextProjectLink} delay={500} clickAction={nextProjectTransition} replace={false}>
          <NextProject id="nextProject" className={this.props.nextProjectColor}>
          {this.props.nextProjectName}
          </NextProject>
       </DelayLink>
    );
  }
}

import React from 'react';
import Styled from 'styled-components';
import ScrollMagic from "scrollmagic";
import {gsap, Linear} from "gsap";

import Menu from "../components/Menu/Menu";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer";
import NextProjectButton from "../components/NextProjectButton";

const Grid = Styled.div`
  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-gap: 10px;
  overflow-x: hidden;
  & a {
    grid-column: 7 / 10;
    padding-bottom: var(--padding);
  }
`;
const BackgroundColor = Styled.span`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;

export default class ProjectWrapper extends React.Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();
    var parallaxIntro = new ScrollMagic.Scene({duration: window.innerHeight})
    .setTween(gsap.to("#backgroundColor", 1, { transform: "translateY(-20%)", ease: Linear.easeNone }))
    .addTo(controller);
  }
  render() {
  return (
    <React.Fragment>
      <Menu />
      <Nav projectName={this.props.projectName} projectYear={this.props.projectYear} />
      <Grid id="grid">
        <BackgroundColor id="backgroundColor" className={this.props.projectClass} />

        {this.props.children}

        <Footer />
      </Grid>
      <NextProjectButton nextProjectLink={this.props.nextProjectLink} nextProjectName={this.props.nextProjectName}  nextProjectColor={this.props.nextProjectClass}/>
    </React.Fragment>
  );
  }
}

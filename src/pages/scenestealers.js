import React from 'react';

// components
import ProjectLink from "../components/ProjectLink";
import { CarouselSection, CarouselImage, CarouselVideo } from "../components/Carousel/CarouselSection";
import ProjectWrapper from "../components/ProjectWrapper"
import { TextSection, ImageSection, ImageSectionSlim, VideoSection, VideoSectionSlim } from '../components/Sections';
import { IntroSection, HeroImage } from "../components/Hero/Hero";
import { Footer, FooterSection, Results, Credits } from "../components/Footer/Footer";


// project details
var projectName = "Scene Stealers",
    projectClass = "scenestealers",
    projectYear = "2018",
    externalLink = "#",
    externalLinkLabel="Launch the Game",

    nextProjectName="The Arcade",
    nextProjectClass="arcade",
    nextProjectLink="/arcade";


export default class SceneStealers extends React.Component {
  render() {
  return (
    <ProjectWrapper projectName={projectName} projectYear={projectYear} projectClass={projectClass} nextProjectLink={nextProjectLink} nextProjectName={nextProjectName} nextProjectClass={nextProjectClass} >

      <IntroSection>
        To support the 2019 Holiday campaign we partnered with the Coach Japan team to create an entertainment first experience. Following on from the narrative of the campaign we opted for an immersive game to be played via Social media channels.
      </IntroSection>

      <HeroImage projectClass={projectClass} />
      <ProjectLink href={externalLink} label={externalLinkLabel}  />

      <TextSection>
      Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandi.
      </TextSection>

      <VideoSection
        src='img/scenestealers/gameplay.mp4'
        poster=''
        caption='Gameplay'
      />

      <TextSection>
      Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandi.
      </TextSection>

      <ImageSectionSlim
        src='img/scenestealers/meetthecast.png'
        caption="Meet the Cast"
      />

      <TextSection>
      Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandi.
      </TextSection>

      <CarouselSection caption='Level Artwork'>
        <CarouselVideo src="img/scenestealers/carousel-1.mp4" />
        <CarouselVideo src="img/scenestealers/carousel-2.mp4" />
        <CarouselVideo src="img/scenestealers/carousel-3.mp4" />
      </CarouselSection>

      <TextSection>
      Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandi.
      </TextSection>

      <VideoSectionSlim
        src='img/scenestealers/results.mp4'
        poster=''
        caption='Results'
      />

      <Footer>
       <FooterSection title="Key Results">
         <Results p="Number of Unique Game Plays" b="23.2K" />
         <Results p="Game Conversion Rate" b="31.82%" />
         <Results p="Number of Users on SNOW App" b="1.2M" />
       </FooterSection>
       <FooterSection title="Credits">
         <Credits left="Art Direction" right="Coach Creative Team" />
         <Credits left="UI/UX Design" right="Coach Creative Team" />
         <Credits left="Copywriting" right="Coach Creative Team" />
         <Credits left="Development" right="Dentsu Isobar" />
         <Credits left="Project Management" right="Dentsu Isobar & Coach Japan" />
       </FooterSection>
     </Footer>

      </ProjectWrapper>
    );
  }
}

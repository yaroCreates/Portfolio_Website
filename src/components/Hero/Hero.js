import React from 'react';
import { Section, SectionText, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, WhiteSpan, Img } from './HeroStyles';

const Hero = () => (
  <Section row >
    <LeftSection>
      <SectionSubText main center>Hi👋🤗there!</SectionSubText>
      <SectionTitle center>
        I'm <WhiteSpan>James Yaro,</WhiteSpan> <br />
        Front End Developer.
      </SectionTitle>
      <SectionText>
        I am obsessed with creating intuitive designs, thereby, giving users the ability to feel my art.
        It is my job to make interfaces look good from the inside and out, it's your job to hire me.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
    <Img src='/images/Sideimage.svg' alt='SideImage' />
  </Section>
);

export default Hero;
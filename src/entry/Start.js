import React from "react";
import {
  StyledBackground,
  StyledTitle,
  StyledLineAppTitle,
  StyledStudyInfo,
  StyledLineAppStudy,
  BrainVisualWrapper,
  Glow,
  BrainVisualDescription,
  StyledOur,
  StyledBrainIcon,
  StyledBrainText,
  StyledLineGlow,
  StyledLineSkills,
  SkilledLinesWrapper,
  StyledRoundedLines,
  SkillsWrapper,
  GlowSmall,
  SkillWrapper,
  SkillIcon,
  SkillDescriptionWrapper,
  SkillDescription,
  ThreeDots,
  MeetText,
  StyledTheUi,
  StyledUiLine,
  StyledSubscribeLine,
  SubscribeText,
  ResponsiveLine,
  StyledUiWrapper,
  ViewImage,
  StyledSearch,
} from "./styles/StartStyles";
import glow from "../common/images/glow.png";
import brainIcon from "../common/images/brain-icon.png";
import roundedLines from "../common/images/lines.png";
import generateIcon from "../common/images/generate-icon.png";
import gameIcon from "../common/images/game-icon.png";
import vrIcon from "../common/images/vr-icon.png";
import theUI from "../common/images/the-ui.png";
import Subscribe from "./Subscribe";
import search from "../common/images/search.png";

const Start = () => (
  <StyledBackground>
    <StyledTitle>MEM42</StyledTitle>
    <StyledLineAppTitle />
    <StyledStudyInfo>
      After three days, a user retained only 10-20% of written or spoken
      information but almost 65% of visual information *
    </StyledStudyInfo>
    <StyledLineAppStudy />
    <BrainVisualWrapper>
      <Glow src={glow} />
      <BrainVisualDescription>
        <StyledOur>Our</StyledOur>
        <StyledBrainIcon src={brainIcon} />
        <StyledBrainText>
          is better at visually remembering things
        </StyledBrainText>
      </BrainVisualDescription>
    </BrainVisualWrapper>
    <StyledLineGlow />
    <StyledStudyInfo>
      The goal of this application is to push the way we remember what we learn
      as close as possible to our reality. And have fun!
    </StyledStudyInfo>
    <ThreeDots>...</ThreeDots>
    <MeetText>
      Meet <span>MEM42</span> Interface
    </MeetText>
    <StyledUiLine />
    <StyledUiWrapper>
      <StyledTheUi src={theUI} />
      <ViewImage href={theUI}>
        <StyledSearch src={search} />
      </ViewImage>
    </StyledUiWrapper>
    <SkilledLinesWrapper>
      <StyledLineSkills />
      <StyledRoundedLines src={roundedLines} />
    </SkilledLinesWrapper>
    <SkillsWrapper>
      <SkillWrapper>
        <GlowSmall src={glow} />
        <SkillDescriptionWrapper>
          <SkillIcon src={generateIcon} />
          <SkillDescription>
            GENERATED OBJECTS BASED ON TEXT RECOGNITION
          </SkillDescription>
        </SkillDescriptionWrapper>
      </SkillWrapper>
      <ResponsiveLine />
      <SkillWrapper>
        <GlowSmall src={glow} />
        <SkillDescriptionWrapper>
          <SkillIcon src={gameIcon} />
          <SkillDescription>
            3D GAME ENGINE SUPPORT SO YOU HAVE FUN WHILE LEARNING
          </SkillDescription>
        </SkillDescriptionWrapper>
      </SkillWrapper>
      <ResponsiveLine />
      <SkillWrapper>
        <GlowSmall src={glow} />
        <SkillDescriptionWrapper>
          <SkillIcon src={vrIcon} />
          <SkillDescription>
            WE AIM TO INTEGRATE VR SUPPORT SO YEAH, MORE FUN!
          </SkillDescription>
        </SkillDescriptionWrapper>
      </SkillWrapper>
    </SkillsWrapper>
    <StyledSubscribeLine />
    <SubscribeText>
      Cooming soon. <br /> <b>Please subscribe to support us</b>. It really
      means everything!
    </SubscribeText>
    <Subscribe />
  </StyledBackground>
);

export default Start;

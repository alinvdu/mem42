import styled from "styled-components";
import background from "../../common/images/background.jpg";

export const StyledBackground = styled.div`
  position: relative;
  font-family: "Manrope", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${background});
  background-color: black;
  color: white;
  overflow-y: auto;
  background-position: center;

  @media (max-width: 768px) {
    background-position: cover;
  }
`;

export const StyledTitle = styled.div`
  font-family: "Major Mono Display", monospace;
  font-size: 37px;
  width: 100%;
  text-align: center;
  color: white;
  margin-top: 25px;
`;

export const StyledLineAppTitle = styled.div`
  width: 1px;
  flex: 0 0 65px;
  background-color: white;
  margin: 12px 0;
  opacity: 0.8;
`;

export const StyledStudyInfo = styled.div`
  font-family: "Manrope", sans-serif;
  font-size: 21px;
  width: 700px;
  text-align: center;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 16px;
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
  }
`;

export const StyledLineAppStudy = styled.div`
  width: 1px;
  flex: 0 0 45px;
  background-color: white;
  margin: 12px 0;
  opacity: 0.8;
`;

export const BrainVisualWrapper = styled.div`
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    min-width: 310px;
  }
`;

export const Glow = styled.img`
  animation: App-logo-spin infinite 80s linear;

  @media (max-width: 768px) {
    margin-top: 0;
    width: 100%;
    max-width: 100%;
    animation: none;
  }

  @keyframes App-logo-spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`;

export const BrainVisualDescription = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const StyledOur = styled.div`
  margin-top: 70px;
  font-size: 33px;

  @media (max-width: 768px) {
    margin-top: 5px;
    font-size: 23px;
  }
`;

export const StyledBrainIcon = styled.img`
  margin-top: 25px;
  @media (max-width: 768px) {
    width: 80px;
    margin-top: 12px;
  }
`;

export const StyledBrainText = styled.div`
  font-size: 25px;
  margin-top: 25px;
  width: 300px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 19px;
    width: 200px;
    margin-top: 12px;
  }
`;

export const StyledLineGlow = styled.div`
  width: 1px;
  flex: 0 0 45px;
  background-color: white;
  margin: 12px 0;
  opacity: 0.8;
`;

export const SkilledLinesWrapper = styled.div`
  position: relative;
  flex: 0 0 125px;
  padding-top: 45px;
  margin: 8px 0;

  @media only screen and (max-width: 1000px) {
    padding-top: 0;
    flex: 0 0 50px;
    margin-top: 0px;
  }
`;

export const StyledLineSkills = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 1px;
  background-color: white;
  opacity: 0.8;
  height: 100%;
`;

export const StyledRoundedLines = styled.img`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SkillsWrapper = styled.div`
  width: 970px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const ResponsiveLine = styled.div`
  display: none;
  flex: 0 0 55px;
  width: 1px;
  background-color: white;
  margin: 5px 0;

  @media only screen and (max-width: 1000px) {
    display: flex;
  }
`;

export const SkillWrapper = styled.div`
  position: relative;
  width: 260px;
  height: 160px;
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

export const GlowSmall = styled.img`
  position: absolute;
  width: 210px;
  margin-top: -8px;
  animation: App-logo-spin infinite 80s linear;

  @media (max-width: 768px) {
    animation: none;
  }
`;

export const SkillDescriptionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`;

export const SkillIcon = styled.img`
  width: 40px;
`;

export const SkillDescription = styled.div`
  font-size: 15px;
  line-height: 22px;
  letter-spacing: 0.5px;
  margin-top: 12px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-weight: 500;
    font-size: 12px;
  }
`;

export const ThreeDots = styled.div`
  font-size: 48px;
  width: 100%;
  text-align: center;
  letter-spacing: 10px;
  margin-top: 30px;
`;

export const MeetText = styled.div`
  font-size: 26px;
  margin-top: 20px;

  span {
    font-family: "Major Mono Display", monospace;
  }
`;

export const StyledUiWrapper = styled.div`
  position: relative;
`;

export const StyledTheUi = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const ViewImage = styled.a`
  position: absolute;
  right: 20px;
  bottom: 20px;
  background-color: rgb(0, 0, 0, 0.45);
  width: 40px;
  height: 40px;
  display: none;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    display: flex;
  }
`;

export const StyledSearch = styled.img`
  width: 22px;
`;

export const StyledUiLine = styled.div`
  width: 1px;
  flex: 0 0 45px;
  background-color: white;
  margin: 12px 0;
  opacity: 0.8;
`;

export const StyledSubscribeLine = styled.div`
  width: 1px;
  flex: 0 0 155px;
  background-color: white;
  opacity: 0.8;
  margin: 12px 0;

  @media (max-width: 768px) {
    flex: 0 0 80px;
  }
`;

export const SubscribeText = styled.div`
  font-size: 25px;
  margin-top: 8px;
  line-height: 29px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 19px;
    line-height: 23px;
  }
`;

import styled from "styled-components";

export const SubscribeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex: 0 0 140px;

  @media (max-width: 768px) {
    flex: 0 0 200px;
  }
`;

export const SubscribeForm = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  border: 2px solid rgba(255, 255, 255, 0.85);
  border-radius: 35px;
  height: 63px;
  padding: 0 10px 0 20px;
  margin-top: 25px;

  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BottomDust = styled.img`
  position: absolute;
  bottom: 0px;
  max-width: 100%;
  opacity: 0.6;
`;

export const SubscribeTextBox = styled.input`
  height: 100%;
  background: transparent;
  border: none;
  font-size: 19px;
  color: white;
  outline: none;
  font-weight: 500;
  float: left;
  flex: 1;
`;

export const SubscribeButton = styled.div`
  width: 105px;
  height: 43px;
  background-color: white;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: width 0.3s linear;
`;

export const SubscribeButtonText = styled.div`
  position: relative;
  color: black;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const StyledError = styled.div`
  position: relative;
  transition: transform 0.5s linear;
  text-align: center;
  margin-top: 5px;
  color: white;
  max-width: 600px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 768px) {
    width: 100%;
    white-space: normal;
    font-size: 14px;
    max-height: 50px;
  }
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const DetailsWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  right: 30px;

  span {
    margin: 0 5px;
    opacity: 0.4;
  }

  a {
    font-size: 13px;
    opacity: 0.8;
    color: white;
    text-decoration: underline;
  }
`;

export const StyledLink = styled.a``;

import React from "react";
import styled from "styled-components";

const StyledSpinner = styled.div`
  &:before {
    border-top: 3px solid black;
    width: 25px;
    height: 25px;
    margin-top: -12px;
    margin-left: -12px;
  }
`;

const LoadingSpinner = () => (
  <StyledSpinner className="spinner" title="Loading"></StyledSpinner>
);

export default LoadingSpinner;

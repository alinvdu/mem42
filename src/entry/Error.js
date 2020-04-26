import React, { useEffect, useState } from "react";
import { StyledError } from "./styles/SubscribeStyles";

const Error = ({ error }) => {
  const [highlight, setHighlight] = useState(false);
  useEffect(() => {
    setHighlight(true);
    setTimeout(() => {
      setHighlight(false);
    }, 500);
  }, []);

  return (
    <StyledError className={highlight ? "highlight" : undefined}>
      {error}
    </StyledError>
  );
};

export default Error;

import React, { useState, useEffect } from "react";

import LoadingSpinner from "./LoadingSpinner";
import {
  SubscribeForm,
  SubscribeTextBox,
  SubscribeButton,
  SubscribeButtonText,
  StyledError,
  StyledFormWrapper,
} from "./styles/SubscribeStyles";

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const SubscribeFormComp = ({ subscribe, status, message }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (status === "error") {
      delayedHighlight();
    }
  }, [status]);

  const delayedHighlight = () => {
    setTimeout(() => {
      setHighlight(true);
      setTimeout(() => {
        setHighlight(false);
      }, 500);
    }, 100);
  };

  const simpleHighlight = () => {
    setHighlight(true);
    setTimeout(() => {
      setHighlight(false);
    }, 500);
  };

  const setErrorWrapper = (value) => {
    if (!error) {
      setError(value);
      delayedHighlight();
    } else {
      setError(value);
      simpleHighlight();
    }
  };

  const handleSubmit = () => {
    if (!email) {
      setErrorWrapper("Type your email in the above box");
      return;
    }

    if (!validateEmail(email)) {
      setErrorWrapper("Please enter a valid email address");
      return;
    }

    setError(null);

    if (status !== "sending") {
      subscribe({
        EMAIL: email,
      });
    }
  };

  return (
    <StyledFormWrapper>
      <SubscribeForm>
        {status !== "success" ? (
          <SubscribeTextBox
            value={email}
            placeholder="username@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
        ) : null}
        <SubscribeButton
          className={status === "success" ? "fullWidth" : undefined}
          onClick={handleSubmit}
        >
          <SubscribeButtonText>
            {status === "sending" ? (
              <LoadingSpinner />
            ) : status === "success" ? (
              "Thanks for subscribing!"
            ) : (
              "SUBSCRIBE"
            )}
          </SubscribeButtonText>
        </SubscribeButton>
      </SubscribeForm>
      {error || status === "error" ? (
        <StyledError
          className={highlight ? "highlight" : null}
          title={error || message}
        >
          {error ||
            (message.length > 100
              ? message.substring(0, 100) + "..."
              : message)}
        </StyledError>
      ) : null}
    </StyledFormWrapper>
  );
};

export default SubscribeFormComp;

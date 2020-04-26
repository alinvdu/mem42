import React from "react";
import {
  SubscribeWrapper,
  BottomDust,
  DetailsWrapper,
  StyledLink,
} from "./styles/SubscribeStyles";
import bottomDust from "../common/images/bottom-dust.png";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SubscribeForm from "./SubscribeForm";

const url =
  "https://gmail.us8.list-manage.com/subscribe/post?u=ac4cccc70fb37a0a8688e65af&amp;id=fc1f007121";

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <BottomDust src={bottomDust} />
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => {
          return (
            <SubscribeForm
              subscribe={subscribe}
              status={status}
              message={message}
            />
          );
        }}
      />
      <DetailsWrapper>
        <StyledLink
          href="http://changingminds.org/explanations/learning/active_learning.htm"
          target="_blank"
        >
          * Study link
        </StyledLink>
        <span>|</span>
        <StyledLink href="/credits.html" target="_blank">
          Credits
        </StyledLink>
      </DetailsWrapper>
    </SubscribeWrapper>
  );
};

export default Subscribe;

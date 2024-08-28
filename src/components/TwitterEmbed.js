import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TwitterEmbed = ({ tweetId }) => {
  return <TwitterTweetEmbed tweetId={tweetId} />;
};

export default TwitterEmbed;

import React from 'react';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TwitterEmbed = ({ tweetId, theme = 'light' }) => {
  return <TwitterTweetEmbed tweetId={tweetId} options={{ theme }} />;
};

export default TwitterEmbed;

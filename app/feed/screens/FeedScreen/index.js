import React from 'react';
import Feed from '../../components/Feed';

const FeedScreen = (props) => {
  return (
    <Feed
      data={props.data}
      likes={props.likes}
      loves={props.loves}
      isLoading={props.isLoading}
      getFeeds={props.getFeeds}
      postMessage={props.postMessage}
      isLoadingPost={props.isLoadingPost}
      upVotes={props.upVotes}
    />
  );
};

export default FeedScreen;

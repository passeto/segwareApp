import React, { useEffect } from 'react';
import FeedScreen from '../screens/FeedScreen';
import { connect } from 'react-redux';
import * as actions from '../actions';

const FeedContainer = (props) => {
  useEffect(() => {
    props.getFeeds();
  }, []);
  return (
    <FeedScreen
      data={props.data}
      likes={props.likes}
      loves={props.loves}
      isLoading={props.isLoading}
      isLoadingPost={props.isLoadingPost}
      getFeeds={props.getFeeds}
      postMessage={props.postMessage}
      upVotes={props.upVotes}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.feed.isLoading,
  isLoadingPost: state.feed.isLoadingPost,
  data: state.feed.data,
  likes: state.feed.likes,
  loves: state.feed.loves,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);

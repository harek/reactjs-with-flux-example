import React from 'react';
import LikeButton from './LikeButton.react';

class LikeApp extends React.Component {
  render() {
    return <div>
      <LikeButton/>
      <LikeButton/>
    </div>;
  }
}

module.exports = LikeApp

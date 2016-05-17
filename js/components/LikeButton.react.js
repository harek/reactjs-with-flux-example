import React from 'react';
import LikeStore from '../stores/LikeStore';
import LikesActions from '../actions/LikesActions';
class LikeButton extends React.Component {
  constructor(state) {
    super(state);
    this.state = LikeStore.getLikes();
  }

  componentDidMount() {
    LikeStore.addChangeListener(() => this._onChange());
  }

  componentWillUnmount() {
    LikeStore.removeChangeListener(() => this._onChange());
  }

  _onChange() {
      this.setState(LikeStore.getLikes());
  }

  render() {
    return <div>
      {this.state.likes} <button onClick={() => LikesActions.like()}>+1</button>
    </div>;
  }
}

module.exports = LikeButton

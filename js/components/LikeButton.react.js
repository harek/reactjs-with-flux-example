import React from 'react';
import LikesStore from '../stores/LikesStore';
import LikesActions from '../actions/LikesActions';
class LikeButton extends React.Component {
  constructor(state) {
    super(state);
    this.state = LikesStore.getLikes();
  }

  componentDidMount() {
    LikesStore.addChangeListener(() => this._onChange());
  }

  componentWillUnmount() {
    LikesStore.removeChangeListener(() => this._onChange());
  }

  _onChange() {
      this.setState(LikesStore.getLikes());
  }

  render() {
    return <div>
      {this.state.likes} <button onClick={() => LikesActions.like()}>+1</button>
    </div>;
  }
}

module.exports = LikeButton

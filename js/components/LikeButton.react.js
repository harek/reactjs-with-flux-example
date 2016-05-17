import React from 'react';

class LikeButton extends React.Component {
  constructor(state) {
    super(state);
    this.state = {likes : 0};
  }

  addOne() {
    this.setState({likes: this.state.likes + 1});
  }

  render() {
    return <div>
      {this.state.likes} <button onClick={() => this.addOne()}>+1</button>
    </div>;
  }
}

module.exports = LikeButton

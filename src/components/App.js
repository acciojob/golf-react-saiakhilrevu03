import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ballVisible: false, ballPosition: 0 };

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleStartClick() {
    this.setState({ ballVisible: true });
  }

  handleKeyDown(event) {
    if (!this.state.ballVisible) return;
    if (event.keyCode === 39) {
      this.setState(prevState => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  }

  render() {
    const { ballVisible, ballPosition } = this.state;

    return (
      <div>
        {!ballVisible ? (
          <button className="start" onClick={this.handleStartClick}>
            Start
          </button>
        ) : (
          <div
            className="ball"
            style={{
              position: 'relative',
              left: ballPosition,
              width: 50,
              height: 50,
              borderRadius: '50%',
              backgroundColor: 'green',
            }}
          />
        )}
      </div>
    );
  }
}

export default App;

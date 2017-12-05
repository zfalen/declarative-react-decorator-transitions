import React, { Component } from 'react';
import TweenMax from 'gsap';

//styles
import './App.scss';

class Box extends Component {

  componentDidMount() {
    TweenMax.from('.box', .5, {opacity: 0, y: 50});
  }

  render() {
    return (
      <div className="box">I am Box</div>
    );
  }
}

class App extends Component {

  state = {
    showingBox: true
  }

  toggleBox = () => {
    let unmountCallback = () => { this.setState({showingBox: !this.state.showingBox}) };
    TweenMax.to('.box', .5, {opacity: 0, y: 50, onComplete: unmountCallback});
  }

  render() {
    return (
      <div className="App">
        <h1>hello world</h1>
        <button onClick={this.toggleBox}>TOGGLE BOX</button>
        {this.state.showingBox ? <Box/> : null}
      </div>
    );
  }
}

export default App;

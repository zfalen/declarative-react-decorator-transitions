import React, { Component } from 'react';

import FadesUpAndDown from './transitions/fadesUpAndDown';
import BounceInAndOut from './transitions/bounceInAndOut';

//styles
import './styles/App.scss';

@FadesUpAndDown
class Box extends Component {
  render() {
    return (
      <div className="box">I am Box</div>
    );
  }
}

@BounceInAndOut
class Box2 extends Component {
  render() {
    return (
      <div className="box">I am Box2</div>
    );
  }
}

class App extends Component {

  state = {
    showingBox: true,
    showingBox2: true
  }

  toggleBox = () => {
    this.setState({showingBox: !this.state.showingBox});
  }

  toggleBox2 = () => {
    this.setState({showingBox2: !this.state.showingBox2});
  }

  render() {

    return (
      <div className="App">
        <h1>Declarative Decorator Transitions</h1>
        <button onClick={this.toggleBox}>TOGGLE BOX</button>
        <button onClick={this.toggleBox2}>TOGGLE BOX 2</button>
        <Box animationTrigger={this.state.showingBox} />
        <Box2 animationTrigger={this.state.showingBox2} />
      </div>
    );
  }
}

export default App;

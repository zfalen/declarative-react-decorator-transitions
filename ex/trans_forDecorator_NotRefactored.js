import React, { Component } from 'react';
import TweenMax from 'gsap';

import Transition from "react-transition-group/Transition";


export default function (ChildComponent){

  let duration = .5;
  return class extends Component {
    render = () =>
      <Transition
        in={ this.props.showingBox }
        timeout={ duration * 1000 }
        mountOnEnter={true}
        unmountOnExit={true}
        addEndListener={(elementToAnimate, doneCallback) => {
          if (this.props.showingBox) {
            TweenMax.from(elementToAnimate, duration, {opacity: 0, y: 50, onComplete: doneCallback});
          } else {
            TweenMax.to(elementToAnimate, duration, {opacity: 0, y: 50, onComplete: doneCallback});
          }
        }}
      >
        <ChildComponent />
      </Transition>
  }
}

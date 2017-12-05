import React, { Component } from 'react';

import Transition from "react-transition-group/Transition";

export default function(ChildComponent, animationDuration, inTransition, outTransition) {
  return class extends Component {
    render = () =>
      <Transition
        in={ this.props.animationTrigger }
        timeout={ animationDuration * 1000 }
        mountOnEnter={true}
        unmountOnExit={true}
        addEndListener={(elementToAnimate, doneCallback) => {
          if (this.props.animationTrigger) {
            inTransition(elementToAnimate, doneCallback);
          } else {
            outTransition(elementToAnimate, doneCallback);
          }
        }}
      >
        <ChildComponent {...this.props}/>
      </Transition>
  }
}

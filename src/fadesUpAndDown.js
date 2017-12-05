import React, { Component } from 'react';
import TweenMax from 'gsap';

import TransitionWrapper from "./transitionWrapper";


export default function FadesUpAndDown(ChildComponent){

  const animationDuration = .5;

  let inTransition = (elementToAnimate, doneCallback) =>
    TweenMax.from(elementToAnimate, animationDuration, {opacity: 0, y: 50, onComplete: doneCallback});

  let outTransition = (elementToAnimate, doneCallback) =>
    TweenMax.to(elementToAnimate, animationDuration, {opacity: 0, y: 50, onComplete: doneCallback});

  return TransitionWrapper(ChildComponent, animationDuration, inTransition, outTransition);
}

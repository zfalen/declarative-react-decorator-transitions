import TweenMax, { Back } from 'gsap';
import TransitionWrapper from "./transitionWrapper";

export default function BounceInAndOut(ChildComponent){

  const animationDuration = .25;

  let inTransition = (elementToAnimate, doneCallback) =>
    TweenMax.from(elementToAnimate, animationDuration, {scale: 0, ease: Back.easeOut, onComplete: doneCallback});

  let outTransition = (elementToAnimate, doneCallback) =>
    TweenMax.to(elementToAnimate, animationDuration, {scale: 0, ease: Back.easeIn, onComplete: doneCallback});

  return TransitionWrapper(ChildComponent, animationDuration, inTransition, outTransition);
}




<Transition
  in={ "SOME BOOLEAN VALUE" }
  timeout={ "HOW LONG IS THE TRANSITION" }
  mountOnEnter={true}
  unmountOnExit={true}
  addEndListener={(elementToAnimate, doneCallback) => {
    // DO SOME STUFF, THEN CALL...
    doneCallback();
  }}
>
  <SomeChildComponent />
</Transition>

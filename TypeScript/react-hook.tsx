import React, { useState, useEffect, useRef } from "react";
const [user, setUser] = useState<number[]>([1, 2, 3]);
//2 useEffect: Ko dc return gì về ngoại trừ `void` / `Destructor`
function DelayedEffect(props: { timerMs: number }) {
  const { timerMs } = props;
  useEffect(() => {
    setTimeout(() => {
      /* do stuff */
    }, timerMs);
    return timerMs; // Error: No return!
  }, [timerMs]);
}
//2 useRef
//3 DOM element ref
function Foo() {
  // If possible, prefer as specific as possible. For example, `HTMLDivElement` is better than `HTMLElement` and way better than `Element`.
  const divRef = useRef<HTMLDivElement>(null);
  return <div ref={divRef}>etc</div>;
}

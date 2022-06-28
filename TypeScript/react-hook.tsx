import React, { useState, useEffect, useRef } from "react";
//1 Hooks
const [user, setUser] = useState<number[]>([1, 2, 3]);
//2 useEffect: Ko dc return gì về ngoại trừ `void` / `Destructor`
function DelayedEffect(props: { timerMs: number }) {
  const { timerMs } = props;
  useEffect(() => {
    setTimeout(() => {
      /* do stuff */
    }, timerMs);
    return timerMs;
  }, [timerMs]);
}
//2 useRef
//3 DOM element ref
function Foo() {
  // If possible, prefer as specific as possible. For example, HTMLDivElement is better than HTMLElement and way better than Element.
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(divRef.current);
  });

  return <div ref={divRef}>etc</div>;
}
//3 Mutable value ref
function Bar() {
  const intervalRef = useRef<number | null>(null); // returns MutableRefObject<number | null>
  intervalRef.current = 100; // You manage the ref yourself (that's why it's called MutableRefObject!)
}

//2 Custom Hook
const unionArrayReturn = () => {
  return [1, "a"]; //* return type is `(string | number)[]`,due to TS infer
};
const readonlyArrayReturn = () => {
  return [1, "a"] as const; //* return type is `readonly [1, 'a']`
};

import React, { useState, useEffect, useRef } from "react";
//1 Hooks
const [user, setUser] = useState<User | null>(null);
//2 useEffect: not to return anything other than a function or undefined
function DelayedEffect(props: { timerMs: number }) {
  const { timerMs } = props;
  useEffect(() => {
    setTimeout(() => {
      /* do stuff */
    }, timerMs);
  }, [timerMs]);
  return null;
}
//2 useRef
//3 DOM element ref
function Foo() {
  // If possible, prefer as specific as possible. For example, HTMLDivElement is better than HTMLElement and way better than Element.
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Note that ref.current may be null. This is expected, because you may conditionally render the ref-ed element, or you may forgot to assign it
    if (!divRef.current) throw Error("divRef is not assigned");

    // Now divRef.current is sure to be HTMLDivElement
    console.log(divRef.current);
  });

  // Give the ref to an element so React can manage it for you
  return <div ref={divRef}>etc</div>;
}
//3 Mutable value ref
function Bar() {
  const intervalRef = useRef<number | null>(null); // returns MutableRefObject<number | null>
  intervalRef.current = 100; // You manage the ref yourself (that's why it's called MutableRefObject!)
}
//2 Custom Hook
const readonlyArrayReturn = () => {
  return [1, "a"] as const; //* return type is ` readonly [1, 'a'] `
};
const unionArrayReturn = () => {
  return [1, "a"]; //* return type is ` (string | number)[] `,due to TS infer
};

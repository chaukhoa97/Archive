import { useEffect, useState } from "react";

let myTimer;

const MyComponent = (timerDuration) => {
  //1 Execute the callback after [dependencies] changes
  //*   MOUNTING: render(JSX) -> `useEffectFunction`
  //*   UPDATING: render(JSX) -> `cleanUp` -> `useEffectFunction`
  //*   UNMOUNTING: `cleanUp`

  //1 Ko cần cleanup (Chạy rồi thì k cần quan tâm nữa): Gọi API, Tương tác DOM
  //1 Cần cleanup: setTimeout/Interval, subscription (Stuff that happen within useEffect depends on parent state) - như ví dụ ở trên React docs là 2 fn `subscribe/unsubscribe` phải dùng tới `props.friend.id`

  //! Luôn luôn add MUTABLE STUFF mà m refer tới ở {todofunction} (ở đây là timerIsActive và timerDuration) vào [dependencies] -> trừ:
  // 1. State updating functions - setTimerIsActive: Vì nó luôn luôn ko thay đổi
  // 2. Các hàm ngoại lai - setTimeout (fetch(), ...) vì nó klq tới React, và cũng luôn ko thay đổi
  // 3. Các hàm hay biến defined bên ngoài components - myTimer, vì thay đổi mấy cái này klq tới component
  useEffect(() => {
    const timerEffect = () => {
      myTimer = setTimeout(() => {
        console.log("bro");
      }, timerDuration);
    };
    return () => {
      clearTimeout(timerEffect);
    };
  }, [timerDuration]);
};

export default MyComponent;

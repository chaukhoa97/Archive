import { useEffect, useState } from 'react';

let myTimer;

const MyComponent = (props) => {
  const [timerIsActive, setTimerIsActive] = useState(false);
  const timerDuration = props.timerDuration;
  //? useEffect tell React that your component needs to execute {todofunction} after [dependencies] changes
  //! Dependencies = omit luôn -> Lần render nào cũng sẽ chạy hàm {todoFunction}
  //! Dependencies = [] -> {todoFunction} trong useEffect chỉ chạy 1 lần (array rỗng thì F5 lại vẫn rỗng).
  //    Hiểu đúng: Array rỗng === Ko phụ thuộc vào bất cứ dependency nào -> Ko bao giờ phải render lại

  //! Luôn luôn add MUTABLE STUFF mà m refer tới ở {todofunction} (ở đây là timerIsActive và timerDuration) vào [dependencies] -> trừ:
  // 1. State updating functions - setTimerIsActive: Vì nó luôn luôn ko thay đổi
  // 2. Các hàm ngoại lai - setTimeout (fetch(), ...) vì nó klq tới React, và cũng luôn ko thay đổi
  // 3. Các hàm hay biến defined bên ngoài components - myTimer, vì thay đổi mấy cái này klq tới component
  useEffect(() => {
    const timerEffect = () => {
      if (!timerIsActive) {
        setTimerIsActive(true);
        myTimer = setTimeout(() => {
          setTimerIsActive(false);
        }, timerDuration);
      }
      console.log(myTimer);
    };
    //? Clean up function: Dc gọi trước mỗi lần useEffect dc gọi (không tính lần render đầu tiên); hoặc khi component unmounts
    //? Có tác dụng clean effects from previous render
    return () => {
      clearTimeout(timerEffect);
    };
  }, [timerIsActive, timerDuration]);
};

export default MyComponent;

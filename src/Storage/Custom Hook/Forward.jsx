import useCounter from './CustomHook-Counter';

function Forward() {
  //? forwardNum là value mà custom hook return - ở đây là `num`
  //* Dc sử dụng khi nhiều component có logic na ná nhau, nhưng các logic đó có các hook như useEffect, useState... -> Ko viết ở trong function bt dc (Hook chỉ dc ở trong function component/Custom hook)
  const forwardNum = useCounter();
  return <h3>{forwardNum}</h3>;
}

export default Forward;

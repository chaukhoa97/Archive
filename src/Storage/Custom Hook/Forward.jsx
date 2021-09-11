import useCounter from './CustomHook-Counter';

function Forward() {
  //? forwardNum là value mà custom hook return - ở đây là `num`
  // Dc sử dụng khi nhiều component có logic na ná nhau, nhưng do lq tới state nên ko dùng function bình thường dc
  const forwardNum = useCounter();
  return <h3>{forwardNum}</h3>;
}

export default Forward;

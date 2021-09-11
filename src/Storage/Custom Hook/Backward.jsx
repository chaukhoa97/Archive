import useCounter from './CustomHook-Counter';

function Backward() {
  const backwardNum = useCounter(false);
  return <h3>{backwardNum}</h3>;
}

export default Backward;

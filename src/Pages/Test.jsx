function useCounter(forward = true) {
  const [num, setNum] = useState(0);
  useEffect(() => {
    if (forward) {
      setInterval(() => setNum((n) => n + 1), 3000);
    } else {
      setInterval(() => setNum((n) => n - 1), 3000);
    }
  }, [forward]);
  return num;
}

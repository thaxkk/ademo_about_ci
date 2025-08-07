import { useState } from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const [val, setVal] = useState(1);

  const increment = () => setCount(prev => prev + val);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset, val, setVal };
};

export default useCounter;

import React, { useState } from 'react';

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      
      <h1>Welcome to Counter 2.0</h1>
      
    
      <h2>Count: {count}</h2>
      <div>
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
      </div>
      <button onClick={reset}>Reset Count</button>
      <h1>This Number is: {count % 2 === 0 ? 'Even' : 'Odd'}</h1>
      <h1>Prime Number: {isPrime(count).toString()}</h1>
    </div>
  );
};

export default Counter;

import React, { useMemo } from 'react';

const UseMemo = ({ count }) => {

  const expensiveCalculation = useMemo(() => {

    console.log('Calculating expensive function...');

    let ans = 0;
    for (let i = 0; i < 100000000; i++) {
      ans += i;
    }
    return ans + count;
  }, [count]);

  return (
    <div>
      <h2>Expensive Calculation Result</h2>
      <p>{expensiveCalculation}</p>
    </div>
  );
};

export default UseMemo;

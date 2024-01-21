import { useState } from 'react';
import { LeftSection } from './Left Partition/LeftSection';
import { RightSection } from './Right Partition/RightSection';
import { LoadingPage } from './LoadingPage';

export const MainModule = () => {
  const [count, setCount] = useState("")
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="MainModule-container">
      <LoadingPage isLoading={isLoading} />
      <LeftSection setCount={setCount} />
      <RightSection count={count} setIsLoading={setIsLoading} />
    </div>
  );
};

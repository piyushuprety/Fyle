import { useEffect } from 'react';
export const LoadingPage = ({ isLoading }) => {
  useEffect(() => {
    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    if (isLoading) {
      document.addEventListener('touchmove', handleTouchMove, {
        passive: false,
      });
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  return (
    isLoading && (
      <div className="loading-page">
        <div className="spinner"></div>
      </div>
    )
  );
};



  

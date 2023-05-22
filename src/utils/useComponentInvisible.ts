import React, { useState, useRef, useEffect } from 'react';

const useComponentVisible = (isVisible: boolean) => {
  const [isComponentVisible, setIsComponentVisible] = useState<boolean>(isVisible);
  const refComponentVisible = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: React.ChangeEvent | any) => {
    if (refComponentVisible.current && !refComponentVisible.current.contains(e.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return document.addEventListener('click', handleClickOutside, true);
  });

  return { refComponentVisible, isComponentVisible, setIsComponentVisible };
};

export default useComponentVisible;

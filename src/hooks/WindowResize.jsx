import  { useEffect, useState } from 'react'

const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
      });
    
      useEffect(() => {
        // Function to update window size in state
        const updateWindowSize = () => {
          setWindowSize({
            width: window.innerWidth,
          });
        };
    
        // Add event listener to resize
        window.addEventListener('resize', updateWindowSize);
    
        // Remove event listener on component unmount
        return () => {
          window.removeEventListener('resize', updateWindowSize);
        };
      }, [])
  return { windowSize }
}

export default useWindowResize

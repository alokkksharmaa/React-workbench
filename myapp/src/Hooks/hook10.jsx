import React, { useState, useLayoutEffect, useRef } from 'react';
const Hook10 = () => {
  const [boxSize, setBoxSize] = useState({ width: 0, height:0 });
  const boxRef = useRef();
useLayoutEffect(() => {
    const box = boxRef.current;
    const { width, height } = box.getBoundingClientRect();
    setBoxSize({ width, height });
  }, []); 
return (
    <div><div ref={boxRef} 
        style={{width: '100px',
          height: '100px', 
         backgroundColor: 'lightblue', }}>
        Box</div> <p>The box size is: {boxSize.width}px wide and {boxSize.height}px tall. 
</p>
</div>);
};
export default Hook10;
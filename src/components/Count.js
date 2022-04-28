import React, { useState, useEffect } from "react";

export default function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(`Clicked ${count} times`);
  });
  
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setCount(count + 1);
    setToggle(!toggle);
    console.log(toggle);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

import React, { useState } from 'react';

const Example = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [isEditMode, setIsEditMode] = useState(true);

  return (
    <div>
      
      <input value={isEditMode? "exelent":""}></input>
      <button onClick={() => {setIsEditMode(!isEditMode)}}>; {isEditMode?"click not found":"click found"}</button>
    </div>
  );
}
export default Example




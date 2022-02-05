import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import state from './data';



const Like = ()=> {
  const [info, setInfo] = useState( {name: 'Иван', age: 25, show: true} );
 
  const handleClick = () => {
     setInfo({...info, show: !info.show});
  };

  return <div>
      <button onClick = {handleClick}>Click  </button>

      <p>{info.show}</p>
  </div>
};
export default Like;
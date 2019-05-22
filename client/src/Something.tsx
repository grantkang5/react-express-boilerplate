import React from 'react';
import axios from 'axios';

const Something = () => {
  return (
    <div onClick={() => axios.get('/secret').then((res) => console.log(res))}>
      CLICK ME
    </div>
  )
}

export default Something
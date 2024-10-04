import React from 'react';
import { useNavigate } from 'react-router-dom';
const Ebook = () => {
  const Navigate=useNavigate();
  const HandleClick=()=>{
    // console.log("clicked");
    Navigate('/solar');
  }
    return (
      <>
      <button className='button button-primary' onClick={HandleClick}> Go To orrery </button>
      </>
      );
    };
export default Ebook;
import React from 'react';
import styled from 'styled-components';

const Switch = ({darkMode, setDarkMode}) => {
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    display: block;
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;
    /* size of sliding icon -- sun and moon */
    --size-of-icon: 1.4em;
    /* it is like a inline-padding of switch */
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
    border: 1px solid #8b878752;
    border-radius: 20px
    
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f4f5;
    transition: .4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: var(--size-of-icon,1.4em);
    width: var(--size-of-icon,1.4em);
    border-radius: 20px;
    left: var(--slider-offset,0.3em);
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(-45deg,rgb(60, 0, 128),purple,rgb(161, 39, 243));
    ;
   transition: .4s;
  }


  input:checked + .slider {
      border: 1px solid rgba(146, 146, 146, 0.288);
    background-color: #303136;
    background: #d4d4d4ff
  }

  input:checked + .slider:before {
    left: calc(100% - (var(--size-of-icon,1.4em) + var(--slider-offset,0.3em)));
    background: #303136;
    background: #d4d4d4ff;
    /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
    box-shadow: inset -3px -2px 5px -2px #8027b4ff, inset -10px -4px 0 0 #66079cff;
  }`;

export default Switch;

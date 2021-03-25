import React from 'react';
import PropTypes from 'prop-types';

function details(isTrue,prop)
{

  const indentedStyle = {
    paddingLeft:"20px"
  }


  if(isTrue){
  return(
    <div style={indentedStyle}>
      <p >{prop.location}</p>
      <p>{prop.hours}</p>
      <p>{prop.booth}</p>
    </div>
  )
  }
  else{
    return null;
  }
}

function Location(prop)
{

  const dayStyle = {
    border: "1px solid green"
  }

  return(
    <div>
      <p style={dayStyle} onClick={prop.click}>{prop.day}</p>
      {details((prop.day === prop.choice),{...prop})}
    </div> 
  )
}

export default Location;

Location.propTypes = {
  click: PropTypes.func,
  day:PropTypes.string,
  choice:PropTypes.string,
  location:PropTypes.string,
  booth:PropTypes.string,
  hours:PropTypes.string
}
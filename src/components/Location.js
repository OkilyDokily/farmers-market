import React from 'react';


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
  return(
    <div>
      <p onClick={prop.click}>{prop.day}</p>
      {details((prop.day === prop.choice),{...prop})}
    </div> 
  )
}

export default Location;

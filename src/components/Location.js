import React from 'react';


function Location(prop)
{
  return(
    <div>
      <p>{prop.day}</p>
      <p>{prop.location}</p>
      <p>{prop.hours}</p>
      <p>{prop.booth}</p>
    </div> 
  )
}

export default Location;

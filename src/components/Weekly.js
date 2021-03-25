import React from 'react'
import Location from './Location'

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

class Weekly extends React.Component
{
  constructor(){
    super();
    this.state = {
      choice: "Sunday"
    }
  }

  chooseDay = (choice) => {
    this.setState({choice:choice})
  }

  render()
  {
    return (
      <div>
        {marketSchedule.map((x,i) => <Location choice={this.state.choice} click={this.chooseDay.bind(this,x.day)} day={x.day} location={x.location} hours={x.hours} booth={x.booth} key={i} />)}
      </div>
    )
  }
 
}

export default Weekly;
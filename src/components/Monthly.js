import React from "react";
import reportWebVitals from "../reportWebVitals";
import Month from "./Month";
import Selection from "./Selection"

const availableProduce = [
  {
    month: "January",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes",
      "Turnips"
    ]
  },
  {
    month: "February",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes"
    ]
  },
  {
    month: "March",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes"
    ]
  },
  {
    month: "April",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Asparagus",
      "Garlic",
      "Lettuce",
      "Mushrooms",
      "Onions",
      "Potatoes"
    ]
  },
  {
    month: "May",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Asparagus",
      "Cauliflower",
      "Garlic",
      "Lettuce",
      "Potatoes",
      "Radishes"
    ]
  },
  {
    month: "June",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Blackberries",
      "Cherries",
      "Raspberries",
      "Strawberries",
      "Asparagus",
      "Broccoli",
      "Cauliflower",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Potatoes",
      "Radishes",
      "Squash"
    ]
  },
  {
    month: "July",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Rhubarb",
      "Apricots",
      "Blackberries",
      "Blueberries",
      "Cherries",
      "Melons",
      "Nectarines",
      "Peaches",
      "Raspberries",
      "Strawberries",
      "Tomatoes",
      "Beets",
      "Broccoli",
      "Brussel Sprouts",
      "Cabbage",
      "Carrots",
      "Cauliflower",
      "Cucumber",
      "Eggplant",
      "Garlic",
      "Green Beans",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Potatoes",
      "Radishes",
      "Squash",
      "Turnips"
    ]
  },
  {
    month: "August",
    selection: [
      "Apples",
      "Apricots",
      "Blackberries",
      "Blueberries",
      "Cherries",
      "Melons",
      "Nectarines",
      "Peaches",
      "Pears",
      "Plums",
      "Raspberries",
      "Rhubarb",
      "Strawberries",
      "Tomatoes",
      "Beets",
      "Broccoli",
      "Brussel Sprouts",
      "Cabbage",
      "Carrots",
      "Cauliflower",
      "Corn",
      "Cucumber",
      "Eggplant",
      "Garlic",
      "Green Beans",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Onions",
      "Peas",
      "Peppers",
      "Potatoes",
      "Radishes",
      "Squash",
      "Turnips"
    ]
  },
  {
    month: "September",
    selection: [
      "Apples",
      "Blueberries",
      "Grapes",
      "Melons",
      "Peaches",
      "Pears",
      "Plums",
      "Raspberries",
      "Tomatoes",
      "Broccoli",
      "Brussel Sprouts",
      "Cabbage",
      "Carrots",
      "Cauliflower",
      "Corn",
      "Cucumber",
      "Eggplant",
      "Garlic",
      "Green Beans",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Onions",
      "Peas",
      "Peppers",
      "Potatoes",
      "Radishes",
      "Squash",
      "Turnips"
    ]
  },
  {
    month: "October",
    selection: [
      "Apples",
      "Grapes",
      "Hazelnuts",
      "Melons",
      "Peaches",
      "Pears",
      "Tomatoes",
      "Broccoli",
      "Brussel Sprouts",
      "Cabbage",
      "Carrots",
      "Cauliflower",
      "Corn",
      "Cucumber",
      "Eggplant",
      "Garlic",
      "Green Beans",
      "Kohlrabi",
      "Lettuce",
      "Mushrooms",
      "Onions",
      "Peas",
      "Peppers",
      "Potatoes",
      "Pumpkins",
      "Radishes",
      "Squash",
      "Turnips"
    ]
  },
  {
    month: "November",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Broccoli",
      "Carrots",
      "Cauliflower",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes",
      "Squash",
      "Turnips"
    ]
  },
  {
    month: "December",
    selection: [
      "Apples",
      "Hazelnuts",
      "Pears",
      "Broccoli",
      "Carrots",
      "Cauliflower",
      "Garlic",
      "Mushrooms",
      "Onions",
      "Potatoes",
      "Turnips"
    ]
  }
];

const grid = {
  display:"grid",
  gridTemplateColumns: "90px 90px 90px",
  gridAutoRows: "min-content",
  gridColumnGap: "2px",
  gridRowGap: "2px"
}

const monthlyStyle = {
  display:"flex",
  justifyContent:"space-around",
  width: "700px"
}

const isMarked = {
  backgroundColor:"red",
  color:"white"
}


class Monthly extends React.Component {

  constructor(){
    super()
    this.state = {
      index : 0
    }
  }
  
  returnSelect = () => {
    const selection = availableProduce[this.state.index].selection;
    
    return (<Selection selection={selection}/>);
  
  }

  changeMonth = (index) => {
    this.setState({index: index})
  }


  render() {
    return (
      <div style={monthlyStyle}>
        {this.returnSelect()}
        <div style={grid}>
          
        {availableProduce.map((x,index) =>
        (
            <Month style={(index === this.state.index) ? isMarked : {}} month={x.month} key={index} click={this.changeMonth.bind(this,index)} />   
        )
        )}
        </div>
      </div>
    )
  }

}

export default Monthly;
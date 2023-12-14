// FoodList.js
import React, { Component } from 'react';
import axios from 'axios';
import Attraction from './AttractionDetails'
import { BACKEND_URL } from './config';
class Food extends Component {
  constructor(props) {
    super(props);
    this.state = { cincies: [] };
  }
  componentDidMount() {
    axios.get(BACKEND_URL +'attractions/')
      .then(response => {
        const foodAttractions = response.data.filter(cincy => cincy.category === 'Food');
        this.setState({ cincies: foodAttractions });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  attractionList() {
    return this.state.cincies.map(currentAttraction => {
      return <Attraction cincy={currentAttraction} key={currentAttraction.name} />;
    });
  }
  render() {
    return (
      <div>
        <h2 className='center mt-3'>Food Attractions</h2>
        <div className="container-fluid">
          <div className='d-flex flex-wrap'>
            {this.attractionList()}
          </div>
        </div>
      </div>
    );
  }
}
export default Food


import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export class Filters extends Component {

  state = {
    countriesList: []
  };

  componentDidMount(){
    this.retrieveCountriesList()
  }

  retrieveCountriesList = ()=>{
    axios.get(`${process.env.REACT_APP_API_URL}/countries-list`)
    .then((res)=>{
        this.setState({
          countriesList: res.data.data
        });
    })
  }

  getStatesList = ()=>{
    return (
      <select className="custom-select" 
        id="dropdown-menu-align-right" onChange={this.props.stateFilter}>
              <option value="">Select State</option>
              <option value="valid">Valid</option>
              <option value="invalid">Invalid</option>
        </select>
    )
    
  }

  getCoutriesList = ()=>{
    const options = this.state.countriesList.map((country)=>(
        <option key={country} value={country}>{country}</option>
    ));

    return (
      <select className="custom-select" 
         onChange={this.props.countryFilter}>
           <option value="">Select Country</option>
        {options}
      </select>
    )
  }
  
  render() {
      return (<div>{this.getStatesList()}{this.getCoutriesList()}</div>)
  }
  
}

const itemStyle = {
  backgroundColor: '#f4f4f4'
}



 
export default Filters

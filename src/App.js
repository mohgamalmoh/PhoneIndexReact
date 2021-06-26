import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Customers from './components/customers/Customers'
import Header from './components/layout/Header'
import './App.css';
//import {v1 as uuid} from 'uuid';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from 'react-js-pagination';

class App extends Component {

  state = {
    customers: [],
    pagination:{}
  }

  filters = {};

  componentDidMount(){
    this.getCustomersData()
  }


  getCustomersData = (pageNumber=1)=>{
    var queryString = Object.keys(this.filters).map(key => key + '=' + this.filters[key]).join('&');
    axios.get(`${process.env.REACT_APP_API_URL}/index?page=${pageNumber}&${queryString}`)
    .then(
      
      (res)=>{
      
      this.setState({
        
        customers: res.data.data.map(customer=>{
        const item = {
            id: customer.id,
            name: customer.name,
            country: customer.country,
            state: customer.state,
            code: customer.code,
            phone: customer.phone,
        }
        return item}),

      pagination: {
            totalItemsCount: res.data.total,
            activePage: res.data.current_page,
            itemsCountPerPage: res.data.per_page
      }
      
      })
    
    }
    
    )
    
  }


  stateFilter = (e)=>{
    this.filters.state = e.target.value
    this.getCustomersData()
  }

  countryFilter = (e)=>{
    this.filters.country = e.target.value
    this.getCustomersData()
  }



  render() {
    
    return (
      <Router>
      <div className="App">
        <div className="container">
         
          <Header/>

          <Route exact path="/" render={props=>(
            <React.Fragment>
              <Customers customers={this.state.customers} stateFilter={this.stateFilter}
              countryFilter={this.countryFilter}></Customers>
            
            
              <div className="mt-3">
                <Pagination
                  totalItemsCount={this.state.pagination.totalItemsCount}
                  activePage={this.state.pagination.activePage}
                  itemsCountPerPage={this.state.pagination.itemsCountPerPage}
                  onChange={(pageNumber)=>this.getCustomersData(pageNumber)}
                
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            
            </React.Fragment>
          )} />
          
        </div>
       </div>
       </Router>
    );
  }
}

export default App;

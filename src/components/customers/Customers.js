import React, { Component } from 'react';
import Filters from './Filters';
import PropTypes from 'prop-types';

class Customers extends Component {
  render() {
      return (
        <div>
          <Filters stateFilter={this.props.stateFilter} 
          countryFilter={this.props.countryFilter}>
          </Filters>
          <table className="table">
            <thead>
              <tr>
                <th>Country</th>
                <th>State</th>
                <th>Country code</th>
                <th>Phone num.</th>
              </tr>
            </thead>
          
            <tbody>
              {this.renderTableRows()}
            </tbody>
        </table>
      </div>
      )
  }

  renderTableRows() {
    
    const rows = this.props.customers.map(
      
      (customer)=>(
        <tr key={customer.id}>
          <td> 
            {customer.country}
          </td>
          <td>
              {customer.state}
          </td>
          <td>
              {customer.code}
          </td>
          <td>
              {customer.phone}
          </td>
        </tr>
    )

    );
    return rows
 }
}

Customers.propTypes = {
  customers: PropTypes.array.isRequired
}
export default Customers;

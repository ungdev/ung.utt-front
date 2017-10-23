import React, {Component} from 'react';
import Navbar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import Columns from '../components/Columns'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <div className="container">
          <Columns />
        </div>
      </div>
    )
  }
}

export default Home

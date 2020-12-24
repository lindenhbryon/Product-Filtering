import { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
class Dashboard extends Component {
    render() {
      return(
        <>  
          <div className="center-container">
              <Searchbar />
          </div>
        </>
      )
    }
  }

  export default Dashboard;
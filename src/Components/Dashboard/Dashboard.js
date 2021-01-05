import Searchbar from '../Searchbar/Searchbar';
import ProductContainer from '../Product/ProductContainer';
function Dashboard(){
      return(
          <div>
                <div className="center-container">
                    <Searchbar />
                </div>
                <div className="container">
                    <ProductContainer />
                </div>
          </div>
      )
  }

  export default Dashboard;
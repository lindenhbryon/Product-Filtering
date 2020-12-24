import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import AddProduct from '../Components/AddProduct/AddProduct';

function Routes(){
    return(
        <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/add-product" component={AddProduct} exact />
            <Route component={Error} />
        </Switch>
    )
}
export default Routes
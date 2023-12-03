import React, {Component} from "react";
class ProductsDetails extends Component {
    state = {  } 
    render() { 
        return (<h1>
            products details page....{this.props.match.params.id}
        </h1>);
    }
}
 
export default ProductsDetails;
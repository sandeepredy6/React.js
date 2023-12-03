import React, {Component} from "react";
import { Link } from "react-router-dom";
class products extends Component {
    state = { 
        allPrd:[
               {id: 1, Name:"product 1"},
               {id: 2, Name:"product 2"},
               {id: 3, Name:"product 3"},
               {id: 4, Name:"product 4"}

        ]
        
     } 

    render() { 
 return (  <div>
    <h1>products</h1>
    <ul>
    {this.state.allPrd.map(product => (
        <li key={product.id}>
             <Link to={'/products/${product.id}'}> {product.Name}</Link>
        </li>
    ))}
</ul>
    </div>);
       
    }
}
 
export default products;
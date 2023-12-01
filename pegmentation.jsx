import React, { Component } from 'react';
import _ from 'lodash';
class Pagination extends Component {
    state = {  
       
    } 
    render() { 
        const allstuRecs = this.props.allRec;
        const recPerpage = this.props.perpagesize;
        const totpages = allstuRecs/recPerpage;
        const pageInarray = _.range(1,totpages + 1); 
    
        return (
           
            <nav aria-label="Page navigation example">
            <ul class="pagination">
            {k.map((h)=>
            <li class="page-item" key={h}><a class="page-link" href="#">{h}</a></li>
            )}
         </ul>
        </nav>
        );
    }
}
 
export default Pagination;
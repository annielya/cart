import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {addToCart, search} from '../action/action'

class Home extends Component {
    constructor(props){
        super(props);
    
      }
    

    renderlist = () => {
        return (
            this.props.item.map(item => {
                return (
                    <tr key={item.id}>
                        <th>{item.name}</th>
                        <th>{item.description}</th>
                        <th>$ {item.price}</th>
                        <th><button onClick={()=>this.props.addToCart(item.id)}>Add to Cart</button></th>
                    </tr>
                )
            })
        )
    }
    render(){
        return (
            <div>
            <input type="text"  onChange={(e)=>this.props.search(e.target.value)}></input>
            <p>Total Item: {this.props.count}</p>
            <p>Total Price: {this.props.price}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th><Link to="/cart">My Cart</Link></th>
                    </tr>
                </thead>
                <tbody>{this.renderlist()}</tbody>
            </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        item: state.items,
        addedItem: state.addedItem,
        price: state.totalPrice,
        count: state.totalItem
    }    
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id)=> dispatch(addToCart(id)),
        search: (val)=> dispatch(search(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
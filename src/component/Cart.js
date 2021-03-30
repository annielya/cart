import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {addToCart, increase, decrease, remove} from '../action/action'

class Cart extends Component {
    renderlist = () => {

        return (
            this.props.item.map(item => {
                return (
                    <tr key={item.id}>
                        <th>{item.name}</th>
                        <th>
                            <button onClick={()=> this.props.decrease(item.id)}>-</button>
                            {item.quantity}
                            <button onClick={()=> this.props.increase(item.id)}>+</button>
                        </th>
                        <th>$ {item.price}</th>
                        <th><button onClick={()=> this.props.remove(item.id)}>Remove</button></th>
                    </tr>
                )
            })
        )
    }
    render(){
        return (
            <div>
            <p>Total Item: {this.props.count}</p>
            <p>Total Price: {this.props.price}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th><Link to="/">Back To Home</Link></th>
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
        item: state.addedItems,
        price: state.totalPrice,
        count: state.totalItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: (id) => dispatch(increase(id)),
        decrease: (id) => dispatch(decrease(id)),
        remove: (id) => dispatch(remove(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
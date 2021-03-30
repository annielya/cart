import {ADD, INCREASE, DECREASE, REMOVE, SEARCH} from '../action/action-types'

const items = [
    {id: 1, name: "Apple", description:"Eat one everyday, keep the doctor away", price: 12, },
    {id: 2, name: "Grape", description:"Wine is great, but grape is better", price: 11},
    {id: 3, name: "Pineapple", description:"Enjoy but don't forget to peer first", price: 8}
]

const initialStage = {items, addedItems:[], totalPrice : 0, totalItem: 0, search: ""};

const reducer = (state = initialStage, action)=>{

    switch(action.type){
        case ADD: {
            let item = state.addedItems.find(item => item.id === action.id)
            
            if(!item){
                let newItem = state.items.find(item => item.id === action.id)
                let newPrice = state.totalPrice + newItem.price
                let newTotal = state.totalItem + 1
                newItem.quantity = 1
                return {
                    ...state,
                    addedItems: [...state.addedItems, newItem],
                    totalPrice: newPrice,
                    totalItem: newTotal
                }
            }else {
                item.quantity++
                let newPrice = state.totalPrice + item.price
                let newTotal = state.totalItem + 1
                return {
                    ...state,
                    totalPrice: newPrice,
                    totalItem: newTotal
                }
            }
        }
        case INCREASE: {
            let item = state.addedItems.find(item => item.id === action.id)
            item.quantity++
            let newPrice = state.totalPrice + item.price
            let newTotal = state.totalItem + 1
            return {
                ...state,
                addedItems: [...state.addedItems],
                totalPrice: newPrice,
                totalItem: newTotal
            }
        }

        case DECREASE : {
            let item = state.addedItems.find(item => item.id === action.id)
            let newPrice = state.totalPrice - item.price
            let newTotal = state.totalItem - 1
            if( item.quantity-- > 1) {
                return {
                    ...state,
                    addedItems: [...state.addedItems],
                    totalPrice: newPrice,
                    totalItem: newTotal
                }
            } else {
                let newItems = state.addedItems.filter(item => item.id !== action.id)
                return {
                    ...state,
                    addedItems: newItems,
                    totalPrice: newPrice,
                    totalItem: newTotal
                }
            }
        }
        case REMOVE: {
            let newItems = state.addedItems.filter(item => item.id !== action.id)
            let item = state.addedItems.find(item => item.id === action.id)
            let newPrice = state.totalPrice - item.price * item.quantity
            let newTotal = state.totalItem - item.quantity
            return {
                ...state,
                addedItems: newItems,
                totalPrice: newPrice,
                totalItem: newTotal
            }
        }
        case SEARCH: {
            let newSearch = state.items.filter(item=> item.name.toLowerCase().includes(action.search.toLowerCase()) === true);
            if(action.search === ""){
                return {
                    ...state,
                    items: items
                }
            }
            return {
                ...state,
                items: newSearch
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;
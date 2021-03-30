import { ADD, INCREASE, DECREASE, REMOVE, SEARCH } from './action-types'

export const addToCart = (id) => {
    return {
        type: ADD, 
        id: id
    }
}

export const increase = (id) => {
    return {
        type: INCREASE, 
        id: id
    }
}

export const decrease = (id) => {
    return {
        type: DECREASE, 
        id: id
    }
}

export const remove = (id) => {
    return {
        type: REMOVE, 
        id: id
    }
}

export const search = (search) => {
    return {
        type: SEARCH,
        search: search
    }
}
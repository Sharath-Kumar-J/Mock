import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import { reducer, initialState } from './Reducer';//reducer is a pure function 

function fetchDatafromAPI() { 
    const [state, dispatch] = useReducer(reducer, initialState)// usereducer we have to pass two parameters 1. reducer 2.initialstate
                                                //it will return updated state and dispatch method. 

    useEffect(() => {// 1st tym api data call madhaga idu render agutte
        axios
            .get('https://api.instantwebtools.net/v1/airlines')
            .then(response => {
                dispatch({ type: 'FETCH_SUCCESS', payload: response.data })//to dispatch action and payload data we use this dispatch method
            })
            .catch(error => {
                dispatch({ type: 'FETCH_ERRROR', payload: error })//if there is a error in the payload then we will pass erroe to the payload
            })
    }, [])

    return { state }
}

export default fetchDatafromAPI;

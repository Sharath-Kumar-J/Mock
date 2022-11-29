import React,{useEffect, useReducer} from "react";
import axios from "axios";
import { reducer, initialstate} from './Museumreducer';

function MuseumAPIdata(){
    const[state, dispatch ] = useReducer(reducer, initialstate)

    useEffect(()=> {
        axios
        .get('https://jsonplaceholder.typicode.com/albums')
        .then (response => {
            dispatch({ type:'FETCH_SUCCESS',payload:response.data})
        })

        .catch (error => {
            dispatch({ type:'FETCH_ERROR',payload:error})
        })
    },[])

        return{ state }
}

export default MuseumAPIdata;
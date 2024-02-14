import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from "axios";
import reducer from '../post-blog-card/BlogReducer';

const AppContext = createContext();

const API = "http://127.0.0.1:8000/api/get-blog-category-post";

const initialState ={
    isLoading: false,
    isError: false,
    product: [],
    featureProducts: [],
}

const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProductPost = async (url)=>{
        dispatch({type: "SET_LOADING"});
        try {
            const res = await axios.get(API);
            const product = await res.data;
            dispatch({type: "SET_API_DATA", payload: product});
        } catch (error) {
            dispatch({type: "API_ERROR"});
        }
    }

    useEffect(()=>{
        getProductPost(API);
    },[]);

    return(
        <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    );
};

// Custom Hooks
const useProductContext = ()=>{
    return useContext(AppContext);
};

export {AppContext, AppProvider, useProductContext}

import { AUTH } from '../constants/actionType';
import * as api from '../api';

export const signin = (formData,navigate) => async (dispatch) => {
    try {

        const { data} = await api.signIn(formData);

        dispatch({type:AUTH, data});
        //log in the user..
        navigate('/')
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData,navigate) => async (dispatch) => {
    try {
        const { data} = await api.signUp(formData);

        dispatch({type:AUTH, data});
        
        //log up the user..
        navigate('/')
    } catch (error) {
        console.log(error);
    }
};


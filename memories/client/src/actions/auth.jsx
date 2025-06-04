import { AUTH } from '../constants/actionType';
import * as api from '../api';

export const signin = (formData,navigate) => async (dispatch) => {
    try {

        const { data} = await api.signIn(formData);

        dispatch({type:AUTH, data});
        return {success:true}
    } catch (error) {
        console.log(error);
        return {success:false , message:('Username and Password Incorrect! Please Try Again')}
    }
};

export const signup = (formData,navigate) => async (dispatch) => {
    try {
        const { data} = await api.signUp(formData);

        dispatch({type:AUTH, data});
        
        return {success:true}
    } catch (error) {
        console.log(error);
        return {success:false ,message:('Something went wrong! please try again')}
    }
};


import axios from 'axios';
import {
    GET_EMPLOYEE,
    SAVE_EMPLOYEE,
    GET_SKILL,
    SAVE_SKILL,
    RASTREO,
    SEARCH_EMPLOYEE,
} from '../constantes/index';

export const getEmployee = () => async(dispatch) => {
    const response = await axios.get('http://localhost:8080/empleado/todos');
    return dispatch({
        type: GET_EMPLOYEE,
        payload: response.data
    })
}

export const searchEmployee = (codigo) => async(dispatch) => {
    const response = await axios.get(`http://localhost:8080/empleado/${codigo}`);
    return dispatch({
        type: SEARCH_EMPLOYEE,
        payload: response.data
    })
}

export const saveEmployee  = (employee ) => async(dispatch) => {
    const response = await axios.post('http://localhost:8080/empleado', employee );
    return dispatch({
        type: SAVE_EMPLOYEE,
        payload: response.data
    })
}

export const getSkills = () => async(dispatch) => {
    const response = await axios.get('http://localhost:8080/skill');
    return dispatch({
        type: GET_SKILL,
        payload: response.data
    })
}

export const saveSkill = (skill) => async(dispatch) => {
    const response = await axios.post('http://localhost:8080/skill', skill);
    return dispatch({
        type: SAVE_SKILL,
        payload: response.data
    })
}

export const searchRastreo = (codigo) => async(dispatch) => {
    const response = await axios.get(`http://localhost:8080/rastreo/${codigo}`);
    return dispatch({
        type: RASTREO,
        payload: response.data
    })
}


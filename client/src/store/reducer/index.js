import {
    GET_EMPLOYEE,
    SAVE_EMPLOYEE,
    GET_SKILL,
    RASTREO,
    SEARCH_EMPLOYEE,
} from '../constantes/index';

const initialState = {
  employees: [],
  skills: [],
  searchEmployee:{},
  rastreo:[],
  nuevo:''
  };
  
export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_EMPLOYEE:
            return{
                ...state,
                employees: action.payload
            }
        case GET_SKILL:
            return{
                ...state,
                skills: action.payload
            }
        case SEARCH_EMPLOYEE:
            return{
                ...state,
                searchEmployee: action.payload
            }
        case RASTREO:
            return{
                ...state,
                rastreo: action.payload
            }
        case SAVE_EMPLOYEE:
            return{
                ...state,
                nuevo: action.payload
            }
        default:
            return state;
    }
}
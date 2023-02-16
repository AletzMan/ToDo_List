import React, { useReducer } from "react";
const initialState = {
    completed: true,
    pending: true,
    overdue: true,
    date: false
}
const ACTIONS_TYPES = {
    COMPLETED: 'FILTER_BY_COMPLETED_TASKS',
    PENDING: 'FILTER_BY_PENDING_TASKS',
    OVERDUE: 'FILTER_BY_OVERDUE_TASKS',
    DATE: 'FILTER_BY_DATE'
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS_TYPES.COMPLETED:
            return {
                ...state,
                completed: payload
            }
        case ACTIONS_TYPES.PENDING:
            return {
                ...state,
                pending: payload
            }
        case ACTIONS_TYPES.OVERDUE:
            return {
                ...state,
                overdue: payload
            }
        case ACTIONS_TYPES.DATE:
            return {
                ...state,
                date: payload
            }
        default:
            return state
    }
}

function useFilter() {

    const [state, dispatch] = useReducer(reducer, initialState);


    const updateState = (typeFilter, stateFilter) => {
        switch (typeFilter) {
            case 0:
                dispatch({ type: ACTIONS_TYPES.COMPLETED, payload: stateFilter })
                break;
            case 1:
                dispatch({ type: ACTIONS_TYPES.PENDING, payload: stateFilter })
                break;
            case 2:
                dispatch({ type: ACTIONS_TYPES.OVERDUE, payload: stateFilter })
                break;
            case 3:
                dispatch({ type: ACTIONS_TYPES.DATE, payload: stateFilter })
                break;
            default:
                break;
        }
    }

    return ({
        state,
        updateState
    })
}

export { useFilter }
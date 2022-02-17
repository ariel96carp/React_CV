import types from "./actions"
import englishLanguage from "../lang/en-US.json"
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

const initialState = {
    language: {
        locale: "en-US",
        messages: englishLanguage
    }
}

const languageReducer = ( state = initialState, action ) => {
    switch(action.type)
    {
        case types.ADD_ENGLISH:
            if (!(state.language.locale === action.data.locale))
            {
                return {
                    ...state,
                    language: action.data
                }
            }
            else
            {
                return state
            }
        case types.ADD_SPANISH:
            if (!(state.language.locale === action.data.locale))
            {
                return {
                    ...state,
                    language: action.data
                }
            }
            else
            {
                return state
            }
        default:
            return state
    }
}

export default createStore(languageReducer, composeWithDevTools())
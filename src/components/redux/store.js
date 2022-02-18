import types from "./actions"
import englishLanguage from "../lang/en-US.json"
import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const initialState = {
    language: {
        locale: "en-US",
        description: "english",
        messages: englishLanguage,
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

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, languageReducer)
const store = createStore(persistedReducer, composeWithDevTools())

export const persistor = persistStore(store)
export default store
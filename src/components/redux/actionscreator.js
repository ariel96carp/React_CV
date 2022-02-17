import englishLanguage from "../lang/en-US.json"
import spanishLanguage from "../lang/es-AR.json"
import types from "./actions"

const changeToSpanish = () => ({
    type: types.ADD_SPANISH,
    data: {
        locale: "es-AR",
        messages: spanishLanguage
    }
})

const changeToEnglish = () => ({
    type: types.ADD_ENGLISH,
    data: {
        locale: "en-US",
        messages: englishLanguage
    }
})

export { changeToEnglish, changeToSpanish }
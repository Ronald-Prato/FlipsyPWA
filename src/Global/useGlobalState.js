import { useState } from 'react'

// El estado general es este objeto. Se recomienda mantener esta estructura como contenedor de arrays, strings, otros objetos...etc
const State = {
    user_credentials: {
        email: "",
        nickname: "",
        password: ""
    },
    dynamic_styles: {
        side_menu_translation: "translate(-100%)",
    },
    current_fcg: {
        title: "",
        retentive: 0,
        id: ""
    },
    current_fc: {
        front: "",
        back: "",
        id: "",
        comments: ""
    }
}

const useGlobalState = () => {
    const [state, setState] = useState(State)

    const actions = action => {
        const { type, payload } = action

        switch (type) {
            case "setState": {
                return setState(payload)
            }
        }
    }
    return { state, actions }
}

export default useGlobalState
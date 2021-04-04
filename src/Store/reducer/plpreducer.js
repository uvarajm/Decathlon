import { COUNT } from "../types";

const INITIAL_STATE = {
    count: 0
};

const plpCount = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUNT:
            var inc = action.payload + 1;
            return { ...state, count: inc }
        default: return state;
    }

}

export default plpCount;
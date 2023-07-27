import { ACTION_TYPES } from "../../src/constants/actionTypes.js";

const initialState = {
	carNames: [],
	raceResult: [],
};

function carReducer(state = initialState, action) {
	switch (action.type) {
		case ACTION_TYPES.SET_CAR_NAMES:
			return { ...state, carNames: action.payload };
		case ACTION_TYPES.SET_RACE_RESULT:
			return { ...state, raceResult: action.payload };
		default:
			return state;
	}
}

export default carReducer;

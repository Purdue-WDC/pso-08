import React, { useReducer } from "react";

import ExpenseReducer from "./ExpenseReducer";
import ExpenseContext from "./ExpenseContext";

import {
	ADD_EXPENSE,
	UPDATE_EXPENSE,
	DELETE_EXPENSE,
	SET_CURRENT,
	CLEAR_CURRENT,
} from "../types";

const initialState = {
	expenses: [],
	current: null,
};

const ExpenseState = (props) => {
	const [state, dispatch] = useReducer(ExpenseReducer, initialState);

	// Add new expense

	// Update expense

	// Delete expense

	// Set current expense

	// Clear current expense

	return (
		<div></div>
	);
};

export default ExpenseState;

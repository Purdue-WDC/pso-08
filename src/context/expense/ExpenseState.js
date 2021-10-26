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
	const addExpense = (expense) => {
		
	};

	// Update expense
	const updateExpense = (expense) => {
		
	};

	// Delete expense
	const deleteExpense = (id) => {
		
	};

	// Set current expense
	const setCurrent = (id) => {
		
	};

	// Clear current expense
	const clearCurrent = () => {
		
	};

	return (
		<ExpenseContext.Provider>
			{/* {What goes here?} */}
		</ExpenseContext.Provider>
	);
};

export default ExpenseState;

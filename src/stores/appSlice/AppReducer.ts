import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IGroup } from "../../interfaces/IGroup";

export interface IGroupSliceState {
	group: IGroup | null;
}

const initialState: IGroupSliceState = {
	group: null,
};

export const groupSlice = createSlice({
	name: "groupSlice",
	initialState,
	reducers: {
		setGroup: (state, action: PayloadAction<IGroup | null>) => {
			state.group = action.payload;
		},
	},
});

// // Action creators are generated for each case reducer function
export const GroupSliceActions = groupSlice.actions;

// export const groupSliceReducer =  groupSlice.reducer;

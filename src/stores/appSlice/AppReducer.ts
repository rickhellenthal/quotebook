import { swapHorizontalOutline } from "ionicons/icons";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IGroup } from "../../interfaces/IGroup";
import { IStatePiece } from "../../interfaces/IStatePiece";
import { IQuote } from "../../interfaces/IQuote";
import { StatePieceStatus } from "../../enums/StatePieceStatus";
import { AppSliceAsyncActions } from "./AppActions";

export interface IAppSliceState {
	groupSwitcher: {
		isOpen: boolean;
	};
	group: IGroup | null;
	groups: IStatePiece<IGroup[]>;
	quotes: IStatePiece<IQuote[]>;
}

const initialState: IAppSliceState = {
	groupSwitcher: {
		isOpen: false,
	},
	group: null,
	groups: {
		data: [],
		status: StatePieceStatus.None,
	},
	quotes: {
		data: [],
		status: StatePieceStatus.None,
	},
};

export const appSlice = createSlice({
	name: "appSlice",
	initialState,
	reducers: {
		setGroupSwitcherIsOpen: (state, action: PayloadAction<boolean>) => {
			state.groupSwitcher.isOpen = action.payload;
		},
		setGroup: (state, action: PayloadAction<IGroup | null>) => {
			state.group = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			// Groups
			.addCase(AppSliceAsyncActions.fetchGroups.pending, (state) => {
				state.groups.status = StatePieceStatus.Fetching;
			})
			.addCase(AppSliceAsyncActions.fetchGroups.fulfilled, (state, action) => {
				state.groups.data = action.payload;
				state.quotes.status = StatePieceStatus.Success;

				if (!state.group) {
					state.group = action.payload[0];
				}
			})
			.addCase(AppSliceAsyncActions.fetchGroups.rejected, (state) => {
				state.groups.status = StatePieceStatus.Error;
			})

			// Quotes
			.addCase(AppSliceAsyncActions.fetchQuotes.pending, (state) => {
				state.quotes.status = StatePieceStatus.Fetching;
			})
			.addCase(AppSliceAsyncActions.fetchQuotes.fulfilled, (state, action) => {
				state.quotes.data = action.payload;
				state.quotes.status = StatePieceStatus.Success;

				if (!state.group) {
					state.group = action.payload[0].group;
				}
			})
			.addCase(AppSliceAsyncActions.fetchQuotes.rejected, (state) => {
				state.quotes.status = StatePieceStatus.Error;
			});
	},
});

// // Action creators are generated for each case reducer function
export const AppSliceActions = { ...appSlice.actions, ...AppSliceAsyncActions };

// export const groupSliceReducer =  groupSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockGroups, mockQuotes } from "../../mocks/mocks";

export const AppSliceAsyncActions = {
	fetchGroups: createAsyncThunk("appSlice/fetchGroups", async () => {
		// const response = await fetch("https://example.com/groups");
		return mockGroups;
	}),
	fetchQuotes: createAsyncThunk("appSlice/fetchQuotes", async (groupId: string) => {
		// const response = await fetch("https://example.com/groups");
		return mockQuotes.filter((quote) => quote.group.id === groupId);
	}),
};

import { createAsyncThunk } from "@reduxjs/toolkit";
import { mockGroups, mockQuotes } from "../../mocks/mocks";
import { IAddQuoteRequest } from "../../interfaces/quotes/IAddQuoteRequest";
import { IQuote } from "../../interfaces/IQuote";

export const AppSliceAsyncActions = {
	fetchGroups: createAsyncThunk("appSlice/fetchGroups", async () => {
		// const response = await fetch("https://example.com/groups");
		return mockGroups;
	}),
	fetchQuotes: createAsyncThunk("appSlice/fetchQuotes", async (groupId: string) => {
		// const response = await fetch("https://example.com/groups");
		return mockQuotes.filter((quote) => quote.group.id === groupId);
	}),
	addQuote: createAsyncThunk("appSlice/addQuote", async (request: IAddQuoteRequest) => {
		// const response = await fetch("https://example.com/groups");
		return {
			...request,
			group: mockGroups.filter((group) => group.id === request.groupId)[0],
			id: (Math.random() * 123000).toString(),
		} as IQuote;
	}),
};

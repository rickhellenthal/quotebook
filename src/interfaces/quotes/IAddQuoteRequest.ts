export interface IAddQuoteRequest {
	author: string;
	quote: string; // TODO will be a list later
	date: string;
	groupId: string;
	context?: string;
}

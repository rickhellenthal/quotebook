import { IGroup } from "./IGroup";

export interface IQuote {
	/**
	 * A unique Guid
	 */
	id: string;
	author: string;
	quote: string; // TODO will be a list later
	date: Date;
	group: IGroup;
}

import { IQuote } from "../interfaces/IQuote";
import { IGroup } from "./../interfaces/IGroup";

export const mockGroups: IGroup[] = [
	{
		id: "34d6759a-af2c-4a8c-ab64-7a607d4ec50a",
		name: "De makkers",
	},
	{
		id: "2cda36d1-58ac-41c3-9360-4db7cde9cc5a",
		name: "BOBO",
	},
	{
		id: "40eb0dc6-54b8-4743-be36-f4142d816f5d",
		name: "Familie",
	},
];

// 10 mock quotes
export const mockQuotes: IQuote[] = [
	{
		id: "1",
		author: "Johan Cruijff",
		quote: "Elk nadeel heb z'n voordeel",
		date: new Date("2019-10-10"),
		group: mockGroups[0],
	},
	{
		id: "2",
		author: "Johan Cruijff",
		date: new Date("2019-10-10"),
		quote: "De bal is rond",
		group: mockGroups[0],
	},
	{
		id: "3",
		author: "Johan Cruijff",
		date: new Date("2019-10-10"),
		quote: "Het spel is simpel, maar de kunst is moeilijk",
		group: mockGroups[0],
	},
	{
		id: "4",
		author: "Johan Cruijff",
		date: new Date("2019-10-10"),
		quote: "Als je niet kunt winnen, moet je niet verliezen",
		group: mockGroups[0],
	},
	{
		id: "5",
		author: "Johan Cruijff",
		date: new Date("2019-10-10"),
		quote: "Als je niet kunt winnen, moet je niet verliezen, toch!",
		group: mockGroups[0],
	},

	{
		id: "6",
		author: "Johan Cruijff",
		date: new Date("2019-10-10"),
		quote: "Elk nadeel heb z'n voordeel",
		group: mockGroups[1],
	},
	{
		id: "7",
		author: "Johan Cruijff",
		date: new Date("2019-10-10"),
		quote: "Elk nadeel heb z'n voordeel",
		group: mockGroups[1],
	},
	{
		id: "8",
		author: "Johan Cruijff",
		date: new Date("2019-10-10"),
		quote: "Elk nadeel heb z'n voordeel",
		group: mockGroups[1],
	},

	{
		id: "9",
		author: "Johan Cruijff",
		date: new Date("2019-10-10"),
		quote: "Elk nadeel heb z'n voordeel",
		group: mockGroups[2],
	},
];

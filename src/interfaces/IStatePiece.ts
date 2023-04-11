import { StatePieceStatus } from "../enums/StatePieceStatus";

export interface IStatePiece<T> {
	data: T;
	status: StatePieceStatus;
	addStatus?: StatePieceStatus;
}

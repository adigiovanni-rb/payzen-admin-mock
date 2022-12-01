import {IsNotEmpty, Matches} from "class-validator";

const CUIT_REGEX = new RegExp('\\b(20|23|24|27|30|33|34)(\\D)?[0-9]{8}(\\D)?[0-9]');

export class TradingRequestModel {
	@IsNotEmpty()
	@Matches(CUIT_REGEX, { message : "Invalid data format" })
	readonly legalIdentifier: string
}

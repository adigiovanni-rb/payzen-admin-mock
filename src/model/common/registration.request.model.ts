import {IsNotEmpty} from "class-validator";
import {Optional} from "@nestjs/common";

export class RegistrationRequestModel {
  @IsNotEmpty()
  readonly provider: string;
  @Optional()
  readonly registrationDate?: string;
  @Optional()
  readonly closingDate?: string;
}

import {IsNotEmpty} from "class-validator";

export class DetailsRequestModel {
  @IsNotEmpty()
  readonly legalName: string
  readonly keyAccount?: boolean
  readonly nafCode?: string
  readonly city?: string
  readonly zipCode?: string
  readonly address?: string
  readonly country?: string
  readonly state?: string
}

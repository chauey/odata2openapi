import { EnumMember } from './EnumMember';

export interface EnumType {
  name: string;
  //key?: Array<EnumMember>;
  members: Array<EnumMember>;
}

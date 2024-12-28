import {Company} from './company';

export interface User {
  id: number;
  company: Company;
  username: string;
  role: string;
}

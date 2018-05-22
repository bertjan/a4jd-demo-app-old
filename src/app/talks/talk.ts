import {Speaker} from './speaker';

export interface Talk {
  name: string;
  id: number;
  speakers?: Speaker[];
}

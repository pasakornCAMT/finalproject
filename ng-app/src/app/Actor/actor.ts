import {User} from './user';
import {Authority} from './authority';

export class Actor{
  id: number;
  actorId: string;
  name: string;
  user:User;
  authorities:Authority[];
  active:boolean;
}

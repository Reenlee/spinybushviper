import { COLLECTIONS } from '../helpers/constants';
import { Entity } from '../mongodb/entity';

const collection = COLLECTIONS.USER;

const User = Entity(collection);

export default User;

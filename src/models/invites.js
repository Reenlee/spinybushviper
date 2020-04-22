import { COLLECTIONS } from '../helpers/constants';
import { Entity } from '../mongodb/entity';

const collection = COLLECTIONS.INVITE;

const Invite = Entity(collection);

export default Invite;

import { COLLECTIONS } from '../helpers/constants';
import { Entity } from '../mongodb/entity';

const collection = COLLECTIONS.ROOM;

const Room = Entity(collection);

export default Room;

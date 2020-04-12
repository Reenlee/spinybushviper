import { COLLECTIONS } from '../helpers/constants';
import { Entity } from '../mongodb/entity';

const collection = COLLECTIONS.CHAT;

const Chat = Entity(collection);

export default Chat;

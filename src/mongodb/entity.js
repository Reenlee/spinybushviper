import {
  updateOneAsync,
  insertOneAsync,
  findOneAsync,
  deleteOneAsync,
  listManyAsync,
  pushItemsAsync,
  pullItemsAsync,
  insertManyAsync,
  updateManyAsync,
  listManyInAsync,
  listManyOrAsync,
  upsertOneAsync,
} from './query';

export const Entity = collection => ({
  collection: () => collection,

  create: data => insertOneAsync(collection, data),

  createMany: list => {
    const data = list.map(item => item);
    return insertManyAsync(collection, data);
  },

  upsert: (query, data) => upsertOneAsync(collection, query, data),

  update: (query, data) => updateOneAsync(collection, query, data),

  updateMany: (query, data) => updateManyAsync(collection, query, data),

  find: query => findOneAsync(collection, query),

  list: (query, sort, project) =>
    listManyAsync(collection, query, sort, project),

  listIn: (key, value, query, sort, project) =>
    listManyInAsync(collection, key, value, query, sort, project),

  listOr: (or, query, sort, project) =>
    listManyOrAsync(collection, or, query, sort, project),

  delete: query => deleteOneAsync(collection, query),

  push: (query, data) => pushItemsAsync(collection, query, data),

  pull: (query, data) => pullItemsAsync(collection, query, data),
});

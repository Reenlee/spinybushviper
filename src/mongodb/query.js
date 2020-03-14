import { connectDB } from '.';

export const findOneAsync = async (collection, query, project) => {
  const db = await connectDB(collection);
  return db.findOne(query, project);
};

export const listManyAsync = async (collection, query, sort, project) => {
  const db = await connectDB(collection);
  return db
    .find(query)
    .sort(sort)
    .project(project)
    .toArray();
};

export const listManyInAsync = async (
  collection,
  key,
  value,
  query = {},
  sort,
  project
) => {
  const db = await connectDB(collection);
  return db
    .find({ [key]: { $in: value }, ...query })
    .sort(sort)
    .project(project)
    .toArray();
};

export const listManyOrAsync = async (collection, or, query, sort, project) => {
  const db = await connectDB(collection);
  return db
    .find({
      $or: or,
      ...query,
    })
    .sort(sort)
    .project(project)
    .toArray();
};

export const insertOneAsync = async (collection, data) => {
  const db = await connectDB(collection);
  return (await db.insertOne(data)).ops[0];
};

export const insertManyAsync = async (collection, data) => {
  const db = await connectDB(collection);
  return (await db.insertMany(data)).ops;
};

export const updateOneAsync = async (collection, query, data) => {
  const db = await connectDB(collection);
  const { value } = await db.findOneAndUpdate(
    query,
    { $set: data },
    { returnOriginal: false }
  );
  return value;
};

export const upsertOneAsync = async (collection, query, data) => {
  const db = await connectDB(collection);
  const { value } = await db.findOneAndUpdate(
    query,
    { $set: data },
    { returnOriginal: false, upsert: true }
  );
  return value;
};

export const pushItemsAsync = async (collection, query, data) => {
  const db = await connectDB(collection);
  const { value } = await db.findOneAndUpdate(
    query,
    { $push: data },
    { returnOriginal: false }
  );
  return value;
};

export const pullItemsAsync = async (collection, query, data) => {
  const db = await connectDB(collection);
  const { value } = await db.findOneAndUpdate(
    query,
    { $pull: data },
    { returnOriginal: false }
  );
  return value;
};

export const updateManyAsync = async (collection, query, data) => {
  const db = await connectDB(collection);
  const { value } = await db.updateMany(query, { $set: data });
  return value;
};

export const deleteOneAsync = async (collection, query) => {
  const db = await connectDB(collection);
  const { value } = await db.findOneAndUpdate(
    query,
    { $set: { active: false } },
    { returnOriginal: false }
  );
  return value;
};

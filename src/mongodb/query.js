import { connectDB } from '.';

export const findOneAsync = async (collection, query, project) => {
  const db = await connectDB(collection);
  return db.findOne(query, project);
};

export const findManyAsync = async (collection, query, project) => {
  const db = await connectDB(collection);
  return db
    .find(query)
    .project(project)
    .toArray();
};

export const insertOneAsync = async (collection, data) => {
  const db = await connectDB(collection);
  return (await db.insertOne(data)).ops[0];
};

export const insertManyAsync = async (collection, data) => {
  const db = await connectDB(collection);
  return db.insertMany(data);
};

export const updateOneAsync = async (collection, ...query) => {
  const db = await connectDB(collection);
  const { value } = await db.findOneAndUpdate(...query);
  return value;
};

export const updateManyAsync = async (collection, ...query) => {
  const db = await connectDB(collection);
  const { value } = await db.updateMany(...query);
  return value;
};

export const deleteOneAsync = async (collection, ...query) => {
  const db = await connectDB(collection);
  const { value } = await db.findOneAndUpdate(
    ...query,
    { $set: { active: false } },
    { returnOriginal: false }
  );
  return value;
};

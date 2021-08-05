import createError from 'http-errors';
import User from './user.model';

export const show = async ({ params: { username } }) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw createError(404, 'Could not find a user with this username');
  }

  return user;
};

export const getAll = async () => {
  const users = await User.find();
  return [...users];
};

export const getByMail = async ({ params: { email } }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw createError(404, 'Could not find a user with this email');
  }

  return user;
};

export const post = async ({ body }) => {
  const { name, password, email, username } = body;

  const user = await User.findOne({ $or: [{ email: email }, { username: username }] });

  if (user) {
    throw createError(409, 'שם משתמש או מייל תפוסים כבר');
  }

  const newUser = await User.create({ name, username, email, password });

  return newUser;
};

export const update = async ({ params: { id }, body }) => {
  const { name, email } = body;
  const result = await User.findByIdAndUpdate(id, { $set: { name, email } }, { new: true });
  if (!result) {
    throw createError(404, 'משתמש אינו נמצא');
  }
  return result;
};

export const deleteUser = async ({ params: { id } }) => {
  const result = await User.deleteOne({ _id: id });
  if (!result) {
    throw createError(404);
  }
};

export const me = async ({ user }) => user;

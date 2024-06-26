import zod from 'zod';

export const UserSchema = zod.object({
  _id: zod.string(),
  name: zod.string(),
  email: zod.string().email(),
  phone: zod.string(),
  address: zod.string(),
  role: zod.string(),
  avatar: zod.string(),
});

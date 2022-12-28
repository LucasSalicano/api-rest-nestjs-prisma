import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

export type PrismaClientError = PrismaClientKnownRequestError & {
  meta?: { targe: string };
};

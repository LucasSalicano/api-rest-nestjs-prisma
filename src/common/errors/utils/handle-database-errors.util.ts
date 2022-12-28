import { DatabaseError } from './../types/DatabaseError';
import { UniqueConstraintError } from './../types/UniqueConstraintErro';
import { PrismaClientError } from './../types/PrismaClientError';

enum PrismaErrors {
  UniqueConstrainrFail = 'P2002',
}

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  switch (e.code) {
    case PrismaErrors.UniqueConstrainrFail:
      return new UniqueConstraintError(e);
    default:
      return new DatabaseError(e.message);
  }
};

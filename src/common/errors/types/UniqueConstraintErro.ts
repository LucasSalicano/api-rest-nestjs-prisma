import { PrismaClientError } from './PrismaClientError';
import { ConflictError } from './ConflictError';
export class UniqueConstraintError extends ConflictError {
  constructor(e: PrismaClientError) {
    const uniqueField = e.meta.target;
    super(`a record with this ${uniqueField} already exists.`);
  }
}

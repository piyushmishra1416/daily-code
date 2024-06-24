import { mockDeep } from 'vitest-mock-extended';
import { PrismaClient } from '@prisma/client';
import {vi} from 'vitest'

const prismaClient = mockDeep<PrismaClient>();

vi.mock('@repo/db/client', () => {
  return {
    default: prismaClient,
  };
});

export default prismaClient;

import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionsRepository = getRepository(Transaction);

    const transactionDelete = await transactionsRepository.delete({ id });

    if (transactionDelete.affected === 0) {
      throw new AppError("Invalid ID: Transaction doesn't exist");
    }
  }
}

export default DeleteTransactionService;

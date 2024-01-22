

const retryOptions: { maxRetries: number } = { maxRetries: 3 };

async function retryableTransaction<T>(
  transaction: () => Promise<T>,
  functionName: string
): Promise<T> {
  let retries = 0;
  while (true) {
    try {
      return await transaction();
    } catch (error) {
      if (error.code === 10 && error.message.includes('cross-transaction contention')) {
        if (retries < retryOptions.maxRetries) {
          retries++;
          console.log(`Retrying transaction in function ${functionName} due to contention (${retries} attempt)`);
          continue;
        }
      }
      throw error;
    }
  }
}



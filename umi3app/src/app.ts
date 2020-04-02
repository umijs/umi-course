import { ResponseError } from 'umi-request';

export const request = {
  prefix: '/api',
  errorHandler: (error: ResponseError) => {
    // 集中处理错误
    console.log(error);
  },
};

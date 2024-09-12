// common/errorHandler.ts
import { Request, Response, NextFunction } from 'express';
import { errorResponse } from './responseHandler';

// Định nghĩa kiểu dữ liệu cho lỗi tùy chỉnh
interface CustomError extends Error {
  statusCode?: number;
}

// Middleware xử lý lỗi
export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Kiểm tra statusCode, nếu không có thì mặc định là 500
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  // Gọi hàm errorResponse từ baseResponse.ts
  return errorResponse(res, statusCode, message);
};

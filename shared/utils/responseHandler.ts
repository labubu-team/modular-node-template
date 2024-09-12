// common/baseResponse.ts
import { Response } from 'express';

// Định nghĩa kiểu dữ liệu cho Success Response
interface SuccessResponse<T> {
  status: boolean;
  data: T;
  message: string;
}

// Định nghĩa kiểu dữ liệu cho Error Response
interface ErrorResponse {
  status: boolean;
  data: Record<string, never>;
  message: string;
}

// Hàm trả về thành công với status code tùy chỉnh
export const successResponse = <T>(
  res: Response,
  data: T,
  message: string = 'Success',
  statusCode: number = 200
): Response<SuccessResponse<T>> => {
  return res.status(statusCode).json({
    status: statusCode >= 200 && statusCode < 300, // status là true nếu mã trạng thái là 2xx
    data: data,
    message: message,
  });
};

// Hàm trả về lỗi với status là false
export const errorResponse = (
  res: Response,
  statusCode: number = 500,
  message: string = 'Internal Server Error',
  error?: string
): Response<ErrorResponse> => {
  const detailedMessage = error ? `${message}: ${error}` : message;

  return res.status(statusCode).json({
    status: false,
    data: {},
    message: detailedMessage,
  });
};

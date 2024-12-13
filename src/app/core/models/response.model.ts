export interface ApiSuccessResponseModel {
  success: boolean;
}

export interface ErrorModel {
  errorStatus: number;
  error: ErrorResponseModel;
}

export interface ErrorResponseModel {
  errorCode: string;
  message: string;
}

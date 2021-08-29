import { has } from 'lodash';
import axios, { AxiosError, AxiosResponse } from 'axios';

type Error = {
  status: number,
  general? : boolean,
  response?: AxiosResponse
}

const GENERAL_ERROR_MESSAGE = 'Something has gone wrong, please try again';
const GENERAL_ERROR_STATUS_THRESHOLD = 500;
const DEFAULT_MISSING_STATUS = 500;

export const UNAUTHORIZED_STATUSES = [403, 401];

export const generalizeError = (error: AxiosError) => ({ ...error, general: true });

export const getErrorStatus = (error: Error | AxiosError) => {
  if (axios.isAxiosError(error)) {
    return error.response?.status || DEFAULT_MISSING_STATUS
  }

  return error.status || DEFAULT_MISSING_STATUS;
};

export const getErrorMessage = (error : AxiosError | Error) => {
  const status = getErrorStatus(error);
  const hasResponseMessage = has(error, 'response.data.message');

  if (('general' in error && error.general) || (!hasResponseMessage && status >= GENERAL_ERROR_STATUS_THRESHOLD)) {
    return GENERAL_ERROR_MESSAGE;
  }

  return error.response?.data.message;
};

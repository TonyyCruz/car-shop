export enum ErrorTypes {
  ObjectNotFound = 'ObjectNotFound',
  InvalidIdHexadecimal = 'InvalidIdHexadecimal',
}

type ErrorResponseObject = { 
  error: string;
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  ObjectNotFound: {
    error: 'Object not found',
    httpStatus: 404,
  },
  InvalidIdHexadecimal: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};
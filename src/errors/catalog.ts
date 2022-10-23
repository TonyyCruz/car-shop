export enum ErrorTypes {
  InsufficientData = 'InsufficientData',
  InvalidData = 'InvalidData',

}

type ErrorResponseObject = { 
  message: string;
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  InsufficientData: {
    message: 'All values are mandatory',
    httpStatus: 400,
  },
  InvalidData: {
    message: 'Some data is invalid',
    httpStatus: 400,
  },

};
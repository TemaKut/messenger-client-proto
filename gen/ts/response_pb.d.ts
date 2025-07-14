// package: messenger
// file: response.proto

import * as jspb from "google-protobuf";
import * as user_user_pb from "./user/user_pb";

export class Response extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasErrors(): boolean;
  clearErrors(): void;
  getErrors(): Errors | undefined;
  setErrors(value?: Errors): void;

  hasSuccess(): boolean;
  clearSuccess(): void;
  getSuccess(): Success | undefined;
  setSuccess(value?: Success): void;

  getSourceCase(): Response.SourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    id: number,
    errors?: Errors.AsObject,
    success?: Success.AsObject,
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    ERRORS = 11,
    SUCCESS = 12,
  }
}

export class Errors extends jspb.Message {
  clearErrorsList(): void;
  getErrorsList(): Array<Error>;
  setErrorsList(value: Array<Error>): void;
  addErrors(value?: Error, index?: number): Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Errors.AsObject;
  static toObject(includeInstance: boolean, msg: Errors): Errors.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Errors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Errors;
  static deserializeBinaryFromReader(message: Errors, reader: jspb.BinaryReader): Errors;
}

export namespace Errors {
  export type AsObject = {
    errorsList: Array<Error.AsObject>,
  }
}

export class Error extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
  }
}

export class Success extends jspb.Message {
  hasUserRegister(): boolean;
  clearUserRegister(): void;
  getUserRegister(): UserRegisterResponse | undefined;
  setUserRegister(value?: UserRegisterResponse): void;

  getDataCase(): Success.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Success.AsObject;
  static toObject(includeInstance: boolean, msg: Success): Success.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Success, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Success;
  static deserializeBinaryFromReader(message: Success, reader: jspb.BinaryReader): Success;
}

export namespace Success {
  export type AsObject = {
    userRegister?: UserRegisterResponse.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    USER_REGISTER = 1,
  }
}

export class UserRegisterResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): user_user_pb.User | undefined;
  setUser(value?: user_user_pb.User): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserRegisterResponse): UserRegisterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRegisterResponse;
  static deserializeBinaryFromReader(message: UserRegisterResponse, reader: jspb.BinaryReader): UserRegisterResponse;
}

export namespace UserRegisterResponse {
  export type AsObject = {
    user?: user_user_pb.User.AsObject,
  }
}


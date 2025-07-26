// package: messenger
// file: response.proto

import * as jspb from "google-protobuf";
import * as user_user_pb from "./user/user_pb";
import * as user_auth_pb from "./user/auth_pb";
import * as error_pb from "./error_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Response extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasServerTime(): boolean;
  clearServerTime(): void;
  getServerTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setServerTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasError(): boolean;
  clearError(): void;
  getError(): error_pb.Error | undefined;
  setError(value?: error_pb.Error): void;

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
    id: string,
    serverTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    error?: error_pb.Error.AsObject,
    success?: Success.AsObject,
  }

  export enum SourceCase {
    SOURCE_NOT_SET = 0,
    ERROR = 11,
    SUCCESS = 12,
  }
}

export class Success extends jspb.Message {
  hasUserRegister(): boolean;
  clearUserRegister(): void;
  getUserRegister(): UserRegisterResponse | undefined;
  setUserRegister(value?: UserRegisterResponse): void;

  hasUserAuthorize(): boolean;
  clearUserAuthorize(): void;
  getUserAuthorize(): UserAuthorizeResponse | undefined;
  setUserAuthorize(value?: UserAuthorizeResponse): void;

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
    userAuthorize?: UserAuthorizeResponse.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    USER_REGISTER = 1,
    USER_AUTHORIZE = 2,
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

export class UserAuthorizeResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): user_user_pb.User | undefined;
  setUser(value?: user_user_pb.User): void;

  hasAuthParams(): boolean;
  clearAuthParams(): void;
  getAuthParams(): user_auth_pb.AuthParams | undefined;
  setAuthParams(value?: user_auth_pb.AuthParams): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAuthorizeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserAuthorizeResponse): UserAuthorizeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserAuthorizeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAuthorizeResponse;
  static deserializeBinaryFromReader(message: UserAuthorizeResponse, reader: jspb.BinaryReader): UserAuthorizeResponse;
}

export namespace UserAuthorizeResponse {
  export type AsObject = {
    user?: user_user_pb.User.AsObject,
    authParams?: user_auth_pb.AuthParams.AsObject,
  }
}


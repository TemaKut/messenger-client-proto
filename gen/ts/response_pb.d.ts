// package: messenger
// file: response.proto

import * as jspb from "google-protobuf";
import * as user_user_pb from "./user/user_pb";
import * as user_auth_pb from "./user/auth_pb";

export class Response extends jspb.Message {
  hasUserRegister(): boolean;
  clearUserRegister(): void;
  getUserRegister(): UserRegisterResponse | undefined;
  setUserRegister(value?: UserRegisterResponse): void;

  hasUserAuthorize(): boolean;
  clearUserAuthorize(): void;
  getUserAuthorize(): UserAuthorizeResponse | undefined;
  setUserAuthorize(value?: UserAuthorizeResponse): void;

  getDataCase(): Response.DataCase;
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
    userRegister?: UserRegisterResponse.AsObject,
    userAuthorize?: UserAuthorizeResponse.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    USER_REGISTER = 11,
    USER_AUTHORIZE = 12,
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


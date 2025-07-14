// package: messenger
// file: request.proto

import * as jspb from "google-protobuf";

export class Request extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasUserRegister(): boolean;
  clearUserRegister(): void;
  getUserRegister(): UserRegisterRequest | undefined;
  setUserRegister(value?: UserRegisterRequest): void;

  getDataCase(): Request.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    id: number,
    userRegister?: UserRegisterRequest.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    USER_REGISTER = 11,
  }
}

export class UserRegisterRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserRegisterRequest): UserRegisterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRegisterRequest;
  static deserializeBinaryFromReader(message: UserRegisterRequest, reader: jspb.BinaryReader): UserRegisterRequest;
}

export namespace UserRegisterRequest {
  export type AsObject = {
    name: string,
    lastName: string,
    email: string,
    password: string,
  }
}


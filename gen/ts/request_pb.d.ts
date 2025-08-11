// package: messenger
// file: request.proto

import * as jspb from "google-protobuf";
import * as chat_peer_pb from "./chat/peer_pb";

export class Request extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasUserRegister(): boolean;
  clearUserRegister(): void;
  getUserRegister(): UserRegisterRequest | undefined;
  setUserRegister(value?: UserRegisterRequest): void;

  hasUserAuthorize(): boolean;
  clearUserAuthorize(): void;
  getUserAuthorize(): UserAuthorizeRequest | undefined;
  setUserAuthorize(value?: UserAuthorizeRequest): void;

  hasChannelCreate(): boolean;
  clearChannelCreate(): void;
  getChannelCreate(): ChannelCreateRequest | undefined;
  setChannelCreate(value?: ChannelCreateRequest): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): ChannelRequest | undefined;
  setChannel(value?: ChannelRequest): void;

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
    id: string,
    userRegister?: UserRegisterRequest.AsObject,
    userAuthorize?: UserAuthorizeRequest.AsObject,
    channelCreate?: ChannelCreateRequest.AsObject,
    channel?: ChannelRequest.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    USER_REGISTER = 11,
    USER_AUTHORIZE = 12,
    CHANNEL_CREATE = 20,
    CHANNEL = 21,
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

export class UserAuthorizeRequest extends jspb.Message {
  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): UserAuthorizeEmailCredential | undefined;
  setEmail(value?: UserAuthorizeEmailCredential): void;

  getCredentialsCase(): UserAuthorizeRequest.CredentialsCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAuthorizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserAuthorizeRequest): UserAuthorizeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserAuthorizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAuthorizeRequest;
  static deserializeBinaryFromReader(message: UserAuthorizeRequest, reader: jspb.BinaryReader): UserAuthorizeRequest;
}

export namespace UserAuthorizeRequest {
  export type AsObject = {
    email?: UserAuthorizeEmailCredential.AsObject,
  }

  export enum CredentialsCase {
    CREDENTIALS_NOT_SET = 0,
    EMAIL = 1,
  }
}

export class UserAuthorizeEmailCredential extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserAuthorizeEmailCredential.AsObject;
  static toObject(includeInstance: boolean, msg: UserAuthorizeEmailCredential): UserAuthorizeEmailCredential.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserAuthorizeEmailCredential, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserAuthorizeEmailCredential;
  static deserializeBinaryFromReader(message: UserAuthorizeEmailCredential, reader: jspb.BinaryReader): UserAuthorizeEmailCredential;
}

export namespace UserAuthorizeEmailCredential {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class ChannelCreateRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelCreateRequest): ChannelCreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelCreateRequest;
  static deserializeBinaryFromReader(message: ChannelCreateRequest, reader: jspb.BinaryReader): ChannelCreateRequest;
}

export namespace ChannelCreateRequest {
  export type AsObject = {
    title: string,
  }
}

export class ChannelRequest extends jspb.Message {
  hasPeer(): boolean;
  clearPeer(): void;
  getPeer(): chat_peer_pb.Peer | undefined;
  setPeer(value?: chat_peer_pb.Peer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelRequest): ChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelRequest;
  static deserializeBinaryFromReader(message: ChannelRequest, reader: jspb.BinaryReader): ChannelRequest;
}

export namespace ChannelRequest {
  export type AsObject = {
    peer?: chat_peer_pb.Peer.AsObject,
  }
}


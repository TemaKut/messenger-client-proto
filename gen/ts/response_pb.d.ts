// package: messenger
// file: response.proto

import * as jspb from "google-protobuf";
import * as user_user_pb from "./user/user_pb";
import * as user_auth_pb from "./user/auth_pb";
import * as chat_channel_pb from "./chat/channel_pb";

export class Response extends jspb.Message {
  hasUserRegister(): boolean;
  clearUserRegister(): void;
  getUserRegister(): UserRegisterResponse | undefined;
  setUserRegister(value?: UserRegisterResponse): void;

  hasUserAuthorize(): boolean;
  clearUserAuthorize(): void;
  getUserAuthorize(): UserAuthorizeResponse | undefined;
  setUserAuthorize(value?: UserAuthorizeResponse): void;

  hasChannelCreate(): boolean;
  clearChannelCreate(): void;
  getChannelCreate(): ChannelCreateResponse | undefined;
  setChannelCreate(value?: ChannelCreateResponse): void;

  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): ChannelResponse | undefined;
  setChannel(value?: ChannelResponse): void;

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
    channelCreate?: ChannelCreateResponse.AsObject,
    channel?: ChannelResponse.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    USER_REGISTER = 11,
    USER_AUTHORIZE = 12,
    CHANNEL_CREATE = 20,
    CHANNEL = 21,
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

export class ChannelCreateResponse extends jspb.Message {
  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): chat_channel_pb.Channel | undefined;
  setChannel(value?: chat_channel_pb.Channel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelCreateResponse): ChannelCreateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelCreateResponse;
  static deserializeBinaryFromReader(message: ChannelCreateResponse, reader: jspb.BinaryReader): ChannelCreateResponse;
}

export namespace ChannelCreateResponse {
  export type AsObject = {
    channel?: chat_channel_pb.Channel.AsObject,
  }
}

export class ChannelResponse extends jspb.Message {
  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): chat_channel_pb.Channel | undefined;
  setChannel(value?: chat_channel_pb.Channel): void;

  clearMembersList(): void;
  getMembersList(): Array<chat_channel_pb.ChannelMember>;
  setMembersList(value: Array<chat_channel_pb.ChannelMember>): void;
  addMembers(value?: chat_channel_pb.ChannelMember, index?: number): chat_channel_pb.ChannelMember;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelResponse): ChannelResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelResponse;
  static deserializeBinaryFromReader(message: ChannelResponse, reader: jspb.BinaryReader): ChannelResponse;
}

export namespace ChannelResponse {
  export type AsObject = {
    channel?: chat_channel_pb.Channel.AsObject,
    membersList: Array<chat_channel_pb.ChannelMember.AsObject>,
  }
}


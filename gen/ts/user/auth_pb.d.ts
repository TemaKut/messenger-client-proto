// package: messenger.user
// file: user/auth.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AuthParams extends jspb.Message {
  hasAccessToken(): boolean;
  clearAccessToken(): void;
  getAccessToken(): AuthToken | undefined;
  setAccessToken(value?: AuthToken): void;

  hasRefreshToken(): boolean;
  clearRefreshToken(): void;
  getRefreshToken(): AuthToken | undefined;
  setRefreshToken(value?: AuthToken): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthParams.AsObject;
  static toObject(includeInstance: boolean, msg: AuthParams): AuthParams.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthParams, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthParams;
  static deserializeBinaryFromReader(message: AuthParams, reader: jspb.BinaryReader): AuthParams;
}

export namespace AuthParams {
  export type AsObject = {
    accessToken?: AuthToken.AsObject,
    refreshToken?: AuthToken.AsObject,
  }
}

export class AuthToken extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  hasExpiredAt(): boolean;
  clearExpiredAt(): void;
  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthToken.AsObject;
  static toObject(includeInstance: boolean, msg: AuthToken): AuthToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthToken;
  static deserializeBinaryFromReader(message: AuthToken, reader: jspb.BinaryReader): AuthToken;
}

export namespace AuthToken {
  export type AsObject = {
    token: string,
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}


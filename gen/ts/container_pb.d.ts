// package: messenger
// file: container.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as response_pb from "./response_pb";
import * as update_pb from "./update_pb";
import * as error_pb from "./error_pb";

export class ServerMessageContainer extends jspb.Message {
  hasServerTime(): boolean;
  clearServerTime(): void;
  getServerTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setServerTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): response_pb.Response | undefined;
  setResponse(value?: response_pb.Response): void;

  hasUpdate(): boolean;
  clearUpdate(): void;
  getUpdate(): update_pb.Update | undefined;
  setUpdate(value?: update_pb.Update): void;

  hasError(): boolean;
  clearError(): void;
  getError(): error_pb.Error | undefined;
  setError(value?: error_pb.Error): void;

  getDataCase(): ServerMessageContainer.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageContainer.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageContainer): ServerMessageContainer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageContainer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageContainer;
  static deserializeBinaryFromReader(message: ServerMessageContainer, reader: jspb.BinaryReader): ServerMessageContainer;
}

export namespace ServerMessageContainer {
  export type AsObject = {
    serverTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    response?: response_pb.Response.AsObject,
    update?: update_pb.Update.AsObject,
    error?: error_pb.Error.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    RESPONSE = 11,
    UPDATE = 12,
    ERROR = 13,
  }
}


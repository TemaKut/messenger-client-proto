// package: messenger
// file: error.proto

import * as jspb from "google-protobuf";

export class Error extends jspb.Message {
  getReason(): ErrorReasonMap[keyof ErrorReasonMap];
  setReason(value: ErrorReasonMap[keyof ErrorReasonMap]): void;

  getDescription(): string;
  setDescription(value: string): void;

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
    reason: ErrorReasonMap[keyof ErrorReasonMap],
    description: string,
  }
}

export interface ErrorReasonMap {
  ERROR_REASON_UNKNOWN: 0;
  ERROR_REASON_REQUEST_HAS_NO_ID: 1;
  ERROR_REASON_REQUEST_VALIDATE: 2;
  ERROR_REASON_FORBIDDEN: 3;
  ERROR_REASON_USER_EMAIL_ALREADY_EXISTS: 4;
}

export const ErrorReason: ErrorReasonMap;


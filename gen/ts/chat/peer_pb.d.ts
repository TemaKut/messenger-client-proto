// package: messenger.chat
// file: chat/peer.proto

import * as jspb from "google-protobuf";

export class Peer extends jspb.Message {
  hasChannel(): boolean;
  clearChannel(): void;
  getChannel(): PeerChannel | undefined;
  setChannel(value?: PeerChannel): void;

  getDataCase(): Peer.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Peer.AsObject;
  static toObject(includeInstance: boolean, msg: Peer): Peer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Peer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Peer;
  static deserializeBinaryFromReader(message: Peer, reader: jspb.BinaryReader): Peer;
}

export namespace Peer {
  export type AsObject = {
    channel?: PeerChannel.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    CHANNEL = 1,
  }
}

export class PeerChannel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PeerChannel.AsObject;
  static toObject(includeInstance: boolean, msg: PeerChannel): PeerChannel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PeerChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PeerChannel;
  static deserializeBinaryFromReader(message: PeerChannel, reader: jspb.BinaryReader): PeerChannel;
}

export namespace PeerChannel {
  export type AsObject = {
    id: string,
  }
}


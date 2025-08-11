// package: messenger.chat
// file: chat/channel.proto

import * as jspb from "google-protobuf";

export class Channel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Channel.AsObject;
  static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Channel;
  static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
}

export namespace Channel {
  export type AsObject = {
    id: string,
    title: string,
  }
}

export class ChannelMember extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  getIsOwner(): boolean;
  setIsOwner(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelMember.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelMember): ChannelMember.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelMember;
  static deserializeBinaryFromReader(message: ChannelMember, reader: jspb.BinaryReader): ChannelMember;
}

export namespace ChannelMember {
  export type AsObject = {
    userId: string,
    isOwner: boolean,
  }
}


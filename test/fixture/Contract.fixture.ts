import { PacketFixture } from "./Packet.fixture";
import { FieldFixture } from "./Field.fixture";
import { TypeSchemaFixture } from "./TypeSchema.fixture";
import { Contract, TypeSchema } from "packetizr";

export class ContractFixture {
  static buildPlainContract() {
    return new Contract(
      [
        PacketFixture.buildPacketWithNumbersOnly(),
        PacketFixture.buildPacketWithStringsOnly(),
      ],
      []
    );
  }

  static buildContractWithSchema() {
    return new Contract(
      [
        PacketFixture.buildPacketWithNumbersOnly(),
        PacketFixture.buildPacketWithStringsOnly(),
      ],
      [
        new TypeSchema("NumbersObject", FieldFixture.buildListOfNumberFields()),
        new TypeSchema("StringsObject", FieldFixture.buildListOfStringFields()),
      ]
    );
  }

  static buildContractWithSchemaAndCustomTypes() {
    return new Contract(
      [PacketFixture.buildPacketWithCustomTypes()],
      [
        TypeSchemaFixture.buildNumbersObjectSchema(),
        TypeSchemaFixture.buildStringsObjectSchema(),
      ]
    );
  }

  static buildContractWithCustomTypes() {
    return new Contract(
      [
        PacketFixture.buildPacketWithNumbersOnly(),
        PacketFixture.buildPacketWithStringsOnly(),
      ],
      [
        TypeSchemaFixture.buildNumbersObjectSchema(),
        TypeSchemaFixture.buildStringsObjectSchema(),
      ]
    );
  }

  static buildContractWithNestedCustomTypes() {
    return new Contract(
      [PacketFixture.buildPacketWithNestedCustomTypes()],
      [
        TypeSchemaFixture.buildParentObjectSchema(),
        TypeSchemaFixture.buildChildObjectSchema(),
      ]
    );
  }

  static buildContractWithArrayField() {
    return new Contract(
      [PacketFixture.buildPacketWithArrayFieldOnly()],
      [new TypeSchema("StringsObject", FieldFixture.buildListOfStringFields())]
    );
  }

  static buildContractWithPrimitiveArrayField() {
    return new Contract([PacketFixture.buildContractWithPrimitiveArrayField()]);
  }
}

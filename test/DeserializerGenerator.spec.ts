import * as fs from "fs";
import { TemplateContainerFixture } from "./TemplateContainer.fixture";
import { DeserializerGenerator } from "../src/DeserializerGenerator";
import { PacketFixture } from "./fixture/Packet.fixture";
import { TypeSchemaFixture } from "./fixture/TypeSchema.fixture";

describe("generate is called with packet", () => {
  it("should return SourceFile with serializer name and content, given packet has upper case packet name and fields", () => {
    let deserializerGenerator = new DeserializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/test-message.deserializer.go`)
      .toString();

    let file = deserializerGenerator.generate(
      PacketFixture.buildWithAllFieldsAndUpperCaseFirstCharacter()
    );

    expect(file.name).toEqual("test-message.deserializer.go");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("should return SourceFile with serializer name and content, given packet has lower case packet name and fields", () => {
    let deserializerGenerator = new DeserializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/test-message.deserializer.go`)
      .toString();

    let file = deserializerGenerator.generate(
      PacketFixture.buildWithAllFieldsAndLowerCaseFirstCharacter()
    );

    expect(file.name).toEqual("test-message.deserializer.go");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("should not include binary package, if packet does not have primitive types", () => {
    let deserializerGenerator = new DeserializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/custom-message.deserializer.go`)
      .toString();

    let file = deserializerGenerator.generate(
      PacketFixture.buildPacketWithNestedCustomTypes()
    );

    expect(file.name).toEqual("custom-message.deserializer.go");
    expect(file.content).toEqual(expectedFileContent);
  });
});

describe("generate is called with type schema", () => {
  it("should return SourceFile with deserializer name and content, given type schema has upper case packet name and fields", () => {
    let serializerGenerator = new DeserializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(
        `${__dirname}/fixture/files/custom-type-dto.deserializer.go`
      )
      .toString();

    let file = serializerGenerator.generate(
      TypeSchemaFixture.buildCustomType()
    );

    expect(file.name).toEqual("custom-type-dto.deserializer.go");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("should return SourceFile with deserializer name and content, given type schema has lower case packet name and fields", () => {
    let serializerGenerator = new DeserializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(
        `${__dirname}/fixture/files/custom-type-dto.deserializer.go`
      )
      .toString();

    let file = serializerGenerator.generate(
      TypeSchemaFixture.buildCustomType()
    );

    expect(file.name).toEqual("custom-type-dto.deserializer.go");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("should not include binary package, if schema does not have primitive types", () => {
    let deserializerGenerator = new DeserializerGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(
        `${__dirname}/fixture/files/parent-object-dto.deserializer.go`
      )
      .toString();

    let file = deserializerGenerator.generate(
      TypeSchemaFixture.buildParentObjectSchema()
    );

    expect(file.name).toEqual("parent-object-dto.deserializer.go");
    expect(file.content).toEqual(expectedFileContent);
  });
});

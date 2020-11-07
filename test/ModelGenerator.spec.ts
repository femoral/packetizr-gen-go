import * as fs from "fs";
import { ModelGenerator } from "../src/ModelGenerator";
import { TemplateContainerFixture } from "./TemplateContainer.fixture";
import { PacketFixture } from "./fixture/Packet.fixture";
import { TypeSchemaFixture } from "./fixture/TypeSchema.fixture";

describe("generate is called with packet", () => {
  it("should return SourceFile with the model corresponding to the packet, given packet has upper case packet name and fields", () => {
    let modelGenerator = new ModelGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/test-message.go`)
      .toString();

    let file = modelGenerator.generate(
      PacketFixture.buildWithAllFieldsAndUpperCaseFirstCharacter()
    );

    expect(file.name).toEqual("test-message.go");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("should return SourceFile with the model corresponding to the packet, given packet has lower case packet name and fields", () => {
    let modelGenerator = new ModelGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/test-message.go`)
      .toString();

    let file = modelGenerator.generate(
      PacketFixture.buildWithAllFieldsAndLowerCaseFirstCharacter()
    );

    expect(file.name).toEqual("test-message.go");
    expect(file.content).toEqual(expectedFileContent);
  });
});

describe("generate is called with TypeSchema", () => {
  it("Should return SourceFile with class model containing schema fields, given schema has upper case packet name and fields", () => {
    let modelGenerator = new ModelGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/custom-type-dto.go`)
      .toString();
    let file = modelGenerator.generate(TypeSchemaFixture.buildCustomType());

    expect(file.name).toEqual("custom-type-dto.go");
    expect(file.content).toEqual(expectedFileContent);
  });

  it("Should return SourceFile with class model containing schema fields, given schema has lower case packet name and fields", () => {
    let modelGenerator = new ModelGenerator(
      TemplateContainerFixture.getContainer()
    );
    let expectedFileContent = fs
      .readFileSync(`${__dirname}/fixture/files/custom-type-dto.go`)
      .toString();
    let file = modelGenerator.generate(TypeSchemaFixture.buildCustomType());

    expect(file.name).toEqual("custom-type-dto.go");
    expect(file.content).toEqual(expectedFileContent);
  });
});

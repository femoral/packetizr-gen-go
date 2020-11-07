import { FieldFixture } from "./Field.fixture";
import { TypeSchema } from "packetizr";

export class TypeSchemaFixture {
  static buildStringsObjectSchema() {
    return new TypeSchema(
      "StringsObject",
      FieldFixture.buildListOfStringFields()
    );
  }

  static buildNumbersObjectSchema() {
    return new TypeSchema(
      "NumbersObject",
      FieldFixture.buildListOfNumberFields()
    );
  }

  static buildParentObjectSchema() {
    return new TypeSchema(
      "ParentObject",
      FieldFixture.buildListWithChildObject()
    );
  }

  static buildChildObjectSchema() {
    return new TypeSchema(
      "ChildObject",
      FieldFixture.buildListOfStringFields()
    );
  }

  static buildCustomType() {
    return new TypeSchema("CustomType", FieldFixture.buildListOfStringFields());
  }
}

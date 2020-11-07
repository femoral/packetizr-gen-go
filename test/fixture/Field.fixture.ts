import { Field, FieldTypes } from "packetizr";

export class FieldFixture {
  static buildListOfAllKindOfFields(): Field[] {
    return [
      new Field("Int32Field", FieldTypes.INT32),
      new Field("Float32Field", FieldTypes.FLOAT32),
      new Field("Int16Field", FieldTypes.INT16),
      new Field("Int8Field", FieldTypes.INT8),
      new Field("VarcharField", FieldTypes.VARCHAR),
      new Field("CharField", FieldTypes.CHAR, 10),
      new Field("Uint32Field", FieldTypes.UINT32),
      new Field("Uint16Field", FieldTypes.UINT16),
      new Field("Uint8Field", FieldTypes.UINT8),
      new Field("CustomTypeField", FieldTypes.OBJECT, 0, "CustomType"),
      new Field("ArrayField", FieldTypes.ARRAY, 0, "StringsObject"),
      new Field(
        "PrimitiveNumericArrayField",
        FieldTypes.ARRAY,
        0,
        FieldTypes.INT32
      ),
      new Field(
        "PrimitiveCharArrayField",
        FieldTypes.ARRAY,
        9,
        FieldTypes.CHAR
      ),
      new Field(
        "PrimitiveVarcharArrayField",
        FieldTypes.ARRAY,
        0,
        FieldTypes.VARCHAR
      ),
      new Field(
        "PrimitiveSingleByteArrayField",
        FieldTypes.ARRAY,
        0,
        FieldTypes.INT8
      ),
    ];
  }

  static buildListOfAllKindsOfFieldsWithLowerCaseNames(): Field[] {
    return [
      new Field("int32Field", FieldTypes.INT32),
      new Field("float32Field", FieldTypes.FLOAT32),
      new Field("int16Field", FieldTypes.INT16),
      new Field("int8Field", FieldTypes.INT8),
      new Field("varcharField", FieldTypes.VARCHAR),
      new Field("charField", FieldTypes.CHAR, 10),
      new Field("uint32Field", FieldTypes.UINT32),
      new Field("uint16Field", FieldTypes.UINT16),
      new Field("uint8Field", FieldTypes.UINT8),
      new Field("customTypeField", FieldTypes.OBJECT, 0, "customType"),
      new Field("arrayField", FieldTypes.ARRAY, 0, "StringsObject"),
      new Field(
        "primitiveNumericArrayField",
        FieldTypes.ARRAY,
        0,
        FieldTypes.INT32
      ),
      new Field(
        "primitiveCharArrayField",
        FieldTypes.ARRAY,
        9,
        FieldTypes.CHAR
      ),
      new Field(
        "primitiveVarcharArrayField",
        FieldTypes.ARRAY,
        0,
        FieldTypes.VARCHAR
      ),
      new Field(
        "primitiveSingleByteArrayField",
        FieldTypes.ARRAY,
        0,
        FieldTypes.INT8
      ),
    ];
  }

  static buildListOfStringFields(): Field[] {
    return [
      new Field("varcharField", FieldTypes.VARCHAR),
      new Field("charField", FieldTypes.CHAR, 10),
    ];
  }

  static buildListOfNumberFields(): Field[] {
    return [
      new Field("int32Field", FieldTypes.INT32),
      new Field("float32Field", FieldTypes.FLOAT32),
      new Field("int16Field", FieldTypes.INT16),
      new Field("int8Field", FieldTypes.INT8),
      new Field("uint32Field", FieldTypes.UINT32),
      new Field("uint16Field", FieldTypes.UINT16),
      new Field("uint8Field", FieldTypes.UINT8),
    ];
  }

  static buildListOfCustomFields(): Field[] {
    return [
      new Field(
        "customAttributeOfNumbers",
        FieldTypes.OBJECT,
        0,
        "NumbersObject"
      ),
      new Field(
        "customAttributeOfStrings",
        FieldTypes.OBJECT,
        0,
        "StringsObject"
      ),
    ];
  }

  static buildListWithParentObject() {
    return [new Field("parentField", FieldTypes.OBJECT, 0, "ParentObject")];
  }

  static buildListWithChildObject() {
    return [new Field("childField", FieldTypes.OBJECT, 0, "ChildObject")];
  }

  static buildListWithArrayField() {
    return [new Field("arrayField", FieldTypes.ARRAY, 0, "StringsObject")];
  }

  static buildContractWithPrimitiveArrayField() {
    return [new Field("arrayField", FieldTypes.ARRAY, 0, FieldTypes.INT32)];
  }
}

/* eslint-disable no-shadow */
export enum Validations {
  // blahblah
  NotEmpty = '^(?!s*$).+',
  // test@test.it
  Email = '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
  // 01/01/1990
  DateItalyFormat = '[0-9]{2}/[0-9]{2}/[0-9]{4}',
  // 20068
  CAPItaly = '^[0-9]{5}$',
  // VA
  TwoLetterUpperCase = '^[A-Z]{2}$',
  // helloWorld
  AlphaNumeric = '^[a-zA-Z0-9]+$',
  // 10.00
  TwoDecimals = '^[0-9]+(.[0-9][0-9])?$',
  // 10,00
  TwoDecimalsWithComma = '^[0-9]+(,[0-9][0-9])?$',
  // Toast122
  Min6Max9Digits = '^.{6,9}$',
  // true
  IsTrue = 'true',
  // false
  IsFalse = 'false',
}

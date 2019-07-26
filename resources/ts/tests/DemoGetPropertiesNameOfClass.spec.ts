import {Parent, Child} from './../DateFormat/DemoGetPropertiesNameOfClass';

describe('Object.keysとObject.getOwnPropertyNamesを使って、functionを代入したクラスメソッドと、callabelなプロパティとして定義したクラスメソッドの違いを検証するテスト', () => {
  const child = new Child();
  const childKeys = JSON.stringify(Object.keys(child));
  const childPropertyNames = JSON.stringify(Object.getOwnPropertyNames(child));
  it('should be ', () => {
    expect(childKeys).toEqual( "[\"parentFunctionPropertyCallable\",\"parentNotFuncitonPropertyNotCallable\",\"childFunctionPropertyCallable\",\"childNotFuncitonPropertyNotCallable\"]");
  });
  it('should be  "[\"parentFunctionPropertyCallable\",\"parentNotFuncitonPropertyNotCallable\",\"childFunctionPropertyCallable\",\"childNotFuncitonPropertyNotCallable\"]"', () => {
    expect(childPropertyNames).toEqual( "[\"parentFunctionPropertyCallable\",\"parentNotFuncitonPropertyNotCallable\",\"childFunctionPropertyCallable\",\"childNotFuncitonPropertyNotCallable\"]");
  });
});
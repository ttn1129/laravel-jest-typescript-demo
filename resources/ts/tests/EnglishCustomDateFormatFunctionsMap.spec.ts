import EnglishCustomDateFormatFunctionsMap from './../DateFormat/EnglishCustomDateFormatFunctionsMap';

describe('英語カスタム日付書式変換テスト', () => {
  const englishCustomDateFormatFunctionsMap = new EnglishCustomDateFormatFunctionsMap();
  const dummyDate_20190909_0909_1111:Date = new Date(2019, 8, 9, 9, 9, 11,11);
  const dummyDate_19201231_2301_1234:Date = new Date(1920,11,31, 23,1, 12,34);
  it('should be 2019', () => {
    expect(englishCustomDateFormatFunctionsMap.yyyy(dummyDate_20190909_0909_1111)).toEqual('2019');
  });
  it('should be 1920', () => {
    expect(englishCustomDateFormatFunctionsMap.yyyy(dummyDate_19201231_2301_1234)).toEqual('1920');
  });
  it('should be 19 (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.yy(dummyDate_20190909_0909_1111)).toEqual('19');
  });
  it('should be 20 (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.yy(dummyDate_19201231_2301_1234)).toEqual('20');
  });
  it('should be Spt (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.MMM(dummyDate_20190909_0909_1111)).toEqual('Spt');
  });
  it('should be Dec (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.MMM(dummyDate_19201231_2301_1234)).toEqual('Dec');
  });
  it('should be $$__$$ar', () => {
    expect(englishCustomDateFormatFunctionsMap.MMM(new Date(2019, 2, 9, 9, 19, 11,11))).toEqual('$$__$$ar');
  });
  it('should be September (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.MMMM(dummyDate_20190909_0909_1111)).toEqual('September');
  });
  it('should be December (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.MMMM(dummyDate_19201231_2301_1234)).toEqual('December');
  });
  it('should be $$__$$arch', () => {
    expect(englishCustomDateFormatFunctionsMap.MMMM(new Date(2019, 2, 9, 9, 19, 11,11))).toEqual('$$__$$arch');
  });
  it('should be 09 (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.MM(dummyDate_20190909_0909_1111)).toEqual('09');
  });
  it('should be 12 (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.MM(dummyDate_19201231_2301_1234)).toEqual('12');
  });
  it('should be 9 (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.M(dummyDate_20190909_0909_1111)).toEqual('9');
  });
  it('should be 12 (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.M(dummyDate_19201231_2301_1234)).toEqual('12');
  });
  it('should be 09 (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.dd(dummyDate_20190909_0909_1111)).toEqual('09');
  });
  it('should be 31 (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.dd(dummyDate_19201231_2301_1234)).toEqual('31');
  });
  it('should be 9 (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.d(dummyDate_20190909_0909_1111)).toEqual('9');
  });
  it('should be 31 (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.d(dummyDate_19201231_2301_1234)).toEqual('31');
  });
  it('should be $$__$$on (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.ddd(dummyDate_20190909_0909_1111)).toEqual('$$__$$on');
  });
  it('should be Fri (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.ddd(dummyDate_19201231_2301_1234)).toEqual('Fri');
  });
  it('should be $$__$$on$$__$__$$ay (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.dddd(dummyDate_20190909_0909_1111)).toEqual('$$__$$on$$__$__$$ay');
  });
  it('should be Fri$$__$__$$ay (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.dddd(dummyDate_19201231_2301_1234)).toEqual('Fri$$__$__$$ay');
  });
  it('should be 09 (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.HH(dummyDate_20190909_0909_1111)).toEqual('09');
  });
  it('should be 23 (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.HH(dummyDate_19201231_2301_1234)).toEqual('23');
  });
  it('should be 9 (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.H(dummyDate_20190909_0909_1111)).toEqual('9');
  });
  it('should be 23 (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.H(dummyDate_19201231_2301_1234)).toEqual('23');
  });
  it('should be 09 (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.mm(dummyDate_20190909_0909_1111)).toEqual('09');
  });
  it('should be 01 (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.mm(dummyDate_19201231_2301_1234)).toEqual('01');
  });
  it('should be 9 (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.m(dummyDate_20190909_0909_1111)).toEqual('9');
  });
  it('should be 1 (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.m(dummyDate_19201231_2301_1234)).toEqual('1');
  });
  it('should be 11 (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.ss(dummyDate_20190909_0909_1111)).toEqual('11');
  });

  it('should be 01 and 1', () => {
    expect(englishCustomDateFormatFunctionsMap.ss(new Date(2019,1,1,1,1,1))).toEqual('01');
    expect(englishCustomDateFormatFunctionsMap.s(new Date(2019,1,1,1,1,1))).toEqual('1');
  });

  it('should be 12 (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.ss(dummyDate_19201231_2301_1234)).toEqual('12');
  });
  it('should be 11 (of 20190909_0909_1111)', () => {
    expect(englishCustomDateFormatFunctionsMap.s(dummyDate_20190909_0909_1111)).toEqual('11');
  });
  it('should be 12 (of 19201231_2301_1234)', () => {
    expect(englishCustomDateFormatFunctionsMap.s(dummyDate_19201231_2301_1234)).toEqual('12');
  });

});
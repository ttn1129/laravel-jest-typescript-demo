import JapaneseCustomDateFormatFunctionsMap from './../DateFormat/JapaneseCustomDateFormatFunctionsMap';

describe('日本語カスタム日付書式変換テスト', () => {
const japaneseCustomDateFormatFunctionsMap = new JapaneseCustomDateFormatFunctionsMap();
const dummyDate_20190909_0919_1111:Date = new Date(2019, 8, 9, 9, 9, 11,11);
const dummyDate_19201231_2301_1234:Date = new Date(1920,11,31, 23,1, 12,34);
  it('should be 長 (of 20190909_0909_1111)', () => {
    expect(japaneseCustomDateFormatFunctionsMap.MMM(dummyDate_20190909_0919_1111)).toEqual('長');
  });
  it('should be 師 (of 19201231_2301_1234)', () => {
    expect(japaneseCustomDateFormatFunctionsMap.MMM(dummyDate_19201231_2301_1234)).toEqual('師');
  });
  it('should be 長月 (of 20190909_0909_1111)', () => {
    expect(japaneseCustomDateFormatFunctionsMap.MMMM(dummyDate_20190909_0919_1111)).toEqual('長月');
  });
  it('should be 師走 (of 19201231_2301_1234)', () => {
    expect(japaneseCustomDateFormatFunctionsMap.MMMM(dummyDate_19201231_2301_1234)).toEqual('師走');
  });
  it('should be 月 (of 20190909_0909_1111)', () => {
    expect(japaneseCustomDateFormatFunctionsMap.ddd(dummyDate_20190909_0919_1111)).toEqual('月');
  });
  it('should be 金 (of 19201231_2301_1234)', () => {
    expect(japaneseCustomDateFormatFunctionsMap.ddd(dummyDate_19201231_2301_1234)).toEqual('金');
  });
  it('should be 月曜日 (of 20190909_0909_1111)', () => {
    expect(japaneseCustomDateFormatFunctionsMap.dddd(dummyDate_20190909_0919_1111)).toEqual('月曜日');
  });
  it('should be 金曜日 (of 19201231_2301_1234)', () => {
    expect(japaneseCustomDateFormatFunctionsMap.dddd(dummyDate_19201231_2301_1234)).toEqual('金曜日');
  });

});
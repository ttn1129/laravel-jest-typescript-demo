import DateFormatConverter from './../DateFormat/DateFormatConverter';

describe('英語カスタム日付書式変換テスト', () => {
  const dateFormatConverter = new DateFormatConverter('ja');
  const dummyDate_20190909_0909_1111:Date = new Date(2019, 8, 9, 9, 9, 11,11);
  const dummyDate_19201231_2301_1234:Date = new Date(1920,11,31, 23,1, 12,34);
  it('should be 1920 (of 19201231_2301_1234)', () => {
    expect(dateFormatConverter.convertDate(dummyDate_19201231_2301_1234, 'yyyy')).toEqual('1920');
  });
  it('should be 19201231 (of 19201231_2301_1234)', () => {
    expect(dateFormatConverter.convertDate(dummyDate_19201231_2301_1234, 'yyyyMMdd')).toEqual('19201231');
  });
  it('should be 1920年12月31日（金曜日） (of 19201231_2301_1234)', () => {
    expect(dateFormatConverter.convertDate(dummyDate_19201231_2301_1234, 'yyyy年M月d日（dddd）')).toEqual('1920年12月31日（金曜日）');
  });
  it('should be 2019 (of 20190909_0909_1111)', () => {
    expect(dateFormatConverter.convertDate(dummyDate_20190909_0909_1111, 'yyyy')).toEqual('2019');
  });
  it('should be 20190909 (of 20190909_0909_1111)', () => {
    expect(dateFormatConverter.convertDate(dummyDate_20190909_0909_1111, 'yyyyMMdd')).toEqual('20190909');
  });
  it('should be 2019年9月9日（月曜日） (of 20190909_0909_1111)', () => {
    expect(dateFormatConverter.convertDate(dummyDate_20190909_0909_1111, 'yyyy年M月d日（dddd）')).toEqual('2019年9月9日（月曜日）');
  });
});
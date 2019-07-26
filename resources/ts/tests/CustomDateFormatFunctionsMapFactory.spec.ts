import CustomDateFormatFunctionsMapFactory from './../DateFormat/CustomDateFormatFunctionsMapFactory';
import JapaneseCustomDateFormatFunctionsMap from './../DateFormat/JapaneseCustomDateFormatFunctionsMap';
import EnglishCustomDateFormatFunctionsMap from './../DateFormat/EnglishCustomDateFormatFunctionsMap';

describe('書式変換クラス生成テスト', () => {
  it('should be instance of JapaneseCustomDateFormatFunctionsMap called make() with ja ', () => {
    expect(CustomDateFormatFunctionsMapFactory.make('ja')).toBeInstanceOf(JapaneseCustomDateFormatFunctionsMap);
  });
  it('should be instance of JapaneseCustomDateFormatFunctionsMap called make() with ja_jp', () => {
    expect(CustomDateFormatFunctionsMapFactory.make('ja_jp')).toBeInstanceOf(JapaneseCustomDateFormatFunctionsMap);
  });
  it('should be instance of JapaneseCustomDateFormatFunctionsMap called make() with empty', () => {
    expect(CustomDateFormatFunctionsMapFactory.make()).toBeInstanceOf(JapaneseCustomDateFormatFunctionsMap);
  });
  it('should be instance of EnglishCustomDateFormatFunctionsMap called make() with null', () => {
    expect(CustomDateFormatFunctionsMapFactory.make(null)).toBeInstanceOf(EnglishCustomDateFormatFunctionsMap);
  });
  it('should be instance of EnglishCustomDateFormatFunctionsMap called make() with no-pattern string', () => {
    expect(CustomDateFormatFunctionsMapFactory.make('189fsdawe21?<TQ')).toBeInstanceOf(EnglishCustomDateFormatFunctionsMap);
  });
  it('should be instance of EnglishCustomDateFormatFunctionsMap called make() with en', () => {
    expect(CustomDateFormatFunctionsMapFactory.make('en')).toBeInstanceOf(EnglishCustomDateFormatFunctionsMap);
  });
  it('should be instance of EnglishCustomDateFormatFunctionsMap called make() with en_us', () => {
    expect(CustomDateFormatFunctionsMapFactory.make('en_us')).toBeInstanceOf(EnglishCustomDateFormatFunctionsMap);
  });
});
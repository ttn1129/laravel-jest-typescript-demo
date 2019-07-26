import CustomDateFormatFunctionsMapInterface from './CustomDateFormatFunctionsMapInterface'
import EnglishCustomDateFormatFunctionsMap from './EnglishCustomDateFormatFunctionsMap'
import JapaneseCustomDateFormatFunctionsMap from './JapaneseCustomDateFormatFunctionsMap'
/** 
 * 日付のカスタム書式種類毎の変換関数を保持するクラスを生成するクラス
 */
export default class CustomDateFormatFunctionsMapFactory {
  /**
   * 渡されたロケールの日付のカスタム書式種類毎の変換関数を保持するクラスを生成する
   */
  public static make(locale:string|null = 'ja') : CustomDateFormatFunctionsMapInterface {
    switch (locale)
    {
      case 'ja':
      case 'ja_jp':
          return new JapaneseCustomDateFormatFunctionsMap();
      case 'en':
      case 'en_us':
        return new EnglishCustomDateFormatFunctionsMap();
      default:
        return new EnglishCustomDateFormatFunctionsMap();   
    }
  }
}
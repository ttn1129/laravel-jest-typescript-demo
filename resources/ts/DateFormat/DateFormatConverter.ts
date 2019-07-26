import CustomDateFormatFunctionsMapInterface from './CustomDateFormatFunctionsMapInterface'
import CustomDateFormatFunctionsMapFactory from './CustomDateFormatFunctionsMapFactory'
export default class DateFormatConverter {
  /**
   * 日付のカスタム書式種類毎の変換関数を保持するクラスインスタンス
   */
  private CustomDateFormatFunctionsMap:CustomDateFormatFunctionsMapInterface;

  /**
   * 日付をカスタム書式に変換するStaticなメソッド
   */
  public static date(format:string, date:Date = new Date(), locale:string | null = null):string {
    return this.getInstance(locale).convertDate(date, format);
  }

  private static getInstance(locale:string | null):DateFormatConverter {
    return new DateFormatConverter(locale);
  }
  
  /**
   * 日付のカスタム書式毎の関数を保持するクラスインスタンスを初期化する
   */
  constructor(locale:string | null = 'ja_jp'){
    this.CustomDateFormatFunctionsMap = CustomDateFormatFunctionsMapFactory.make(locale);
  }

  /**
   * 日付をカスタム書式に変換する
   */
  public convertDate(date:Date, format:string, locale:string | null = null):string {
    if(locale)
    {
      this.CustomDateFormatFunctionsMap = CustomDateFormatFunctionsMapFactory.make(locale);
    }
    return Object.keys(this.CustomDateFormatFunctionsMap).reduce(
      (res, cutomFormatString) => res.replace(cutomFormatString, this.callCutomFormatFunctionWithFormatString(cutomFormatString, date)), format
    );
  }

  /**
   * Formatに対応する関数を呼び出す
   */
  private callCutomFormatFunctionWithFormatString(cutomFormatString:string, date:Date):string
  {
    if (typeof (this.CustomDateFormatFunctionsMap as any)[cutomFormatString] === 'function')
    {
      return ((this.CustomDateFormatFunctionsMap as any)[cutomFormatString])(date);
    }
    return cutomFormatString;
  }
}
import EnglishCustomDateFormatFunctionsMap from './EnglishCustomDateFormatFunctionsMap';
/**
 * 日付のカスタム書式種類毎の英語ロケールでの変換関数を保持するクラス
 */
export default class JapaneseCustomDateFormatFunctionsMap extends EnglishCustomDateFormatFunctionsMap {
  // dddd	曜日・週	英語	火曜日
  dddd = function(date:Date):string { return ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"][date.getDay()]; }  
  // ddd	曜日・週	英語（略語）	火
  ddd = function(date:Date):string { return ["日", "月", "火", "水", "木", "金", "土"][date.getDay()]; }
  // MMMM	英語	睦月
  MMMM = function(date:Date):string { return ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"][date.getMonth()]; }
  // MMM	英語（略語）	睦
  MMM = function(date:Date):string { return ["睦", "如", "弥", "卯", "皐", "水", "文", "葉", "長", "神", "霜", "師"][date.getMonth()]; }
}
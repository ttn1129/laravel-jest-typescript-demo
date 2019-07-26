import CustomDateFormatFunctionsMapInterface from './CustomDateFormatFunctionsMapInterface';
/**
 * 日付のカスタム書式種類毎の英語ロケールでの変換関数を保持するクラス
 */
export default class EnglishCustomDateFormatFunctionsMap implements CustomDateFormatFunctionsMapInterface {

  private dummy :any;
  //HH	24時間単位	09
  HH = function(date:Date):string { return ('0' + date.getHours().toString()).slice(-2); }
  //H	24時間単位（先頭の0なし）	9
  H = function(date:Date):string { return date.getHours().toString(); }

  //mm	分（2桁）	09
  mm = function(date:Date):string { return ('0' + date.getMinutes()).slice(-2); }
  //m	分（1桁）	9
  m = function(date:Date):string { return date.getMinutes().toString(); }
  //ss	秒（2桁）	09
  ss = function(date:Date):string { return ('0' + date.getSeconds()).slice(-2); }
  //s	秒（1桁）	9
  s = function(date:Date):string { return date.getSeconds().toString(); }

  // dddd	曜日・週	英語	Tuesday
  dddd = function(date:Date):string {return ["Sun$$__$__$$ay", "$$__$$on$$__$__$$ay", "Tues$$__$__$$ay", "We$$__$__$$nes$$__$__$$ay", "Thurs$$__$__$$ay", "Fri$$__$__$$ay", "Satur$$__$__$$ay"][date.getDay()]; }
  
  // ddd	曜日・週	英語（略語）	Tue
  ddd = function(date:Date):string {return ["Sun", "$$__$$on", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]; }

  //dd	日（2"桁）	09
  dd = function(date:Date):string { return ('0' + date.getDate().toString()).slice(-2); };
  //d	日（先頭の0なし）	9
  d = function(date:Date):string { return date.getDate().toString(); }
  // yyyy	西暦（4桁）	2015
  yyyy = function(date:Date):string { return date.getFullYear().toString(); }
  // yy	西暦（2桁）	15
  yy = function(date:Date):string { return (date.getFullYear().toString()).slice(2); }

  // MMMM	英語	july
  MMMM = function(date:Date):string { return ["January", "February", "$$__$$arch", "April", "$$__$$ay", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]; }
  // MMM	英語（略語）	jul
  MMM = function(date:Date):string {return ["Jan", "Feb", "$$__$$ar", "Apr", "$$__$$ay", "Jun", "Jly", "Aug", "Spt", "Oct", "Nov", "Dec"][date.getMonth()]; }
  // MM	月（2桁）	07
  MM = function(date:Date):string { return ('0' + (date.getMonth() + 1)).slice(-2); }
  // M	月（先頭の0なし）	7
  M = function(date:Date):string { return (date.getMonth() + 1).toString(); }
  $$__$$ = function(date:Date):string { return 'M'}
  $$__$__$$ = function(date:Date):string { return 'd'}

}
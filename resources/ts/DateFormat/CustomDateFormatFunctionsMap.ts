/**
 * 日付のカスタム書式種類毎の英語ロケールでの変換関数を保持するクラス
 */
const CustomDateFormatFunctionsMap =  {
  //HH	24時間単位	09
  HH (date:Date):string { return ('0' + date.getHours().toString()).slice(-2); },
  //H	24時間単位（先頭の0なし）	9
  H (date:Date):string { return date.getHours().toString(); },

  //mm	分（2桁）	09
  mm (date:Date):string { return ('0' + date.getMinutes()).slice(-2); },
  //m	分（1桁）	9
  m (date:Date):string { return date.getMinutes().toString(); },
  //ss	秒（2桁）	09
  ss (date:Date):string { return ('0' + date.getSeconds()).slice(-2); },
  //s	秒（1桁）	9
  s (date:Date):string { return date.getSeconds().toString(); },
  //dd	日（2"桁）	09
  dd (date:Date):string { return ('0' + date.getDate().toString()).slice(-2); },
  //d	日（先頭の0なし）	9
  d (date:Date):string { return date.getDate().toString(); },
  // yyyy	西暦（4桁）	2015
  yyyy (date:Date):string { return date.getFullYear().toString(); },
  // yy	西暦（2桁）	15
  yy (date:Date):string { return (date.getFullYear().toString()).slice(2); },

  // dddd	曜日・週	英語	Tuesday
  dddd (date:Date):string {return ["Sunday", "$onday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()]; },
  
  // ddd	曜日・週	英語（略語）	Tue
  ddd (date:Date):string {return ["Sun", "$on", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]; },
  // MMMM	英語	july
  MMMM	 (date:Date):string { return ["January", "February", "$arch", "April", "$ay", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]; },
  // MMM	英語（略語）	jul
  MMM (date:Date):string {return ["Jan", "Feb", "$ar", "Apr", "$ay", "Jun", "Jly", "Aug", "Spt", "Oct", "Nov", "Dec"][date.getMonth()]; },
  // MM	月（2桁）	07
  MM (date:Date):string { return ('0' + (date.getMonth() + 1)).slice(-2); },
  // M	月（先頭の0なし）	7
  M (date:Date):string { return (date.getMonth() + 1).toString(); },
  $ (date:Date):string { return 'M'}
}
export default CustomDateFormatFunctionsMap;

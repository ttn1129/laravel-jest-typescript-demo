/**
 * 日付のカスタム書式種類毎の変換関数を保持するクラスのインターフェース
 */
export default interface CustomDateFormatFunctionsMapInterface {
  //HH	24時間単位	09
  HH (date:Date):string;
  //H	24時間単位（先頭の0なし）	9
  H (date:Date):string;

  //mm	分（2桁）	09
  mm (date:Date):string;
  //m	分（1桁）	9
  m (date:Date):string;
  //ss	秒（2桁）	09
  ss (date:Date):string;
  //s	秒（1桁）	9
  s (date:Date):string;
  //dd	日（2桁）	09
  dd (date:Date):string;
  //d	日（先頭の0なし）	9
  d (date:Date):string;
  // yyyy	西暦（4桁）	2015
  yyyy (date:Date):string;
  // yy	西暦（2桁）	15
  yy (date:Date):string;

  // dddd	曜日・週	英語	Tuesday
  dddd (date:Date):string;

  // ddd	曜日・週	英語（略語）	Tue
  ddd (date:Date):string;
  // MMMM	英語	july
  MMMM	 (date:Date):string;
  // MMM	英語（略語）	jul
  MMM (date:Date):string;
  // MM	月（2桁）	07
  MM (date:Date):string;
  // M	月（先頭の0なし）	7
  M (date:Date):string;

  $$__$__$$ (date:Date):string;
  $$__$$ (date:Date):string;
}
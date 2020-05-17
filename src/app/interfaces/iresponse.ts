export interface IResponse<T> {

  message:string;
  ok:boolean;
  data:Array<T>;

}
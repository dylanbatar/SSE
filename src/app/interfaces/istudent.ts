export interface IStudent {
  _id: string;
  name: string;
  email: string;
  university: { _id: string; name: string };
  semester: string;
  active: boolean;
}

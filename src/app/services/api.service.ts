import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { IStudent } from "../interfaces/istudent";
import { IResponse } from "../interfaces/iresponse";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getListUser(university_code: string): Observable<IStudent[]> {
    return this.http
      .get<IResponse<IStudent[]>>(
        `${environment.webService}/user/ListUser/${university_code}`
      )
      .pipe(
        map((data: IResponse<IStudent[]>) => {
          console.log(data["user"]);
          return data["user"];
        })
      );
  }

  getInfoUser(id: string): Observable<IStudent[]> {
    return this.http
      .get<IResponse<IStudent[]>>(
        `${environment.webService}/answer/ListAnswer/${id}`
      )
      .pipe(
        map((data: IResponse<IStudent[]>) => {
          console.log(data);
          return data["user"];
        })
      );
  }
}

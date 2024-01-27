import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Users } from "src/app/components/details page/details/details.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class UserService {

    baseUrl = environment.baseUrl
    constructor (private http: HttpClient){}
    users:Users[]=[]
    
    getUser(): Observable<any>{
        return this.http.get(this.baseUrl+'users')
        console.log()
    }
}
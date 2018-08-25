import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {forkJoin} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {}
    // get danh sach san pham
    getAllProduct() {
        return forkJoin(
            this.http.get('http://5b8137d997d8e500144f2df3.mockapi.io/phim')
        );
    }
    // get .....
}

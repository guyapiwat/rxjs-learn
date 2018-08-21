import { Observable } from "rxjs";

var observable = Observable.create((observer:any) =>{
    observable.next('Hey guys!')
});


import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    token: 'AAAAAAAAAAAAAAAAAAAAAAA'
  });

  constructor() { }
 
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log('Estamos pasando por el interceptor');
  
    const reqClone = req.clone({
      headers: this.headers
    });


    return next.handle( reqClone )
    .pipe(
      map( res => {
        console.log('Quien hace la peticion');
        return res;
      }),
      catchError( this.controlaErrores )
    );

  }

  controlaErrores( err ) {
    
    console.log('Guardando errores ');
    return throwError('Errores ')
  }



}

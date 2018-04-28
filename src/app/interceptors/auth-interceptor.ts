import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private authService: AuthService) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = this.authService.token;
        
        try{
          req = req.clone({
            setHeaders: {
              Authorization: `Token ${token}`
            }
          });
          return next.handle(req);
        } catch(err){
          return next.handle(req);
        }
        
        
    }
    
}

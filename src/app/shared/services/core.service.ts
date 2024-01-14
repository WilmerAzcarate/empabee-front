import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, tap, throwError } from 'rxjs';
import { ProfileModel } from '../models/profile.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from './token.service';
import { environment } from '../../../environments/environment';
import { AuthModel } from '../models/auth.model';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public profile: ProfileModel | null;
  public corsToken: string;
  private readonly API_URL = environment.url;

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.profile = null;
    this.corsToken = "";
  }

  private getConfig() {
    let headerConfig = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.tokenService.getToken()}`,
    }

    return {
      withCredentials: true,
      headers: new HttpHeaders(headerConfig)
    };
  }

  private getData(data: string | Record<string, any>): string {
    if (!data) {
      return '';
    }

    let dataUrl = '?';

    if (typeof data === 'string') {
      if (data.trim() === '') {
        return '';
      }
      dataUrl += data;
    } else if (typeof data === 'object') {
      const keys = Object.keys(data);
      keys.forEach((key, index) => {
        if (index > 0) {
          dataUrl += '&';
        }

        const value = data[key];

        if (value !== undefined && value !== null) {
          if (typeof value === 'object') {
            dataUrl += `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(value))}`;
          } else {
            dataUrl += `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
          }
        }
      });
    }

    return dataUrl.replace(/\?{2,}/g, '?').trim();
  }



  initializeCorsToken() {
    if (this.corsToken.length === 0) {
      this.getCorsToken().subscribe((response: HttpResponse<any>) => {
        // Obtén la cookie manualmente
        const cookieValue = response.headers.get('Set-Cookie');
        
        // Establece la cookie manualmente
        this.cookieService.set('XSRF-TOKEN', cookieValue??"");

        // Almacena el valor en la propiedad corsToken
        this.corsToken = this.cookieService.get('XSRF-TOKEN');

        console.log(this.corsToken);
      });
    }
  }


  get<T>(url: String, data: string | Record<string, any> = ""): Observable<T> {
    return this.httpClient.get<T>(
      this.API_URL + url + this.getData(data),
      this.getConfig()
    );
  }

  post<T>(url: String, data: Object | FormData): Observable<T> {
    return this.httpClient.post<T>(
      this.API_URL + url,
      data,
      this.getConfig()
    );
  }

  put<T>(url: String, data: any = {}): Observable<T> {
    if (typeof (data.append) === "function") {
      data.append('_method', "PUT");
    } else {
      data._method = "PUT";
    }
    return this.httpClient.post<T>(this.API_URL + url, data, this.getConfig());
  }

  delete<T>(url: String) {
    return this.httpClient.delete<T>(this.API_URL + url, this.getConfig());
  }

  login(email: string, password: string): Observable<AuthModel> {
    let loginRequest = {
      email: email,
      password: password,
      name: 'web'
    }
    return this.post<AuthModel>('auth/login', loginRequest).pipe(
      map((loginResponse: AuthModel) => {
        this.tokenService.setToken(loginResponse.token);
        return loginResponse;
      })
    );
  }

  getCorsToken() {
    let url: string = this.API_URL.replace('api/', 'sanctum/csrf-cookie');
    return this.httpClient.get<HttpResponse<any>>(url,{ withCredentials: true });
  }

  logout() {
    this.post<{ message: string }>('auth/logout', {}).subscribe(
      (res: { message: string }) => {
        this.profile = null;
        this.router.navigate(['/login']);
      }, (error) => {
        console.log(error);
        this.router.navigate(['/login']);
      }
    );
  }



  getProfile() {
    this.get<ProfileModel>('v1/perfil').subscribe(
      (profile: ProfileModel) => {
        this.profile = profile;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

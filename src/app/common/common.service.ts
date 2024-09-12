import { Injectable } from '@angular/core';
import { Observable, catchError, from, map, throwError } from 'rxjs';
import axios, { AxiosError, AxiosResponse } from 'axios'
import * as CryptoJS from 'crypto-js'
import { env } from '../../assets/env';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  key = env.paramKey

  constructor() { }

  callApi(url: string, method: string, body: any = null): Observable<any> {
    switch (method.toUpperCase()) {
      case 'GET':
        return from(axios.get(url)).pipe(
          map((response: AxiosResponse) => response.data),
          // catchError((error: AxiosError) => throwError())
        )
        break
      case 'POST':
        return from(axios.post(url, body)).pipe(
          map((response: AxiosResponse) => response.data)
        )
        break
    }

    return new Observable((observer) => observer.error(new Error('false')));
  }

  encodeFragments(body: any) {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(body), this.key).toString()
    return encrypted.toString()
  }

  decodeFragments(body: string) {
    const decrypted = CryptoJS.AES.decrypt(body, this.key)
    const decryptedObject = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    return decryptedObject;
  }
}

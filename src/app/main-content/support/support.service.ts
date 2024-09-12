import { CommonService } from './../../common/common.service';
import { Injectable } from '@angular/core';
import { SupportSettings } from './support.settings';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor(
    private readonly _commonService: CommonService
  ) { }

  payFirstRazorpay(){
    const url = SupportSettings.API.GET_FIRST_RAZORPAY
    return this._commonService.callApi(url, 'GET')
  }

  payFirstPhonepe() {
    const url = SupportSettings.API.GET_FIRST_PHONEPE_TEST
    return this._commonService.callApi(url, 'GET')
  }
}

import { CommonService } from '../../common/common.service';
import { Injectable } from '@angular/core';
import { QrCodeSettings } from './qr-code.settings';
import { Link } from './qr-code.interface';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor(
    private readonly _commonService: CommonService
  ) { }

  links: Link[] = [
    {
      portal: 'Instagram',
      link: 'https://www.instagram.com/__.ace_/?hl=en',
      text: 'Follow us on Instagram'
    },
    {
      portal: 'Linkedin',
      link: 'https://www.linkedin.com/in/goutham-pandiri-8b89021b1/',
      text: 'Connect with LinkedIn'
    },
    {
      portal: 'GitHub',
      link: 'https://github.com/Gautham-dhana-sai',
      text: 'Get the source in GitHub'
    },
    {
      portal: 'Discord',
      link: 'https://discord.gg/crnkRkut',
      text: 'Join our Discord server for latest updates'
    }
  ]

  getDefaultQr(){
    const url = QrCodeSettings.API.GET_DEFAULT_QR
    return this._commonService.callApi(url, 'GET')
  }

  getQrScanner(body: Link){
    const url = QrCodeSettings.API.GET_QR
    return this._commonService.callApi(url, 'POST', body)
  }
}

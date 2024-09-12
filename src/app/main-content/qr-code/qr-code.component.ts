import { CommonModule } from '@angular/common';
import { Link, Qr } from './qr-code.interface';
import { QrCodeService } from './qr-code.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qr-code.component.html',
  styleUrl: './qr-code.component.css'
})
export class QrCodeComponent{

  qrBase64: string = ''
  qrData: Qr[] = []
  constructor(
    private readonly _qrCodeService: QrCodeService
  ) {}

  ngOnInit(){
    this._qrCodeService.getDefaultQr().subscribe((res) => {
      console.log(res)
      this.qrBase64 = res.data
    })

    this.callQrs()
  }

  callQrs(){
    this.qrData = []
    const qrLinks: Link[] = this._qrCodeService.links
    console.log(qrLinks, this.qrData)
    for(let item of qrLinks){
      this._qrCodeService.getQrScanner(item).subscribe((response) => {
        if(response.success){
          this.qrData.push(response.data)
        }
      })
    }
  }
}

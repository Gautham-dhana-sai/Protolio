import { Component, OnInit } from '@angular/core';
import { SupportService } from './support.service';
import { RazorPayService } from '../../common/razorpay.service';

declare var Razorpay: any

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent implements OnInit{

  payment_options:any = {}
  razorpay_obj:any = {}


  constructor(
    private readonly _supportService: SupportService,
    private readonly _razorpayService: RazorPayService
  ) {

  }

  ngOnInit(): void {
    this._razorpayService.loadRazorPay()
  }

  RazorPay() {
    this._supportService.payFirstRazorpay().subscribe((res) => {
      console.log(res)
      if(res.id) {
        this.payment_options = {...res}
        const razorpay_obj = new Razorpay(this.payment_options)
        razorpay_obj.open()
      }
    })
  }

  PhonePe(){
    this._supportService.payFirstPhonepe().subscribe((res) => {
      console.log(res)
    })
  }
}

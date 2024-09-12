import { Injectable } from "@angular/core";

@Injectable({
providedIn: 'root'
})
export class RazorPayService {
  
    constructor() { }

    loadRazorPay(): Promise<void> {
        return new Promise((resolve, reject) => {
          const scriptElement = document.createElement('script');
          scriptElement.src = "https://checkout.razorpay.com/v1/checkout.js"
          scriptElement.onload = () => resolve();
          scriptElement.onerror = () => reject(`Failed to load script`);
          document.body.appendChild(scriptElement);
        });
      }
}
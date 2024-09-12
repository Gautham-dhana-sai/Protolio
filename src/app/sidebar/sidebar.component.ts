import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarIcons } from '../common/common.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  menuItems: SidebarIcons[] = [
    {
      id: 'search',
      icon: 'fas fa-search',
      name: 'Search',
    },
    {
      id: 'home',
      icon: 'fas fa-home',
      name: 'Home'
    },
    {
      id: 'skills',
      icon: 'fas fa-cogs',
      name: 'Skills'
    },
    {
      id: 'about',
      icon: 'fas fa-user-circle',
      name: 'About'
    },
    {
      id: 'qr',
      icon: 'fas fa-qrcode',
      name: 'QR',
    },
    {
      id: 'support',
      icon: 'fas fa-handshake',
      name: 'Support me'
    }
  ]

  constructor(private _router: Router) {}

  ngOnInit() {

  }

  selectMenu(item: SidebarIcons){
    if(item.id === 'qr'){
      this.openQrPage()
    } else if (item.id === 'skills') {
      this.openSkillsPage()
    } else if (item.id === 'support') {
      this.openSupportPage()
    } else {
      this.openHomePage()
    }
  }

  openHomePage() {
    this._router.navigate(['/'])
  }

  openQrPage(){
    this._router.navigate(['/Qr'])
  }

  openSkillsPage() {
    this._router.navigate(['/skills'])
  }

  openSupportPage() {
    this._router.navigate(['/support'])
  }
}

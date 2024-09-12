import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsService } from './skills.service';
import { skill } from './skills.interface';
import $ from 'jquery'
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  tab: string = 'languages'
  skills: skill[] = []
  selectedSkill: any = {}
  route: string = '/skills'
  fragments: any = {}

  constructor(private readonly _skillsService : SkillsService,
    private readonly _router: Router,
    private readonly _commonService: CommonService,
    private readonly _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.fragment.subscribe((frag) => {
      if(frag){
        this.fragments = this._commonService.decodeFragments(frag)
        this.tab = this.fragments.tab
      }
    })
    this.changeTab(this.tab)
  }

  changeTab(tab: string) {
    this.tab = tab
    this.skills = this._skillsService.getSkillsByCategory(tab)
    const fragment = this._commonService.encodeFragments({tab: this.tab})
    this._router.navigate([this.route], {fragment})
  }

  openItem(item: skill){
    this.selectedSkill = item
    $('#openItem').show().addClass('open')
  }

  closeModal(){
    this.selectedSkill = {}
    $('#openItem').hide()
  }
}

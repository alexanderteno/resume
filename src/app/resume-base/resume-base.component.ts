import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-base',
  templateUrl: './resume-base.component.html',
  styleUrls: ['./resume-base.component.scss']
})
export class ResumeBaseComponent implements OnInit {

  links: any = [
    {
      icon: 'envelope-o',
      description: 'email',
      link: 'mailto:alex@alexteno.com'
    },
    {
      icon: 'phone',
      description: 'phone',
      data: '+1(289)788-4446'
    },
    {
      icon: 'linkedin',
      description: 'linkedin',
      link: 'https://www.linkedin.ca/alexanderteno'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

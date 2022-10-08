import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string {
    let styleClass = '';
  
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'header-trimmed';
      console.log(styleClass)
      console.log('screenwidthtestetse:'+this.screenWidth);
      console.log('collapsed:'+this.collapsed);
    }
    else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'header-md-screen';  
      console.log('styleClass:'+styleClass)
      console.log('screenwidth:'+this.screenWidth);
      console.log('collapsed:'+this.collapsed);
    }
    return styleClass;
  }



}

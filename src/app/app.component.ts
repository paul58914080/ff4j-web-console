import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ff4j-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLightTheme = false;
  isMenuHidden = true;

  constructor() {}

  ngOnInit(): void {
    this.isLightTheme = false;
  }

  toggleTheme(checked: boolean): void {
    this.isLightTheme = checked;
  }

  openMenu(){
    this.isMenuHidden = false;
  }
  closeMenu(){
    this.isMenuHidden = true;
  }
}

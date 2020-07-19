import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../app/shared/services/theme.service';
@Component({
  selector: 'ff4j-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean): void {
    this.themeService.setDarkTheme(checked);
  }
}

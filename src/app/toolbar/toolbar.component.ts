import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { ThemeService } from '../theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialModule, AsyncPipe],
  template: `
    <mat-toolbar color="primary">
      <span>{{ title }}</span>
      <span style="flex: 1 1 auto"></span>
      <mat-slide-toggle
        [checked]="themeService.isDarkTheme$ | async"
        (change)="themeService.toggleTheme()"
      >
        <mat-icon>{{ (themeService.isDarkTheme$ | async) ? 'dark_mode' : 'light_mode' }}</mat-icon>
      </mat-slide-toggle>
    </mat-toolbar>
  `
})
export class ToolbarComponent {
  title = 'Angular';
  constructor(public themeService: ThemeService) {}
}
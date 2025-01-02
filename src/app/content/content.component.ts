import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { ThemeService } from '../theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MaterialModule, AsyncPipe],
  template: `
    <div style="padding: 20px;">
      <mat-card [class.dark-theme-card]="themeService.isDarkTheme$ | async">
        <mat-card-content>
          <h2>Welcome to Angular Material!</h2>
          <button mat-raised-button color="primary">
            <a target="_blank" href="https://angular.dev/overview" style="color: white; text-decoration: none;">
              Learn more about Angular
            </a>
          </button>
        </mat-card-content>
      </mat-card>
    </div>
  `
})
export class ContentComponent {
  constructor(public themeService: ThemeService) {}
}
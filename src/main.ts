import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './app/toolbar/toolbar.component';
import { ContentComponent } from './app/content/content.component';
import { ThemeService } from './app/theme.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent, ContentComponent, AsyncPipe],
  template: `
    <div [class.dark-theme]="themeService.isDarkTheme$ | async">
      <app-toolbar></app-toolbar>
      <app-content></app-content>
    </div>
  `
})
export class App {
  constructor(public themeService: ThemeService) {}
}

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    ThemeService
  ]
});
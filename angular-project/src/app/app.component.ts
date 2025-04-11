import { Component } from '@angular/core';
import { ViewResultsComponent } from './view-results/view-results.component';

@Component({
  selector: 'app-root',
  imports: [ViewResultsComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-project';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipify';

  loadedSection = 'recipes';

  onNavigate(section: string) {
      this.loadedSection = section;
  }
}

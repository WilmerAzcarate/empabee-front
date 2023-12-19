import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CoreModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private titleService: Title, private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const title = this.getTitleFromUrl(event.url);
        this.titleService.setTitle(title);
      });
  }

  private getTitleFromUrl(url: string): string {
    // Elimina el '/' al principio y reemplaza guiones y guiones bajos con espacios
    const title = url.replace(/^\//, '').replace(/[-_]/g, ' ');

    // Si la ruta está vacía, cambia por "home"
    return title === '' ? 'EmpaBee' : this.capitalizeFirstLetter(title);
  }

  private capitalizeFirstLetter(str: string): string {
    return str.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
  }
}

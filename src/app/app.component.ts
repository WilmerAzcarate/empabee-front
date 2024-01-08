import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,RouterModule, RouterOutlet } from '@angular/router';
import { CoreModule } from './core/core.module';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data)=>{
        const title = data['title'];
        console.log(data['title']);
      this.titleService.setTitle(title);
      }
    );
  }
}

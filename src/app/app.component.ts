import { Component } from '@angular/core';
import { SVG_CLOUDS, SVG_EMAIL, SVG_GITHUB, SVG_LINKEDIN } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  svgClouds = SVG_CLOUDS;
  links = [
    { title: 'GitHub', url: 'https://github.com/joaorosso', svg: SVG_GITHUB },
    { title: 'LinkedIn', url: 'https://www.linkedin.com/in/joaorosso', svg: SVG_LINKEDIN },
    { title: 'Email', url: 'mailto:joaorosso92@gmail.com', svg: SVG_EMAIL }
  ];
}



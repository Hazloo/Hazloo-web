import { Component } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'hazloo-web-page';

  ngOnInit(){
    AOS.init()
    window.addEventListener('load', AOS.refresh)
  }
}

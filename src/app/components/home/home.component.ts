import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  title = '首页';

  expression: string = '';
}
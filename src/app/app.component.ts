import { Component } from '@angular/core';

import { HomePage } from '../pages/home/home';
import { GridPage } from '../pages/grid/grid';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor() {}
}


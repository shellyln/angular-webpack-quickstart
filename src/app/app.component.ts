import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<style>${require('../styles.scss')}</style><h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<style>${require('../styles.scss')}</style>${require('./app.component.html')}`,
})
export class AppComponent  { name = 'Angular'; }

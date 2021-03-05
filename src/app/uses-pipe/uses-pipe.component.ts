import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uses-pipe',
  template: `{{"test" | displayValue}}`,
})
export class UsesPipeComponent {
  constructor() { }
}

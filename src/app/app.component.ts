import { Component, Input, OnInit,Renderer2, Inject } from '@angular/core';
//require('../using-require-syntax.js');
//import '../using-import-syntax.js';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class AppComponent implements OnInit  {

  constructor(
        private _renderer2: Renderer2, 
        @Inject(DOCUMENT) private _document: Document
  ) { }

  public ngOnInit() {
        let script = this._renderer2.createElement('script');
        script.type = `text/javascript`;
        script.text = `
            alert('hi')
        `;

  this._renderer2.appendChild(this._document.body, script);
  }

}

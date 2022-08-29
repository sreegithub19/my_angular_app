import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 count = 0;
  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {}

  ngOnInit() {
    
    this.loadScriptByAngularWay(
      'alert("Dynamic loaded SSR")',
      console.log('hi')
    );
  }

   
  public loadScriptByAngularWay(text,afterload) {
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = text;

    this._renderer2.appendChild(this._document.body, script);
    script.addEventListener('load', () => {
      afterload(script);
    });
  }
}
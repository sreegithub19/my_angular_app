import { Component, AfterViewInit, Input, OnInit,Renderer2, Inject } from '@angular/core';
//require('../using-require-syntax.js');
//import '../using-import-syntax.js';
import { DOCUMENT } from '@angular/common';
import {Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  `,
  styles: [`h1 { font-family: Lato; }`]
})

@Injectable()
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: any) {
      //document.write("hi");   // Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.
      document.getElementById("root").innerHTML =`<h1 onclick = "document.write(\`
      hi document
      hello there
      <h1>hi \\\`there\\\`</h1>
      <script>alert('hi')</script>
      <script>alert('hi again')</script>
      <script>document.write('hi again')</script>
      
      \`)">hi</h1>
      `;
    }
}
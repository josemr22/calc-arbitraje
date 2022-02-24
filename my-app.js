var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './app-header';
import './app-description';
import './app-calc';
let MyApp = class MyApp extends LitElement {
    render() {
        return html `
      <app-header></app-header>
      <div class="container">
        <app-description></app-description>
        <app-calc></app-calc>
      </div>
    `;
    }
};
MyApp.styles = css `
    .container {
      /* max-width: 1200px; */
      margin: 0;
      padding: 0;
    }    
  `;
MyApp = __decorate([
    customElement('my-app')
], MyApp);
export { MyApp };
//# sourceMappingURL=my-app.js.map
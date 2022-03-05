var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let AppHeader = class AppHeader extends LitElement {
    render() {
        return html `
      <header>
        <h1>Calculadora de Gastos Arbitrales del OSCE</h1>
      </header>
    `;
    }
};
AppHeader.styles = css `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,500;1,900&display=swap'); 
    h1 {
      text-align: center;
      font-family: Poppins, sans-serif;
      font-weight: bold;
      color: #293181;
      font-size: xx-large;
      padding: 0rem 1rem;
    }
  `;
AppHeader = __decorate([
    customElement('app-header')
], AppHeader);
export { AppHeader };
//# sourceMappingURL=app-header.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './app-input-cuantia';
import './app-results';
let AppCalc = class AppCalc extends LitElement {
    constructor() {
        super(...arguments);
        this._withParams = false;
    }
    render() {
        const inputTmpl = html `
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <app-input-cuantia
        class="animate__animated animate__fadeInUp animate__fast"
        @onCalculate=${this._onCalculate}
      ></app-input-cuantia>
    `;
        const resultsTmpl = html `
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <app-results
        class="animate__animated animate__fadeInUp animate__fast"
        @onBack=${this._onBack}
        .data=${this._data}
      ></app-results>
    `;
        return !this._withParams ? inputTmpl : resultsTmpl;
    }
    _onCalculate(e) {
        this._data = e.detail;
        this._withParams = true;
        this.requestUpdate();
    }
    _onBack() {
        this._withParams = false;
        this.requestUpdate();
    }
};
AppCalc.styles = css ``;
AppCalc = __decorate([
    customElement('app-calc')
], AppCalc);
export { AppCalc };
//# sourceMappingURL=app-calc.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './input-cuantia';
import './x-results';
let XCalc = class XCalc extends LitElement {
    render() {
        const inputTmpl = html `
      <input-cuantia @onCalculate=${this._onCalculate}></input-cuantia>
    `;
        const resultsTmpl = html `
      <x-results @onBack=${this._onBack} .amount=${this.amount}></x-results>
    `;
        return !this.amount ? inputTmpl : resultsTmpl;
    }
    _onCalculate(e) {
        this.amount = Number(e.detail.amount);
        this.requestUpdate();
    }
    _onBack() {
        this.amount = undefined;
        this.requestUpdate();
    }
};
XCalc.styles = css ``;
XCalc = __decorate([
    customElement('x-calc')
], XCalc);
export { XCalc };
//# sourceMappingURL=x-calc.js.map
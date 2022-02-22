var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
let InputCuantia = class InputCuantia extends LitElement {
    constructor() {
        super(...arguments);
        this._error = false;
    }
    render() {
        return html `
      <div>
        <label>Monto de la cuantía (S/)</label>
        <input type="number" @input=${this._changeAmount} />
        ${when(this._error, () => html `<span>Ingrese el monto de la cuantía</span>`, () => html ``)}
      </div>
      <button @click=${this._calculate}>Realizar cálculo</button>
    `;
    }
    _changeAmount(event) {
        this._error = false;
        this.requestUpdate();
        this._amount = Number(event.data);
    }
    _calculate() {
        if (!this._amount) {
            this._error = true;
            this.requestUpdate();
            return;
        }
        const event = new CustomEvent('onCalculate', {
            detail: {
                amount: this._amount,
            },
        });
        this.dispatchEvent(event);
    }
};
InputCuantia.styles = css `
    :host {
      display: block;
      text-align: center;
    }
    span {
      display: block;
      color: red;
    }
  `;
InputCuantia = __decorate([
    customElement('input-cuantia')
], InputCuantia);
export { InputCuantia };
//# sourceMappingURL=input-cuantia.js.map
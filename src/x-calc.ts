import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './input-cuantia';
import './x-results';

@customElement('x-calc')
export class XCalc extends LitElement {
  static override styles = css``;

  amount: number | undefined;

  override render() {
    const inputTmpl = html`
      <input-cuantia @onCalculate=${this._onCalculate}></input-cuantia>
    `;

    const resultsTmpl = html`
      <x-results @onBack=${this._onBack} .amount=${this.amount!}></x-results>
    `;

    return !this.amount ? inputTmpl : resultsTmpl;
  }

  _onCalculate(e: CustomEvent) {
    this.amount = Number(e.detail.amount);
    this.requestUpdate();
  }

  _onBack() {
    this.amount = undefined;
    this.requestUpdate();
  }
}

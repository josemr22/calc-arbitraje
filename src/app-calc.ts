import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './app-input-cuantia';
import './app-results';

@customElement('app-calc')
export class AppCalc extends LitElement {
  static override styles = css``;

  amount: number | undefined;

  override render() {
    const inputTmpl = html`
      <app-input-cuantia @onCalculate=${this._onCalculate}></app-input-cuantia>
    `;

    const resultsTmpl = html`
      <app-results
        @onBack=${this._onBack}
        .amount=${this.amount!}
      ></app-results>
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

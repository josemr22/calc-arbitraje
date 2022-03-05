import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './app-input-cuantia';
import './app-results';
import {UserData} from './interfaces/user-data';

@customElement('app-calc')
export class AppCalc extends LitElement {
  static override styles = css``;

  _withParams = false;
  _data!: UserData;

  override render() {
    const inputTmpl = html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
      <app-input-cuantia
        class="animate__animated animate__fadeInUp animate__fast"
        @onCalculate=${this._onCalculate}
      ></app-input-cuantia>
    `;

    const resultsTmpl = html`
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

  _onCalculate(e: CustomEvent) {
    this._data = e.detail;
    this._withParams = true;
    this.requestUpdate();
  }

  _onBack() {
    this._withParams = false;
    this.requestUpdate();
  }
}

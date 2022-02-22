import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  static override styles = css`
    h1 {
      text-align: center;
    }
  `;

  override render() {
    return html`
      <header>
        <h1>Calculadora de Gastos Arbitrales del OSCE</h1>
      </header>
    `;
  }
}

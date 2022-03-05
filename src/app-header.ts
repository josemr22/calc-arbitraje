import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  static override styles = css`
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

  override render() {
    return html`
      <header>
        <h1>Calculadora de Gastos Arbitrales del OSCE</h1>
      </header>
    `;
  }
}

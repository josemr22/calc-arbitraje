import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Results } from './interfaces/results';
@customElement('app-results')
export class AppResults extends LitElement {
  static override styles = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,500;1,900&display=swap'); 
    :host {
      display: block;
      text-align: center;
      font-family: 'Poppins', sans-serif;
      position: fixed;
      bottom: 0px;
      padding-bottom: 7rem;
      width: 100%;
      background-color: white;
      border-radius: 4rem 4rem 0rem 0rem;
      padding-top: 3rem;
      transition: all 1.3s;
    }
    .contenedor{
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
    button {
      cursor: pointer;
      width: 77%;
      display: block;
      font-size: 1.5rem;
      padding: 1.5rem 2rem;
      border-radius: 1.2rem;
      border: none;  
      background-color: #52a7fe;
      color: white;
      font-weight: bold;
    }
    .results-title{
      font-size: 1.8rem;
      color: #52a7fe;
      font-weight: bold;
    }
    .results-tr{
      font-size: 1.2rem;
    }
    .results-tr td{
      padding: 0.5rem;
    }
    table{
      margin-bottom: 1.5rem
    }
    .results-left{
      text-align: left;      
      font-weight: bold;
    }
  `;

  amount!: number;

  override render() {
    return html`
    <div class="contenedor">
      <table>
        <tbody>
          <tr>
            <td class="results-title" colspan="2">
              Gastos arbitrales correspondientes a la siguiente cuantía
            </td>
          </tr>
          <tr class="results-tr">
            <td>Monto de Cuantía</td>
            <td class="results-left">S/ ${this.results.montoCuantia.toFixed(2)}</td>
          </tr>
          <tr class="results-tr">
            <td>Árbitro Único</td>
            <td class="results-left">S/ ${this.results.arbitroUnico.toFixed(2)}</td>
          </tr>
          <tr class="results-tr">
            <td>Tribunal Arbitral</td>
            <td class="results-left">S/ ${this.results.tribunalArbitral.toFixed(2)}</td>
          </tr>
          <tr class="results-tr">
            <td>Centro de Arbitraje</td>
            <td class="results-left">
              ${this.results.centroArbitraje
        ? 'S/ ' + this.results.centroArbitraje.toFixed(2)
        : '👀'}
            </td>
          </tr>
        </tbody>
      </table>
      <button @click=${this._navigateToBack}>Realizar otro cálculo</button>
    </div>
    `;
  }

  _navigateToBack() {
    this.dispatchEvent(new CustomEvent('onBack'));
  }

  get results(): Results {
    let results: Results;

    if (this.amount <= 36_000) {
      results = {
        montoCuantia: this.amount,
        arbitroUnico: 2500,
        tribunalArbitral: 5512,
        centroArbitraje: 2500,
      };
    } else if (this.amount <= 72_000) {
      results = {
        montoCuantia: this.amount,
        arbitroUnico: 3200,
        tribunalArbitral: 9283,
        centroArbitraje: 3200,
      };
    } else if (this.amount <= 108_000) {
      results = {
        montoCuantia: this.amount,
        arbitroUnico: 4660,
        tribunalArbitral: 11519,
        centroArbitraje: 500,
      };
    } else if (this.amount <= 180_000) {
      const ex = this.amount - 108_000;
      results = {
        montoCuantia: this.amount,
        arbitroUnico: 5000 + 0.0153 * ex,
        tribunalArbitral: 11_800 + 0.04 * ex,
        centroArbitraje: 4_036 + 0.02 * ex,
      };
    } else if (this.amount <= 360_000) {
      const ex = this.amount - 180_000;
      results = {
        montoCuantia: this.amount,
        arbitroUnico: 7_080 + 0.006 * ex,
        tribunalArbitral: 15_284 + 0.0126 * ex,
        centroArbitraje: 4_607 + 0.0091 * ex,
      };
    } else if (this.amount <= 1_800_000) {
      const ex = this.amount - 360_000;
      results = {
        montoCuantia: this.amount,
        arbitroUnico: 8_518 + 0.0063 * ex,
        tribunalArbitral: 18_092 + 0.015 * ex,
        centroArbitraje: 5_889 + 0.0062 * ex,
      };
    } else if (this.amount <= 3_600_000) {
      const ex = this.amount - 1_800_000;
      results = {
        montoCuantia: this.amount,
        arbitroUnico: 20_408 + 0.0034 * ex,
        tribunalArbitral: 42_606 + 0.0089 * ex,
        centroArbitraje: 11_679 + 0.005 * ex,
      };
    } else {
      const ex = this.amount - 3_600_000;
      results = {
        montoCuantia: this.amount,
        arbitroUnico: 30_156 + 0.0031 * ex,
        tribunalArbitral: 62_253 + 0.0043 * ex,
        centroArbitraje: undefined,
      };
    }

    return results;
  }
}

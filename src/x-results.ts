import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Results} from './interfaces/results';
@customElement('x-results')
export class XResults extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    button {
      cursor: pointer;
    }
  `;

  amount!: number;

  override render() {
    return html`
      <table>
        <tbody>
          <tr>
            <td colspan="2">
              Gastos arbitrales correspondientes a la siguiente cuantía
            </td>
          </tr>
          <tr>
            <td>Monto de Cuantía</td>
            <td>S/ ${this.results.montoCuantia.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Árbitro Único</td>
            <td>S/ ${this.results.arbitroUnico.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Tribunal Arbitral</td>
            <td>S/ ${this.results.tribunalArbitral.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Centro de Arbitraje</td>
            <td>
              ${this.results.centroArbitraje
                ? 'S/ ' + this.results.centroArbitraje.toFixed(2)
                : '👀'}
            </td>
          </tr>
        </tbody>
      </table>
      <button @click=${this._navigateToBack}>Realizar otro cálculo</button>
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

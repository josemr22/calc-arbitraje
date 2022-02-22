var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let XResults = class XResults extends LitElement {
    render() {
        return html `
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
    get results() {
        let results;
        if (this.amount <= 36000) {
            results = {
                montoCuantia: this.amount,
                arbitroUnico: 2500,
                tribunalArbitral: 5512,
                centroArbitraje: 2500,
            };
        }
        else if (this.amount <= 72000) {
            results = {
                montoCuantia: this.amount,
                arbitroUnico: 3200,
                tribunalArbitral: 9283,
                centroArbitraje: 3200,
            };
        }
        else if (this.amount <= 108000) {
            results = {
                montoCuantia: this.amount,
                arbitroUnico: 4660,
                tribunalArbitral: 11519,
                centroArbitraje: 500,
            };
        }
        else if (this.amount <= 180000) {
            const ex = this.amount - 108000;
            results = {
                montoCuantia: this.amount,
                arbitroUnico: 5000 + 0.0153 * ex,
                tribunalArbitral: 11800 + 0.04 * ex,
                centroArbitraje: 4036 + 0.02 * ex,
            };
        }
        else if (this.amount <= 360000) {
            const ex = this.amount - 180000;
            results = {
                montoCuantia: this.amount,
                arbitroUnico: 7080 + 0.006 * ex,
                tribunalArbitral: 15284 + 0.0126 * ex,
                centroArbitraje: 4607 + 0.0091 * ex,
            };
        }
        else if (this.amount <= 1800000) {
            const ex = this.amount - 360000;
            results = {
                montoCuantia: this.amount,
                arbitroUnico: 8518 + 0.0063 * ex,
                tribunalArbitral: 18092 + 0.015 * ex,
                centroArbitraje: 5889 + 0.0062 * ex,
            };
        }
        else if (this.amount <= 3600000) {
            const ex = this.amount - 1800000;
            results = {
                montoCuantia: this.amount,
                arbitroUnico: 20408 + 0.0034 * ex,
                tribunalArbitral: 42606 + 0.0089 * ex,
                centroArbitraje: 11679 + 0.005 * ex,
            };
        }
        else {
            const ex = this.amount - 3600000;
            results = {
                montoCuantia: this.amount,
                arbitroUnico: 30156 + 0.0031 * ex,
                tribunalArbitral: 62253 + 0.0043 * ex,
                centroArbitraje: undefined,
            };
        }
        return results;
    }
};
XResults.styles = css `
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
XResults = __decorate([
    customElement('x-results')
], XResults);
export { XResults };
//# sourceMappingURL=x-results.js.map
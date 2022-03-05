import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Results } from './interfaces/results';
import { UserData } from './interfaces/user-data';
import { when } from 'lit/directives/when.js';
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
      padding-bottom: 2rem;
      width: 100%;
      background-color: #52a7fe;
      border-radius: 4rem 4rem 0rem 0rem;
      padding-top: 3rem;
      transition: all 1.3s;
    }
    .contenedor {
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
      background-color: #293181;
      color: rgb(255 255 255);
      font-weight: bold;
    }
    .pdf{
      cursor: pointer;
      width: 77%;
      display: block;
      font-size: 1.5rem;
      padding: 1.5rem 2rem;
      border-radius: 1.2rem;
      border: none;
      background-color: #e72424;
      margin-bottom: 0.5rem;
      color: rgb(255 255 255);
      font-weight: bold;
    }
    .results-title {
      font-size: 2.2rem;
      color: white;
      font-weight: bold;
    }
    .results-tr {
      font-size: 1.8rem;
    }
    .results-tr td {
      padding: 0.5rem;
    }
    table {
      margin-bottom: 1.5rem;
    }
    .results-left {
      text-align: left;
      font-weight: bold;
    }
    .error-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .error-container p {
      max-width: 960px;
      text-align: left;
      font-size: 1.5rem;
      line-height: 1.3;
    }
    a {
      cursor: pointer;
    }
  `;

  data!: UserData;
  _errorExceso = false;
  override render() {
    const errorTmpl = html`
      <div class="error-container">
        <p>
          La suma de valores de las pretensiones indeterminadas debe ser menor o
          igual al monto de contrato original objeto del arbitraje. Ingrese un
          número menor de pretensiones indeterminadas.
        </p>
        <button @click=${() => this._navigateToBack()}>
          Realizar otro cálculo
        </button>
      </div>
    `;

    const resultsTmpl = html`
      <div class="contenedor">
        <table class="pdf-content">
          <tbody>
            <tr>
              <td class="results-title" colspan="2">
                Gastos arbitrales correspondientes a la siguiente cuantía
              </td>
            </tr>
            ${when(
      this.data.determinated,
      () => html`<tr class="results-tr">
                <td>Monto de Cuantía</td>
                <td class="results-left">
                  S/ ${this.results.montoCuantia!.toFixed(2)}
                </td>
              </tr>`,
      () => html``
    )}
            <tr class="results-tr">
              <td>Árbitro Único (*)</td>
              <td class="results-left">
                S/ ${this.results.arbitroUnico.toFixed(2)}
              </td>
            </tr>
            <tr class="results-tr">
              <td>Tribunal Arbitral (*)</td>
              <td class="results-left">
                S/ ${this.results.tribunalArbitral.toFixed(2)}
              </td>
            </tr>
            <tr class="results-tr">
              <td>Centro de Arbitraje (**)</td>
              <td class="results-left">
                ${this.results.centroArbitraje
        ? 'S/ ' + this.results.centroArbitraje.toFixed(2)
        : ''}
              </td>
            </tr>
          </tbody>
        </table>
        <span>(*) Monto Neto</span>
        <span>(**) Monto sin IGV</span>
        <script src="https://kit.fontawesome.com/88cd56de91.js" crossorigin="anonymous"></script>
        <button class="pdf" @click=${this._exportToPdf}><i class="fa-solid fa-file-pdf"></i> Exportar en pdf</button>
        <button @click=${this._navigateToBack}>Realizar otro cálculo</button>
      </div>
    `;

    if (this._errorExceso) {
      return errorTmpl;
    } else {
      return resultsTmpl;
    }
  }

  _navigateToBack() {
    this.dispatchEvent(new CustomEvent('onBack'));
  }

  get results(): Results {
    let results: Results;
    if (this.data.determinated) {
      const amount = this.data.montoCuantia!;

      if (amount <= 36_000) {
        results = {
          montoCuantia: amount,
          arbitroUnico: 2500,
          tribunalArbitral: 5512,
          centroArbitraje: 2500,
        };
      } else if (amount <= 72_000) {
        results = {
          montoCuantia: amount,
          arbitroUnico: 3200,
          tribunalArbitral: 9283,
          centroArbitraje: 3200,
        };
      } else if (amount <= 108_000) {
        results = {
          montoCuantia: amount,
          arbitroUnico: 4660,
          tribunalArbitral: 11519,
          centroArbitraje: 4_500,
        };
      } else if (amount <= 180_000) {
        const ex = amount - 108_000;
        results = {
          montoCuantia: amount,
          arbitroUnico: 5000 + 0.0153 * ex,
          tribunalArbitral: 11_800 + 0.04 * ex,
          centroArbitraje: 4_036 + 0.02 * ex,
        };
      } else if (amount <= 360_000) {
        const ex = amount - 180_000;
        results = {
          montoCuantia: amount,
          arbitroUnico: 7_080 + 0.006 * ex,
          tribunalArbitral: 15_284 + 0.0126 * ex,
          centroArbitraje: 4_607 + 0.0091 * ex,
        };
      } else if (amount <= 1_800_000) {
        const ex = amount - 360_000;
        results = {
          montoCuantia: amount,
          arbitroUnico: 8_518 + 0.0063 * ex,
          tribunalArbitral: 18_092 + 0.015 * ex,
          centroArbitraje: 5_889 + 0.0062 * ex,
        };
      } else if (amount <= 3_600_000) {
        const ex = amount - 1_800_000;
        results = {
          montoCuantia: amount,
          arbitroUnico: 20_408 + 0.0034 * ex,
          tribunalArbitral: 42_606 + 0.0089 * ex,
          centroArbitraje: 11_679 + 0.005 * ex,
        };
      } else {
        const ex = amount - 3_600_000;
        results = {
          montoCuantia: amount,
          arbitroUnico: 30_156 + 0.0031 * ex,
          tribunalArbitral: 62_253 + 0.0043 * ex,
          centroArbitraje: null,
        };
      }
    } else {
      const honorariosArbitro =
        this.data.montoContratoOriginal! *
        (2.7 / 100) *
        this.data.pretensiones!;

      const centroArbitraje =
        this.data.montoContratoOriginal! *
        (2.2 / 100) *
        this.data.pretensiones!;

      if (
        honorariosArbitro > this.data.montoContratoOriginal! ||
        centroArbitraje > this.data.montoContratoOriginal!
      ) {
        this._errorExceso = true;
      }

      results = {
        arbitroUnico: honorariosArbitro,
        tribunalArbitral: honorariosArbitro,
        centroArbitraje: centroArbitraje,
      };
    }

    return results;
  }

  _exportToPdf() {
    const data = {
      ...this.results,
      determinated: this.data.determinated,
    };
    const params = Object.entries(data)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    location.href = `http://superbackend.xyz/api/pdf/acir?${params}`;
  }
}

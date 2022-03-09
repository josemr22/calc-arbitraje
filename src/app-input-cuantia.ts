import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';

@customElement('app-input-cuantia')
export class AppInputCuantia extends LitElement {
  static override styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,500;1,900&display=swap');
    :host {
      display: block;
      text-align: center;
      font-family: 'Poppins', sans-serif;
      position: fixed;
      bottom: 0px;
      padding-bottom: 15px;
      width: 100%;
      background-color: #52a7fe;
      border-radius: 4rem 4rem 0rem 0rem;
      padding-top: 3rem;
      transition: all 1.3s;
    }
    span {
      display: block;
      color: red;
    }
    .contenedor {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
    .label-cuantia {
      font-size: 1.8rem;
      color: white;
      font-weight: bold;
    }
    .input-cuantia {
      color: #333;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      padding: 1.5rem 2rem;
      border-radius: 1.2rem;
      border-color: #e7e9ed;
      background-color: rgb(255, 255, 255);
      border: none;
      width: 70%;
      display: block;
      border-bottom: 0.3rem solid transparent;
      transition: all 0.3s;
      box-shadow: rgb(77 107 255 / 54%) 0px 0px 20px 0px;
    }
    .btn-cuantia {
      width: 77%;
      display: block;
      font-size: 1.5rem;
      padding: 1.5rem 2rem;
      border-radius: 1.2rem;
      border: none;
      background-color: #293181;
      color: rgb(255 255 255);
      font-weight: bold;
      cursor: pointer;
    }
    .btn-determinada{
      width: 77%;
      display: block;
      font-size: 1.5rem;
      padding: 1.5rem 2rem;
      border-radius: 1.2rem;
      border: none;
      background-color: rgb(219 169 0);
      color: rgb(255, 255, 255);
      font-weight: bold;
      cursor: pointer;
      margin-bottom: 0.5rem;
    }
    .centered{
      text-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
    }
    a {
      cursor: pointer;
    }
  `;

  _determinated = true;
  _error = false;

  @query('#montoCuantia')
  _montoCuantia!: HTMLInputElement;
  @query('#montoContratoOriginal')
  _montoContratoOriginal!: HTMLInputElement;
  @query('#pretensiones')
  _pretensiones!: HTMLInputElement;

  override render() {
    const determinadoTmpl = html`
      <label class="label-cuantia">Monto de la cuantía (S/)</label> <br />
      <input class="input-cuantia" type="number" id="montoCuantia" />
    `;

    const indeterminadoTmpl = html`
      <div class="centered">
        <label class="label-cuantia">Monto del Contrato Original (S/)</label>
        <input class="input-cuantia" type="number" id="montoContratoOriginal" />
      </div>
      <div class="centered">
        <label class="label-cuantia"
          >Número de pretensiones indeterminada</label
        >
        <input class="input-cuantia" type="number" id="pretensiones" />
      </div>
    `;

    return html`
      <div class="contenedor">
        ${when(
      this._determinated,
      () => determinadoTmpl,
      () => indeterminadoTmpl
    )}

        <button class="btn-determinada" @click=${this._changeDeterminated}
          >Calcular gastos para pretensión de cuantía
          ${this._determinated ? 'indeterminada' : 'determinada'}.</button>
        <button class="btn-cuantia" @click=${this._calculate}>
          Realizar cálculo
        </button>
      </div>
    `;
  }

  _changeDeterminated() {
    this._determinated = !this._determinated;
    this.requestUpdate();
  }

  // _changeAmount(event: InputEvent) {
  //   const input = event.target as HTMLInputElement;
  //   this._error = false;
  //   this._amount = Number(input.value);
  //   this.requestUpdate();
  // }

  _calculate() {
    let event;
    if (this._determinated) {
      const cuantia = Number(this._montoCuantia.value);
      if (!cuantia || Number(cuantia) <= 0) {
        return alert('Ingrese un monto de cuantía válido');
      }
      event = new CustomEvent('onCalculate', {
        detail: {
          determinated: true,
          montoCuantia: cuantia,
        },
      });
    } else {
      const montoContratoOriginal = Number(this._montoContratoOriginal.value);
      const pretensiones = Number(this._pretensiones.value);
      if (!montoContratoOriginal || Number(montoContratoOriginal) <= 0) {
        return alert('Ingrese un monto de contrato original válido');
      }
      if (!pretensiones || Number(pretensiones) <= 0) {
        return alert('Ingrese un monto de pretensiones válido');
      }
      event = new CustomEvent('onCalculate', {
        detail: {
          determinated: false,
          montoContratoOriginal: montoContratoOriginal,
          pretensiones: pretensiones,
        },
      });
    }

    this.dispatchEvent(event);
  }
}

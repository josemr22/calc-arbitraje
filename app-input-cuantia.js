var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { when } from 'lit/directives/when.js';
let AppInputCuantia = class AppInputCuantia extends LitElement {
    constructor() {
        super(...arguments);
        this._determinated = true;
        this._error = false;
    }
    render() {
        const determinadoTmpl = html `
      <label class="label-cuantia">Monto de la cuantía (S/)</label> <br />
      <input class="input-cuantia" type="number" id="montoCuantia" />
    `;
        const indeterminadoTmpl = html `
      <div>
        <label class="label-cuantia">Monto del Contrato Original (S/)</label>
        <input class="input-cuantia" type="number" id="montoContratoOriginal" />
      </div>
      <div>
        <label class="label-cuantia"
          >Número de pretensiones indeterminada</label
        >
        <input class="input-cuantia" type="number" id="pretensiones" />
      </div>
    `;
        return html `
      <div class="contenedor">
        ${when(this._determinated, () => determinadoTmpl, () => indeterminadoTmpl)}

        <a @click=${this._changeDeterminated}
          >Calcular gastos para pretensión de cuantía
          ${this._determinated ? 'determinada' : 'indeterminada'}.</a
        >
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
        }
        else {
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
};
AppInputCuantia.styles = css `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,500;1,900&display=swap');
    :host {
      display: block;
      text-align: center;
      font-family: 'Poppins', sans-serif;
      position: fixed;
      bottom: 0px;
      padding-bottom: 7rem;
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
    a {
      cursor: pointer;
    }
  `;
__decorate([
    query('#montoCuantia')
], AppInputCuantia.prototype, "_montoCuantia", void 0);
__decorate([
    query('#montoContratoOriginal')
], AppInputCuantia.prototype, "_montoContratoOriginal", void 0);
__decorate([
    query('#pretensiones')
], AppInputCuantia.prototype, "_pretensiones", void 0);
AppInputCuantia = __decorate([
    customElement('app-input-cuantia')
], AppInputCuantia);
export { AppInputCuantia };
//# sourceMappingURL=app-input-cuantia.js.map
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
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
      padding-bottom: 15rem;
      width: 100%;
      background-color: white;
      border-radius: 4rem 4rem 0rem 0rem;
      padding-top: 3rem;
      transition: all 1.3s;
    }
    span {
      display: block;
      color: red;    
    }
    .contenedor{
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
    .label-cuantia{
      font-size: 1.8rem;
      color: rgb(50, 46, 84);
      font-weight: bold;
    }
    .input-cuantia{
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
      box-shadow: 0px 0px 20px 0px #0000001f;
    }
    .btn-cuantia{
      width: 77%;
      display: block;
      font-size: 1.5rem;
      padding: 1.5rem 2rem;
      border-radius: 1.2rem;
      border: none;  
      background-color: rgb(50, 46, 84);
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
  `;

  _amount!: number;
  _error = false;

  override render() {
    return html`
      <div class="contenedor">
        <label class="label-cuantia">Monto de la cuantía (S/)</label> <br>
        <input class="input-cuantia" type="number" @input=${this._changeAmount} />
        ${when(
      this._error,
      () => html`<span>Ingrese el monto de la cuantía</span>`,
      () => html``
    )}
      <button class="btn-cuantia" @click=${this._calculate}>Realizar cálculo</button>
      </div>
    `;
  }

  _changeAmount(event: InputEvent) {
    const input = event.target as HTMLInputElement;
    this._error = false;
    this._amount = Number(input.value);
    this.requestUpdate();
  }

  _calculate() {
    if (!this._amount) {
      this._error = true;
      this.requestUpdate();
      return;
    }

    const event = new CustomEvent('onCalculate', {
      detail: {
        amount: this._amount,
      },
    });
    this.dispatchEvent(event);
  }
}

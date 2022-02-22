import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {when} from 'lit/directives/when.js';

@customElement('input-cuantia')
export class InputCuantia extends LitElement {
  static override styles = css`
    :host {
      display: block;
      text-align: center;
    }
    span {
      display: block;
      color: red;
    }
  `;

  _amount!: number;
  _error = false;

  override render() {
    return html`
      <div>
        <label>Monto de la cuantía (S/)</label>
        <input type="number" @input=${this._changeAmount} />
        ${when(
          this._error,
          () => html`<span>Ingrese el monto de la cuantía</span>`,
          () => html``
        )}
      </div>
      <button @click=${this._calculate}>Realizar cálculo</button>
    `;
  }

  _changeAmount(event: InputEvent) {
    this._error = false;
    this.requestUpdate();
    this._amount = Number(event.data);
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

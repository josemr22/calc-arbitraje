import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css`
    :host {
    }
  `;

  @property()
  name = 'Worlssd';

  @property({type: Number})
  count = 0;

  override render() {
    return html`
      <button @click=${this._onClick} part="button">
        Click Csount: ${this.count}
      </button>
    `;
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }
}

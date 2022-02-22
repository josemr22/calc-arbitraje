import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './app-header';
import './app-description';
import './x-calc';

@customElement('my-app')
export class MyApp extends LitElement {
  static override styles = css`
    :host {
      display: block;
      max-width: 1200px;
      margin: 0 auto;
    }
  `;

  override render() {
    return html`
      <app-header></app-header>
      <app-description></app-description>
      <x-calc></x-calc>
    `;
  }
}

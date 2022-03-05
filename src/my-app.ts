import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './app-header';
import './app-description';
import './app-calc';

@customElement('my-app')
export class MyApp extends LitElement {
  static override styles = css`
    .container {
      /* max-width: 1200px; */
      margin: 0;
      padding: 0;
    }
  `;

  override render() {
    return html`
      <app-header></app-header>
      <div class="container">
        <app-description></app-description>
        <app-calc></app-calc>
      </div>
    `;
  }
}

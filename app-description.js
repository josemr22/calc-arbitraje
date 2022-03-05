var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let AppDescription = class AppDescription extends LitElement {
    render() {
        return html `
      <p>
      Estimado usuario:
      </p>
      <p>A través del siguiente aplicativo, usted podrá calcular los gastos arbitrales que le corresponda asumir por concepto de árbitro único o tribunal arbitral, según corresponda, así como del Centro de Arbitraje ACIR Internacional (Del mismo color del título y con negrita).</p>
      <p>Lo invitamos a ingresar la información requerida para efectuar el cálculo de los gastos arbitrales que correspondan a su proceso.</p>
    

      <!-- <p>
        Los cálculos son realizados en base a lo establecido en la Directiva N°
        007-2009-OSCE/CD, para los procesos arbitrales iniciados hasta el 29 de
        junio de 2016. Puede acceder a esta Directiva
        <a class="link"
          href="http://www.osce.gob.pe/consucode/userfiles/file/DDA%20-%20NORMAS%20APLICABLES/Directiva%20N%20007-2009-OSCE%20-%20SUPUESTOS%20DE%20DEVOLUCIN%20DE%20HONORARIOS.pdf"
          target="_blank"
          >haciendo clic aquí</a
        >.<br /><br />
        Ingrese la información solicitada para realizar el cálculo de los gastos
        arbitrales que corresponde a su proceso.
      </p> -->
    `;
    }
};
AppDescription.styles = css `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,500;1,900&display=swap');
  :host{
    font-family: 'Poppins', sans-serif;
    display: block;
    padding: 0rem 1.4rem;
  }
  p{
    font-size: 17px;
    color: black;    
    text-align: justify
  }
  .link{
    text-decoration: none;
    color: red;
    font-weight: bold;
  }
  `;
AppDescription = __decorate([
    customElement('app-description')
], AppDescription);
export { AppDescription };
//# sourceMappingURL=app-description.js.map
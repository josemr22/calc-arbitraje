import { LitElement } from 'lit';
import './app-input-cuantia';
import './app-results';
import { UserData } from './interfaces/user-data';
export declare class AppCalc extends LitElement {
    static styles: import("lit").CSSResult;
    _withParams: boolean;
    _data: UserData;
    render(): import("lit-html").TemplateResult<1>;
    _onCalculate(e: CustomEvent): void;
    _onBack(): void;
}
//# sourceMappingURL=app-calc.d.ts.map
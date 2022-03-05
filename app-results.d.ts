import { LitElement } from 'lit';
import { Results } from './interfaces/results';
import { UserData } from './interfaces/user-data';
export declare class AppResults extends LitElement {
    static styles: import("lit").CSSResult;
    data: UserData;
    _errorExceso: boolean;
    render(): import("lit-html").TemplateResult<1>;
    _navigateToBack(): void;
    get results(): Results;
    _exportToPdf(): void;
}
//# sourceMappingURL=app-results.d.ts.map
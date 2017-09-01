import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { SpinnerComponent } from './spinner';

export * from './spinner';

@NgModule({
    declarations: [
        SpinnerComponent
    ],
    exports: [
        SpinnerComponent,
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
})
export class SpinnerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SpinnerModule,
            providers: []
        };
    }
}

import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { RippleEffectComponent } from './ripple-effect/ripple-effect.component';
@NgModule({
  declarations: [AppComponent, RippleEffectComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  entryComponents: [RippleEffectComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const customElement = createCustomElement(RippleEffectComponent, {
      injector: this.injector,
    });
    customElements.define('app-ripple-test', customElement);
  }
}

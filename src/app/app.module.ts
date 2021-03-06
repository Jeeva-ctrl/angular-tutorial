import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroBirthday2Component } from './happyBirthday.component';
import { PowerBoosterComponent } from './Pipe-Custom/power-booster.component';
import { ExponentialStrengthPipe } from './Pipe-Custom/exponential-strength.pipe';
import { PowerBoostCalculatorComponent } from './Pipe-Custom/power-booster-calculator.component';
import { HeroAsyncMessageComponent } from './Pipe-Custom/hero-async-message.component';
import { AsyncObservablePipeComponent } from './Observable/aync-observable-component';
import { FavoriteColorComponent } from './forms/forms.reactive.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeroBirthday2Component,
    PowerBoosterComponent,
    ExponentialStrengthPipe,
    PowerBoostCalculatorComponent,
    HeroAsyncMessageComponent,
    AsyncObservablePipeComponent,
    FavoriteColorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

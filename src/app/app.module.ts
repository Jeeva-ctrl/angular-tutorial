import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroBirthday2Component } from './happyBirthday.component';
import { PowerBoosterComponent } from './Pipe-Custom/power-booster.component';
import { ExponentialStrengthPipe } from './Pipe-Custom/exponential-strength.pipe';
import { PowerBoostCalculatorComponent } from './Pipe-Custom/power-booster-calculator.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,HeroBirthday2Component, PowerBoosterComponent, ExponentialStrengthPipe,PowerBoostCalculatorComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

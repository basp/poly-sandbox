import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  FormatScorePipe, 
  FormatCostPipe, 
  FormatNumberPipe, 
  FormatProductionPipe,
  FormatOutputPipe
} from './pretty-number-pipe'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FormatScorePipe,
    FormatCostPipe,
    FormatNumberPipe,
    FormatProductionPipe,
    FormatOutputPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

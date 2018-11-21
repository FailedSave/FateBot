import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FateDisplayComponent } from './fate-display/fate-display.component';
import { StorageService } from './storage/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    FateDisplayComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

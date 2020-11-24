import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { TypographyComponent } from './typography/typography.component';
import { ColorCellComponent } from './color-cell/color-cell.component';

@NgModule({
  declarations: [AppComponent, ColorPaletteComponent, TypographyComponent, ColorCellComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

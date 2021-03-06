import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XyzComponent } from './xyz/xyz.component';
import { ViModule } from '@mono-demo/vi';

@NgModule({
  imports: [CommonModule, ViModule],
  declarations: [XyzComponent],
})
export class UiModule {}

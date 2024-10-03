import { Routes } from '@angular/router';
import { DecoderComponent } from './decoder/decoder.component';
import { EncoderComponent } from './encoder/encoder.component';

export const routes: Routes = [
  { path: 'decoder', component: DecoderComponent},
  { path: 'encoder', component: EncoderComponent },
  { path: '', redirectTo: 'encoder', pathMatch: 'full' }
];

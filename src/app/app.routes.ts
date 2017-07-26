import { RouterModule, Routes } from '@angular/router';
import { ObraComponent } from './components/obra/obra.component';
import { ObrasComponent } from './components/obras/obras.component';

const APP_ROUTES: Routes = [
  { path: 'obras', component: ObrasComponent },
  { path: 'obra/:id', component: ObraComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'obras' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES );

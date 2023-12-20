import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistoComponent } from './pages/registo/registo.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

const routes: Routes = [
  {path: 'registo', component: RegistoComponent},
  {path: '', component: HomeComponent},
  {path: 'editar/:id', component: EditarComponent},
  {path: 'detalhes/:id', component: DetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

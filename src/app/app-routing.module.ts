import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent} from './create/create.component';
import { RetrieveComponent } from './retrieve/retrieve.component';

const routes: Routes = [
  {path:'create', component:CreateComponent},
  {path:'retrieve', component:RetrieveComponent}
]
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})

export class AppRoutingModule{

}

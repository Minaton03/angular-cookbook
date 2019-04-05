import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent} from './recipe-list/recipe-list.component';
import { from } from 'rxjs';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: "", redirectTo: 'recipe-list', pathMatch: 'full'},
      {path: "recipe-list", component: RecipeListComponent}
    ])],
  exports: [
    RouterModule]
})
export class AppRoutingModule { }

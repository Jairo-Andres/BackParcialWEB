import { Routes } from '@angular/router';
import { GetAllComponent } from './components/get-all/get-all.component';
import { GetComponent } from './components/get/get.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DeleteComponent } from './components/delete/delete.component';

export const routes: Routes = [
    { path: 'getAll', component: GetAllComponent },
    { path: 'get', component: GetComponent },
    { path: 'create', component: CreateComponent },
    { path: 'update', component: UpdateComponent },
    { path: 'delete', component: DeleteComponent }
];

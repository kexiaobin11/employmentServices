import {Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {ViewComponent} from './view/view.component';


export const JOB_ROUTES: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  }
]

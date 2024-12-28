import {IndexComponent} from './index/index.component';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {ViewComponent} from './view/view.component';

export const ARTICLE_ROUTERS = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'view/:id',
    component: ViewComponent,
  }
];

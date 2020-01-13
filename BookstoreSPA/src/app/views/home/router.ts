import { Routes, RouterModule } from '@angular/router';
import { HomeManagerComponent } from './home-manager/home-manager.component';

const routes: Routes = [
    {
        path: '',
        component: HomeManagerComponent
    }
];

export const HomeRoutes = RouterModule.forChild(routes);
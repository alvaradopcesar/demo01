
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { TablaComponent } from './tabla/tabla.component';
import { TablaeditComponent } from './tabla/tablaedit/tablaedit.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/bienvenida',
        pathMatch : 'full'
    },
    {
        path : 'bienvenida',
        component : BienvenidaComponent,
    },
    {
        path : 'tabla',
        component : TablaComponent,
    },
    {
        path : 'tabla/:id',
        component : TablaeditComponent
    }
    // {
    //     path : 'tabla/:id',
    //     componet : Tabladetalle
    // }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true }),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
    BienvenidaComponent, TablaComponent, TablaeditComponent
];

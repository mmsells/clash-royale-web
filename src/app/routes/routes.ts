import { CanLoad } from '@angular/router';
// import { DefaultPageRedirectionGuard } from './../core/app-auth/default-page-redirection.guard';
// import { AuthGuard } from './../core/app-auth/auth.guard';
// import { LayoutComponent } from '../layout/layout.component';

export const routes = [

  /* {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', canActivate : [DefaultPageRedirectionGuard], redirectTo : '', pathMatch: 'full'}//,
      // { path: 'shipper', loadChildren: './shipper/shipper.module#ShipperModule' },
      // { path: 'forwarder', loadChildren: './forwarder/forwarder.module#ForwarderModule' },
      // { path: 'account', loadChildren: './account/account.module#AccountModule' }
    ]
  },
   */
  // Not found
  { path: '**', redirectTo: 'user' }

];

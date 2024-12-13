import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'kategori',
    loadChildren: () => import('./kategori/kategori.module').then( m => m.KategoriPageModule)
  },
  {
    path: 'atlet',
    loadChildren: () => import('./atlet/atlet.module').then( m => m.AtletPageModule)
  },
  {
    path: 'rehabilitasi',
    loadChildren: () => import('./rehabilitasi/rehabilitasi.module').then( m => m.RehabilitasiPageModule)
  },
  {
    path: 'lansia',
    loadChildren: () => import('./lansia/lansia.module').then( m => m.LansiaPageModule)
  },
  {
    path: 'diagnose',
    loadChildren: () => import('./diagnose/diagnose.module').then( m => m.DiagnosePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'historyz',
    loadChildren: () => import('./historyz/historyz.module').then( m => m.HistoryzPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'hkdrills',
    loadChildren: () => import('./hkdrills/hkdrills.module').then( m => m.HkdrillsPageModule)
  },
  {
    path: 'bounding',
    loadChildren: () => import('./bounding/bounding.module').then( m => m.BoundingPageModule)
  },
  {
    path: 'slhops',
    loadChildren: () => import('./slhops/slhops.module').then( m => m.SlhopsPageModule)
  },
  {
    path: 'legswings',
    loadChildren: () => import('./legswings/legswings.module').then( m => m.LegswingsPageModule)
  },
  {
    path: 'wshifting',
    loadChildren: () => import('./wshifting/wshifting.module').then( m => m.WshiftingPageModule)
  },
  {
    path: 'minisquats',
    loadChildren: () => import('./minisquats/minisquats.module').then( m => m.MinisquatsPageModule)
  },
  {
    path: 'sidestep',
    loadChildren: () => import('./sidestep/sidestep.module').then( m => m.SidestepPageModule)
  },
  {
    path: 'toeraises',
    loadChildren: () => import('./toeraises/toeraises.module').then( m => m.ToeraisesPageModule)
  },
  {
    path: 'httwalk',
    loadChildren: () => import('./httwalk/httwalk.module').then( m => m.HttwalkPageModule)
  },
  {
    path: 'sitostand',
    loadChildren: () => import('./sitostand/sitostand.module').then( m => m.SitostandPageModule)
  },
  {
    path: 'tendemstance',
    loadChildren: () => import('./tendemstance/tendemstance.module').then( m => m.TendemstancePageModule)
  },
  {
    path: 'singlegstance',
    loadChildren: () => import('./singlegstance/singlegstance.module').then( m => m.SinglegstancePageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'upvid',
    loadChildren: () => import('./upvid/upvid.module').then( m => m.UpvidPageModule)
  },
  {
    path: 'upvidscan',
    loadChildren: () => import('./upvidscan/upvidscan.module').then( m => m.UpvidscanPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'historiev',
    loadChildren: () => import('./historiev/historiev.module').then( m => m.HistorievPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

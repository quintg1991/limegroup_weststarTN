import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'cost-benefits', loadChildren: './cost-benefits/cost-benefits.module#CostBenefitsPageModule' },
  { path: 'mission-vision-history', loadChildren: './mission-vision-history/mission-vision-history.module#MissionVisionHistoryPageModule' },
  { path: 'sponsors', loadChildren: './sponsors/sponsors.module#SponsorsPageModule' },
  { path: 'leaders', loadChildren: './leaders/leaders.module#LeadersPageModule' },
  { path: 'class', loadChildren: './class/class.module#ClassPageModule' },
  { path: 'west-teach', loadChildren: './west-teach/west-teach.module#WestTeachPageModule' },
  { path: 'alumni', loadChildren: './alumni/alumni.module#AlumniPageModule' },
  { path: 'trustees', loadChildren: './trustees/trustees.module#TrusteesPageModule' },
  { path: 'testimonials', loadChildren: './testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'social-media', loadChildren: './social-media/social-media.module#SocialMediaPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' }
];

@NgModule({
  imports: [
    FontAwesomeModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

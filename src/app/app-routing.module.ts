import { ContactsComponent } from './../components/contacts/contacts.component';
import { FeedComponent } from './../components/feed/feed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/components/home/home-component.component';
import { NotfoundComponent } from 'src/components/notfound/notfound.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'contacts', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'feed', component: FeedComponent
  },
  {
    path: 'contacts', component: ContactsComponent
  },
  {
    path: '**', component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

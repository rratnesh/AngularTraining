import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MypipePipe } from './mypipe.pipe';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomrComponent } from './homr/homr.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const Routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MypipePipe,
    CartComponent,
    HomrComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

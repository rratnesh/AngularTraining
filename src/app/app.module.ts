import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MypipePipe } from './mypipe.pipe';
import { Route, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomrComponent } from './homr/homr.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { TrousersComponent } from './trousers/trousers.component';

const Routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  {
    path: 'products', component: ProductsComponent,
    children: [
      {
        path: 'mens', component: MensComponent,
        children: [
          { path: 'shirts', component: ShirtsComponent },
          { path: 'trousers', component: TrousersComponent }
        ]
      },
      { path: 'womens', component: WomensComponent }
    ]
  },
  { path: 'product/:id', component: ProductComponent }
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
    ProductsComponent,
    ProductComponent,
    MensComponent,
    WomensComponent,
    ShirtsComponent,
    TrousersComponent
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

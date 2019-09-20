import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items ;
  checkoutForm;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.shoppingCartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.shoppingCartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
    this.items = this.shoppingCartService.getItems();
  }
}

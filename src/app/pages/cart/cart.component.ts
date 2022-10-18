import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "../../models/cart.model";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        id: 1,
        name: "snickers",
        product: "https://via.placeholder.com/150",
        price: 150,
        quantity: 1,
      },
      {
        id: 2,
        name: "snickers",
        product: "https://via.placeholder.com/150",
        price: 100,
        quantity: 3,
      },
      {
        id: 3,
        name: "snickers",
        product: "https://via.placeholder.com/150",
        price: 120,
        quantity: 5,
      },
    ],
  };

  dataSource: Array<CartItem> = [];
  displayColumns: Array<string> = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }
}

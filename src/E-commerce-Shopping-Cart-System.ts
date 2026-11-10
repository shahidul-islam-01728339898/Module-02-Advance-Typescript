// Real-life scenario
// Imagine you are developing an online shopping application similar to Daraz.

//* A customer can:
// - Add products to a shopping cart.
// - Remove products from the cart.
// - Calculate the total price.
// - Display all cart products.

//* In this example, we will use two classes:
// 1. Product
// 2. ShoppingCart
// This will help you understand how multiple classes work together.

//* Step 1: Create Product class

class Product {
  productId: number;
  ProductName: string;
  productPrice: number;
  productQuantity: number;

  constructor(
    productId: number,
    productName: string,
    productPrice: number,
    productQuantity: number,
  ) {
    this.productId = productId;
    this.ProductName = productName;
    this.productPrice = productPrice;
    this.productQuantity = productQuantity;
  }

  displayProduct(): void {
    console.log(`Product Id: ${this.productId}`);
    console.log(`Product Name: ${this.ProductName}`);
    console.log(`Product Price: ${this.productPrice}`);
    console.log(`Product Quantity: ${this.productQuantity}`);
  }

  calculateSubtotal(): number {
    return this.productQuantity * this.productPrice;
  }
}

const cart = new Product(100, "LLDPE", 500, 50);
cart.displayProduct();
console.log("Sub Total BDT:", cart.calculateSubtotal());

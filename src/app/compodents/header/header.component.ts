
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  shownProductId: string = '';

  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      description: ' Product 1 description Product 1 description Product 1 description Product 1 description',
      imgUrl:
        'https://file.hstatic.net/200000053174/file/cac-loai-ao-vest-nam_07a5c0b0bfee420b8edc3225a9529187.jpg',
    },
    {
      id: '2',
      name: 'Ao khoac',
      price: 200,
      description: ' Product 2 description Product 2 description Product 2 description Product 2 description',
      imgUrl:
        'https://file.hstatic.net/200000053174/file/cac-loai-ao-vest-nam_07a5c0b0bfee420b8edc3225a9529187.jpg',
    },
    {
      id: '3',
      name: 'Quan bo',
      price: 300,
      description: ' Product 3 description Product 3 description Product 3 description Product 3 description',
      imgUrl:
        'https://file.hstatic.net/200000053174/file/cac-loai-ao-vest-nam_07a5c0b0bfee420b8edc3225a9529187.jpg',
    },
  ];

  isProductShown(id: string): boolean {
    return this.shownProductId === id;
  }

  showProduct(id: string) {
    this.shownProductId = this.isProductShown(id) ? '' : id;
  }
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}

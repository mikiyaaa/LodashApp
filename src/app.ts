import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import _ from 'lodash';

import { Product } from './product.model';

// サーバーから送られてきたデータ
const products = [
    {
        title: '商品1',
        price: 300,
    },
    {
        title: '商品2',
        price: 200,
    }
];

// Productクラスのインスタンスで再生成
// const loadedProducts = products.map(prod => {
//     return new Product(prod.title, prod.price);
// });

// サードパーティ'classTransformer'でProductクラスに変換
const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}

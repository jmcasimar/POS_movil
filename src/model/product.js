import {Model} from '@nozbe/watermelondb';
import {field, readonly, date, text, writer} from '@nozbe/watermelondb/decorators';

export default class Product extends Model {
  static table = 'products';

  @text('code') code;
  @field('name') name;
  @text('unit') unit;
  @field('price') price;
  @field('quantity') quantity;
  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;

  @writer async addProduct({code, name, unit, price, quantity}) {
    const newProduct = await this.collections.get('products').create(product => {
      product.code = code;
      product.name = name;
      product.unit = unit;
      product.price = price;
      product.quantity = quantity;
    });
    return newProduct;
  };

  @writer async remove(productId) {
    const myProduct = await this.collections.get('products').find(productId)
    await myProduct.destroyPermanently();
  };
};
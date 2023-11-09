import {Model} from '@nozbe/watermelondb';
import {field, readonly, date, immutableRelation, writer} from '@nozbe/watermelondb/decorators';

export default class Order extends Model {
  static table = 'orders';
  static associations = {
    customers: { type: 'belongs_to', key: 'customer_id' },
  }

  @field('total') total;
  @field('order') order;
  @field('payment') payment;
  @field('is_paid') is_paid;
  @immutableRelation('customers', 'customer_id') customer;
  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;

  @writer async addOrder({total, order_json, payment, is_paid, customer}) {
    const newOrder = await this.collections.get('orders').create(order => {
      order.total = total;
      order.order = order_json;
      order.payment = payment;
      order.is_paid = is_paid;
      order.customer = customer;
      order.discount = discount;
    });
    return newOrder;
  };
};
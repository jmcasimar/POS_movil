import {Model} from '@nozbe/watermelondb';
import { field, readonly, date, text, writer} from '@nozbe/watermelondb/decorators';

export default class Customer extends Model {
  static table = 'customers';

  @field('name') name;
  @text('email') email;
  @text('phone') phone;
  @field('discount') discount;
  @readonly @date('created_at') createdAt;
  @readonly @date('updated_at') updatedAt;

  @writer async addCustomer({name, email, phone, discount}) {
    const newCustomer = await this.collections.get('customers').create(customer => {
      customer.name = name;
      customer.email = email;
      customer.phone = phone;
      customer.discount = discount;
    });
    return newCustomer;
  };
};
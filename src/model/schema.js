import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'customers',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'discount', type: 'number' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
    tableSchema({
      name: 'products',
      columns: [
        { name: 'code', type: 'string'},
        { name: 'name', type: 'string'},
        { name: 'unit', type: 'string'},
        { name: 'price', type: 'number'},
        { name: 'quantity', type: 'number'},
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
    tableSchema({
      name: 'orders',
      columns: [
        { name: 'total', type: 'number'},
        { name: 'order', type: 'string' },
        { name: 'payment', type: 'string' },
        { name: 'is_paid', type: 'boolean' },
        { name: 'customer_id', type: 'string', isIndexed: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ]
    }),
  ],
});
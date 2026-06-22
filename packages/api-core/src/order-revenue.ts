type OrderRevenueLineItem = {
  amount: number;
  proration?: boolean;
};

type OrderRevenueSource = {
  subtotalAmount: number;
  items?: OrderRevenueLineItem[];
};

export type OrderProductRevenue = {
  amount: number;
  source: 'product_line_items' | 'order_subtotal';
};

export function getOrderProductRevenue(order: OrderRevenueSource): OrderProductRevenue | null {
  if (order.items && order.items.length > 0) {
    let amount = 0;

    for (const item of order.items) {
      if (!item.proration && item.amount > 0) {
        amount += item.amount;
      }
    }

    if (amount > 0) {
      return { amount, source: 'product_line_items' };
    }
  }

  return order.subtotalAmount > 0
    ? { amount: order.subtotalAmount, source: 'order_subtotal' }
    : null;
}

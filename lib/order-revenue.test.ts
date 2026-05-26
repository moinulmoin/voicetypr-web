import { describe, expect, it } from 'vitest';
import { getOrderProductRevenue } from './order-revenue';

describe('getOrderProductRevenue', () => {
  it('uses Polar product line item amounts before discounts and taxes', () => {
    expect(
      getOrderProductRevenue({
        subtotalAmount: 3900,
        items: [{ amount: 3900, proration: false }],
      }),
    ).toEqual({ amount: 3900, source: 'product_line_items' });
  });

  it('sums non-proration product items when Polar sends multiple product lines', () => {
    expect(
      getOrderProductRevenue({
        subtotalAmount: 9800,
        items: [
          { amount: 3900, proration: false },
          { amount: 5900, proration: false },
          { amount: 500, proration: true },
        ],
      }),
    ).toEqual({ amount: 9800, source: 'product_line_items' });
  });

  it('falls back to Polar subtotal when line items are unavailable', () => {
    expect(getOrderProductRevenue({ subtotalAmount: 9900 })).toEqual({
      amount: 9900,
      source: 'order_subtotal',
    });
  });

  it('returns null when Polar does not provide a positive product amount', () => {
    expect(
      getOrderProductRevenue({
        subtotalAmount: 0,
        items: [{ amount: 0, proration: false }],
      }),
    ).toBeNull();
  });
});

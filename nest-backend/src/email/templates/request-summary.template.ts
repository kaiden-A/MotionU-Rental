export interface RentalRequestEmailProduct {
  name: string;
  quantity: number;
  ratePerDay: number;
  subtotal: number;
}

export function rentalRequestSummaryTemplate(params: {
  requestId: string;
  customerEmail: string;
  startDate: Date;
  endDate: Date;
  rentalDays: number;
  products: RentalRequestEmailProduct[];
  totalAmount: number;
}) {
  const {
    requestId,
    startDate,
    endDate,
    rentalDays,
    products,
    totalAmount,
  } = params;

  return `
    <h2>Rental Request Summary</h2>

    <p><strong>Request ID:</strong> ${requestId}</p>

    <p>
      <strong>Rental Period:</strong><br/>
      ${startDate.toDateString()} → ${endDate.toDateString()}
      (${rentalDays} days)
    </p>

    <table border="1" cellpadding="8" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th align="left">Product</th>
          <th align="right">Qty</th>
          <th align="right">Rate / Day</th>
          <th align="right">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        ${products
          .map(
            p => `
              <tr>
                <td>${p.name}</td>
                <td align="right">${p.quantity}</td>
                <td align="right">RM ${p.ratePerDay.toFixed(2)}</td>
                <td align="right">RM ${p.subtotal.toFixed(2)}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    </table>

    <p style="margin-top:16px;">
      <strong>Total Amount:</strong> RM ${totalAmount.toFixed(2)}
    </p>

    <p>
      Status: <strong>PENDING</strong><br/>
      We will notify you once your request has been reviewed.
    </p>

    <p>Thank you for choosing our rental service.</p>
  `;
}
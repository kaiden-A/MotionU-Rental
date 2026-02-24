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
  status: string;

  pickupLocation: string;
  pickupDateTime: Date;

  // optional but recommended
  returnLocation?: string;
  returnDateTime?: Date;

  products: RentalRequestEmailProduct[];
  totalAmount: number;
}) {
    const {
        requestId,
        startDate,
        endDate,
        rentalDays,
        status,
        pickupLocation,
        pickupDateTime,
        returnLocation,
        returnDateTime,
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

        <h3>Pickup & Return Details</h3>

        <p>
        <strong>Pickup Location:</strong><br/>
        ${pickupLocation}
        </p>

        <p>
        <strong>Pickup Date & Time:</strong><br/>
        ${pickupDateTime.toLocaleString()}
        </p>

        ${
        returnLocation && returnDateTime
            ? `
            <p>
                <strong>Return Location:</strong><br/>
                ${returnLocation}
            </p>

            <p>
                <strong>Return Date & Time:</strong><br/>
                ${returnDateTime.toLocaleString()}
            </p>
            `
            : ''
        }

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
        Status: <strong>${status}</strong><br/>
        We will notify you once your request has been reviewed.
        </p>

        <p>Thank you for choosing our rental service.</p>
    `;
}
🛠 Requirements
User enters total debt amount
User enters interest rate
The app will display how many normal payments it will take to be debt-free
There is a "Make a payment" field. The user can set the payment amount. It will calculate the payment against the interest and deduct it from the total debt amount
You will require a 1% minimum payment on the principal.
Require that the user cannot pay less than the minimum
Every time the user makes a payment, you will record that payment and show it in a list of payments, while reducing the overall balance.
Every time the user makes a payment, you must first calculate the interest. We will calculate interest annually.
The app must include at least two (2) components
A component for the form (where a user enters the numbers).
A component for payment history

⚖️ Example:
The user enters an interest rate of 9.5%. The total loan amount they enter is $38,000
Interest = (0.095 / 12) _ 38,000
Interest: $300.83
You will require a 1% minimum payment on the principal.
Principal = 38,000 _ 1%
Principal = $380
TOTAL PAYMENT: $680.83
When the user clicks "Submit Payment" you will log this payment in a list and then adjust the balance.

The new balance would be:

New Balance = Previous Balance - Last Principal Payment
New Balance = $37,620
Overpayment

A user can pay more on the principal. 1% principal payment is required, but more can be added and it will be calculated appropriately. Using the example above, let's make a 2nd payment.

Balance = $37,620
Interest = $297.82
Required Principal: $376.20
Minimum Payment: $674.02
Total user payment (user enters this amount): $852
Principal = $852 - $297.82
Principal: $554.18
New Balance = New Balance - Principal Payment
New Balance = $37,065.82

type Props = {
  totalPrice: number
}

function OrderSummary({ totalPrice }: Props) {
  return <h2>총 금액: {totalPrice}원</h2>
}

export default OrderSummary

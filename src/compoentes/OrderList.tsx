type Order = {
  id: number
  name: string
  price: number
}

type Props = {
  orders: Order[]
  onRemove: (id: number) => void
}

function OrderList({ orders, onRemove }: Props) {
  return (
    <ul>
      {orders.map(order => (
        <li key={order.id}>
          {order.name} - {order.price}원
          <button
            style={{ marginLeft: 8 }}
            onClick={() => onRemove(order.id)}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  )
}

export default OrderList

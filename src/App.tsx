import { useState } from 'react'
import OrderList from './compoentes/OrderList'
import OrderSummary from './compoentes/OrderSummary'

type Order = {
  id: number
  name: string
  price: number
}

function App() {
  const [orders, setOrders] = useState<Order[]>([])

  const addOrder = () => {
    const newOrder: Order = {
      id: Date.now(),
      name: '아메리카노',
      price: 4500,
    }

    setOrders([...orders, newOrder])
  }

  const removeOrder = (id: number) => {
    setOrders(orders.filter(order=>order.id !== id))
  }

  const totalPrice = orders.reduce((sum, order) => {
    return sum + order.price
  }, 0)

  return (
    <div style={{ padding: 20 }}>
      <h1>POS Playground</h1>

      <button onClick={addOrder} >주문 추가</button>

      <OrderList orders={orders} onRemove={removeOrder}/>
      <OrderSummary totalPrice={totalPrice} />
    </div>
  )
}

export default App
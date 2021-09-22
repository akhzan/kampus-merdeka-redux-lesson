import { Card, CardContent, Divider } from '@mui/material'
import { useSelector } from 'react-redux'
import { PRODUCTS } from './config'

const Success = () => {
  const { selectedProduct } = useSelector((state) => state.product)
  const product = PRODUCTS.find((product) => product.code === selectedProduct)
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card>
        {product ? (
          <CardContent>
            <h4>Congratulations,</h4>
            <p>You have chosen our awesome product.</p>
            <Divider light />
            <h4 style={{ marginTop: '2rem' }}>{product.name}</h4>
            <p>{product.description}</p>
          </CardContent>
        ) : (
          <CardContent>No product chosen.</CardContent>
        )}
      </Card>
    </div>
  )
}

export default Success

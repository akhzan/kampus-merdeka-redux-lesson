import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, CardContent, Modal, Radio } from '@mui/material'
import { PRODUCTS } from './config'
import { selectProduct } from './reducers/product'
import { Box } from '@mui/system'
import { useHistory } from 'react-router-dom'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  backgroundColor: 'white',
  boxShadow: 24,
  border: 0,
  outline: 'none',
  p: 4,
}

function Home() {
  const history = useHistory()
  const product = useSelector((state) => state.product)
  const { selectedProduct } = product
  const dispatch = useDispatch()
  console.log('selectedProduct: ', selectedProduct, !!selectedProduct)
  return (
    <div style={{ padding: '1rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>Logo</div>
        <nav>
          <a href='/' style={{ marginRight: '0.5rem' }}>
            About
          </a>
          <a href='/'>Discover</a>
        </nav>
      </header>
      <div style={{ padding: '1rem 200px' }}>
        <section>
          <Card style={{ textAlign: 'center' }}>
            <CardContent>
              <h1>Bamboo Monitor Riser</h1>
              <p>This is a description of Bamboo Monitor Riser</p>
            </CardContent>
          </Card>
          <Card style={{ marginTop: '2rem' }}>
            <CardContent>
              <h3>About this project</h3>
              <p>This is a description of Bamboo Monitor Riser</p>
              {PRODUCTS.map((product) => (
                <Card key={product.code} style={{ marginBottom: '1rem' }}>
                  <CardContent>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{product.stock} left</div>
                      <Button variant='contained' onClick={() => dispatch(selectProduct(product.code))}>
                        Select Product
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </section>
        <Modal
          open={!!selectedProduct}
          onClose={() => dispatch(selectProduct(null))}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <h3>Back this project</h3>
            <p>Want to support us in bringing this awesome stand to the world?</p>
            {PRODUCTS.map((product) => (
              <Card key={product.code} style={{ marginBottom: '1rem' }}>
                <CardContent>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Radio
                      checked={selectedProduct === product.code}
                      onChange={() => dispatch(selectProduct(product.code))}
                      value='a'
                      name='radio-buttons'
                      inputProps={{ 'aria-label': 'A' }}
                    />
                    <div>
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                    </div>
                  </div>
                  {selectedProduct === product.code && (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      <Button variant='contained' onClick={() => history.push('/success')}>
                        Continue
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default Home

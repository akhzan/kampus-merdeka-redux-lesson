import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, CardContent, Modal, Radio } from '@mui/material'
import { PRODUCTS } from './config'
import { fetchProducts, selectProduct } from './reducers/product'
import { Box } from '@mui/system'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

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
  const { selectedProduct, products, loading, error } = product
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const renderPokemonData = () => (
    <Card style={{ marginTop: '2rem' }}>
      <CardContent>
        <h3>About this project</h3>
        <p>This is a description of Bamboo Monitor Riser</p>
        {products.map((product) => (
          <Card key={product.id} style={{ marginBottom: '1rem' }}>
            <CardContent>
              <img src={product.ThumbnailImage} alt='' style={{ width: '64px', height: 'auto' }} />
              <h4>{product.name}</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ color: 'gray' }}>#{product.number}</div>
                <Button variant='contained' onClick={() => dispatch(selectProduct(product.id))}>
                  Select Pokemon
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
  const renderContent = () => {
    if (loading) return null
    return error ? (
      <Card style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>
        <p>{error}</p>
      </Card>
    ) : (
      renderPokemonData()
    )
  }
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
          {loading && <div>Loading...</div>}
          {renderContent()}
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
            {products.length &&
              [products[0], products[1], products[2]].map((product) => (
                <Card key={product.id} style={{ marginBottom: '1rem' }}>
                  <CardContent>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                      <Radio
                        checked={selectedProduct === product.id}
                        onChange={() => dispatch(selectProduct(product.id))}
                        value='a'
                        name='radio-buttons'
                        inputProps={{ 'aria-label': 'A' }}
                      />
                      <div>
                        <img src={product.ThumbnailImage} alt='' style={{ width: '64px', height: 'auto' }} />
                        <h4>{product.name}</h4>
                      </div>
                    </div>
                    {selectedProduct === product.id && (
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

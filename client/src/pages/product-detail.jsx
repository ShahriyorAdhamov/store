import React, { useEffect } from 'react'
import Loading from '../components/loading'
import { fetchOneProduct } from '../slices/products'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

function ProductDetail() {
  const dispatch = useDispatch();
  const {product, isLoading} = useSelector(state => state.products)
  const {id} = useParams()
  useEffect(() => {
    dispatch(fetchOneProduct({id}))
  }, [dispatch, id])
  return (
    <>
      { isLoading? 
        <Loading/> 
        :
        <div>
            <div>
              {product?.id}
            </div>
            <div>
                
            </div>
            <div>
                
            </div>
            
        </div>}
    </>

  )
}

export default ProductDetail
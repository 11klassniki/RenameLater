import * as React from 'react'
import ProductCard from './ProductCard'

import Box from '@mui/material/Box'

const Presentation = (props) => {
  const items = [
    {
      id: 1,
      title: 'Doge',
      shortDescription: 'A dog of type X that is Y years old',
    },
    {
      id: 2,
      title: 'Catto',
      shortDescription: 'A cat of type A that likes food',
    },
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />
      })}
    </Box>
  )
}

export default Presentation

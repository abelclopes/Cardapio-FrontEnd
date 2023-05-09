import { Box, Typography } from '@mui/material';
import { CardItem } from 'components/card/card';
import { useFoodData } from 'hooks/useFoodData';
import { useEffect, useState } from 'react';

import styles from './FoodComponent.scss';

export function FoodComponent() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  return (
    <Box className="container">
        <Typography variant="h1">Cardápio</Typography>
        <Box className="card-grid">
          {data?.map( x =>
              <CardItem 
                image={x.image}
                title={x.title}
                price={x.price}
              />
            )}
        </Box>
    </Box>
  );
}

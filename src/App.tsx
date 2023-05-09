
import { Box, Typography } from '../node_modules/@mui/material/index';
import './App.css'
import { CardItem } from './components/card/card'
import { useFoodData } from './hooks/useFoodData';
import { FoodData } from './interface/FoodData';
import { FoodComponent } from 'pages/components/FoodComponent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function App() {
   return (
     <QueryClientProvider client={queryClient}>
       <FoodComponent />
     </QueryClientProvider>
   )
}


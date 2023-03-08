import { Routes as AllRoutes, Route } from 'react-router-dom';

import { BrazilCup } from '../pages/BrazilCup';
import { BrazilianChampionship } from '../pages/brazilianChampionship';

export function Routes() {
    return (
        <AllRoutes>
            <Route path='/campeonato-brasileiro' element={<BrazilianChampionship />} />
            <Route path='/copa-do-brasil' element={<BrazilCup />} />
        </AllRoutes>
    )
}
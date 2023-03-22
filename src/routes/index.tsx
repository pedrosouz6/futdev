import { Routes as AllRoutes, Route } from 'react-router-dom';

import { BrazilianChampionship } from '../pages/BrazilianChampionship';

export function Routes() {
    return (
        <AllRoutes>
            <Route path='*' element={<BrazilianChampionship />} />
            <Route path='/campeonato-brasileiro' element={<BrazilianChampionship />} />
        </AllRoutes>
    )
}
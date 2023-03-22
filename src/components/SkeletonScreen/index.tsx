import Skeleton from 'react-loading-skeleton';

import { 
    DescriptionSkeletionScreen,
    TitleImageSkeletonScreen,
    TableSkeletonScreen
} from './style';

export function SkeletonScreen() {
    return (
        <>
            <TitleImageSkeletonScreen>
                <Skeleton width={100} height={100} borderRadius={100} inline={true} />
                <Skeleton width='80%' height='30px'  />
            </TitleImageSkeletonScreen>
            
            <DescriptionSkeletionScreen>
                <Skeleton width='100%' height='50px' />
            </DescriptionSkeletionScreen>


            <TableSkeletonScreen>
                <Skeleton count={20} width='100%' height='55px' />
            </TableSkeletonScreen>
        </>
    )
}
import { CommoditiesItem } from './CommoditiesItem';

import * as S from './styles';

interface CommoditiesListProps {
  commodities: {
    id: string;
    part: string;
    pag: string;
    ton: string;
    price: string;
    balance: string;
    image: string;
  }[];
}

export const CommoditiesList = ({ commodities }: CommoditiesListProps) => {
  return (
    <S.Container>
      {commodities.map(commodity => (
        <CommoditiesItem key={commodity.id} commodity={commodity} />
      ))}
    </S.Container>
  );
};

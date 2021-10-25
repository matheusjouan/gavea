import * as S from './styles';

interface CommoditiesItemProps {
  commodity: {
    part: string;
    pag: string;
    ton: string;
    price: string;
    balance: string;
    image: string;
  };
}

export const CommoditiesItem = ({ commodity }: CommoditiesItemProps) => {
  return (
    <S.Container balance={commodity.balance}>
      <img src={commodity.image} alt="" />
      <S.PartName>{commodity.part}</S.PartName>
      <S.Date>{commodity.pag}</S.Date>
      <S.Weight>{commodity.ton}</S.Weight>
      <S.Price balance={commodity.balance}>{commodity.price}</S.Price>
    </S.Container>
  );
};

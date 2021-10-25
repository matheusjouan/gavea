import { CommoditiesList } from '../../components/CommoditiesList';
import { GridLayout } from '../../components/GridLayout';
import { Header } from '../../components/Header';
import { UserCard } from '../../components/UserCard';

import commoditiesList from '../../data/commoditiesList';

const Dashboard = () => {
  return (
    <>
      <Header />
      <GridLayout>
        <UserCard />
        <CommoditiesList commodities={commoditiesList} />
      </GridLayout>
    </>
  );
};

export default Dashboard;

import WelcomeApp from '../../components/WelcomeApp';
import welcomeData from '../../data/welcomeData';

const Welcome = () => {
  return <WelcomeApp {...welcomeData} />;
};

export default Welcome;

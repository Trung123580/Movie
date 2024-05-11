import HomeApp from '@/components/HomeApp';
import { getSlides } from '@/service';
const Home = async () => {
  const dataSlides = await getSlides();
  return <HomeApp dataSlides={dataSlides} />;
};
export default Home;

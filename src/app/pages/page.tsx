import { getNewMovie } from '@/service';

const page = async () => {
  const response = await getNewMovie();
  console.log(response);
  return <div>pages</div>;
};
export default page;

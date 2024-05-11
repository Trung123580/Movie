'use client';
import { useRouter } from 'next/navigation';
const notFound = () => {
  const router = useRouter();
  router.back();
  return <></>;
};

export default notFound;

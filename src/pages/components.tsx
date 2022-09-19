import { devOnly } from '@/utils/devOnly';

const Components = () => {
  return <div>Hey</div>;
};

export default Components;

export const getServerSideProps = devOnly;

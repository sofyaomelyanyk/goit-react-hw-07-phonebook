import { ThreeDots } from 'react-loader-spinner';
import s from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName={s.spiner}
      visible={true}
    />
  );
};

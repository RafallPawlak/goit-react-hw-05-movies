import style from './NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.messege}>Page not found</div>
      </div>
    </>
  );
};

export default NotFound;
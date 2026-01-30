import { useNavigate } from 'react-router';
import moono404 from '@/assets/images/404-moono.png';
import Header from '@/components/Header';
import Layout from '../layout/Layout';
import * as css from './style/NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  const getRedirectPath = () => {
    const userRole = localStorage.getItem('userRole');

    if (!userRole) return '/';
    if (userRole === 'ADMIN') return '/chat/admin';

    return '/home';
  };

  return (
    <Layout>
      <Header />
      <div className={css.wrapper}>
        <img src={moono404} alt="404" className={css.image} />

        <h1 className={css.code}>404</h1>
        <p className={css.text}>페이지를 찾을 수 없습니다.</p>

        <button
          type="button"
          className={css.button}
          onClick={() => navigate(getRedirectPath())}
        >
          홈으로 이동
        </button>
      </div>
    </Layout>
  );
}

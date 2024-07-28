import { useRouter } from 'next/router';
import { useEffect } from 'react';
const withAuth = (WrappedComponent) => {
  const Auth = (props) => {
    const router = useRouter();
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/Login');
      }
    }, []);
    return <WrappedComponent {...props} />;
  };
  return Auth;
};
export default withAuth;

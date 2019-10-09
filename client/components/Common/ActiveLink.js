import { useRouter } from 'next/router';
import { Link } from '../../routes/routes';

export default function ActiveLink({ children, route, params }) {
  const router = useRouter();

  const style = {
    color: router.pathname === route ? 'red' : 'black',
    marginRight: '10px',
  };

  return (
    <Link route={route} params={params ? params : '' }>
      <a style={style}>{ children }</a>
    </Link>
  );
}

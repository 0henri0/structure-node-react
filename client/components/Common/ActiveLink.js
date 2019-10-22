import { useRouter } from 'next/router';
import { Link } from '../../routes/routes';

export default function ActiveLink({ children, route, params }) {
  const router = useRouter();
  const style = {
    color: router.asPath === route ? 'red' : '',
    marginRight: '10px',
  };

  return (
    <Link route={route} params={params ? params : '' }>
      <a className="nav-link" role="button" style={style}>{ children }</a>
    </Link>
  );
}

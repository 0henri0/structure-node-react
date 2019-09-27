import { useRouter } from 'next/router';

export default function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    color: router.pathname === href ? 'red' : 'black',
    'marginRight': '10px',
  };
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <li className="nav-item"><a className="nav-link" href="" onClick={ handleClick } style={style}>{ children }</a></li>
  );
}
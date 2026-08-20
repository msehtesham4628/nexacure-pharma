import { navigate } from '../routes';

export default function RouteLink({ to, onClick, children, ...props }) {
  return <a href={to} onClick={(event) => { event.preventDefault(); navigate(to); onClick?.(event); }} {...props}>{children}</a>;
}

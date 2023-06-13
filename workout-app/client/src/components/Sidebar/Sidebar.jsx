import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar = ({children}) => {
  const {sidebar, sidebarNav} = styles;

  return (
    <aside className={sidebar}>
      <ul className={sidebarNav}>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/dashboard/posts">Posts</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </aside>
  )
}

export default Sidebar
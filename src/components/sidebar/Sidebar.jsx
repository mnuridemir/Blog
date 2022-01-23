import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar' >
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            <p className='sidebarDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iure quam ratione! Nulla veritatis ipsam qui repellendus at dicta, nisi sed exercitationem recusandae veniam fugiat beatae sunt minima obcaecati reprehenderit.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Style</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-github-square"></i>
            <i className="sidebarIcon fab fa-linkedin"></i>
            </div>
        </div>
    </div>
  )
}

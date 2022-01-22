import './sidebar.css';

export default function Sİdebar() {
  return (
    <div className='sidebar' >
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iure quam ratione! Nulla veritatis ipsam qui repellendus at dicta, nisi sed exercitationem recusandae veniam fugiat beatae sunt minima obcaecati reprehenderit.</p>
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

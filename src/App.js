import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as CatIcon } from './icons/cat.svg';
import { ReactComponent as DoveIcon } from './icons/dove.svg';
import { ReactComponent as DragonIcon } from './icons/dragon.svg';
import { ReactComponent as FishIcon } from './icons/fish.svg';
import { ReactComponent as HorseIcon } from './icons/horse.svg';
import { ReactComponent as KiwiBirdIcon } from './icons/kiwi-bird.svg';
import { ReactComponent as OtterIcon } from './icons/otter.svg';
import { ReactComponent as PawIcon } from './icons/paw.svg';
import { ReactComponent as SpiderIcon } from './icons/spider.svg';

import { CSSTransition } from "react-transition-group";


function App() {
  return (
     <Body>
          <Navbar>
              <NavItem icon={<PlusIcon />} />
              <NavItem icon={<BellIcon />} />
              <NavItem icon={<MessengerIcon />} />

              <NavItem icon={<CaretIcon />}>
                  <DropdownMenu/>
              </NavItem>
          </Navbar>
         <Header/>
         <Main/>
     </Body>
  );
}

function Body(props) {
    return (
        <div className="light"> {props.children} </div>
    );

}

function Header(props) {
    return (
        <header>
            <span className="logo">{<CatIcon/>}</span>
            <h1>Front-End Web Development,<br/>Fired Up</h1>
            <p>Flutter, Firebase, JavaScript, Node.js</p>
        </header>
    );

}

function Main() {
    return (
        <main>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim. Diam sit amet nisl suscipit adipiscing bibendum est. Tincidunt tortor aliquam nulla facilisi cras. Quis hendrerit dolor magna eget est lorem ipsum dolor. Gravida dictum fusce ut placerat orci. Vitae sapien pellentesque habitant morbi. Augue ut lectus arcu bibendum at varius vel pharetra. Et malesuada fames ac turpis. Tortor aliquam nulla facilisi cras fermentum odio eu. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Est velit egestas dui id ornare arcu. Proin fermentum leo vel orci porta non pulvinar. Posuere urna nec tincidunt praesent. Sit amet cursus sit amet dictum sit amet. Odio ut enim blandit volutpat maecenas volutpat blandit. Sit amet aliquam id diam maecenas.</p>
            <p>At consectetur lorem donec massa sapien faucibus et molestie ac. Consectetur purus ut faucibus pulvinar elementum integer enim neque. Nunc sed augue lacus viverra vitae congue eu consequat. Neque sodales ut etiam sit amet nisl purus in mollis. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Faucibus ornare suspendisse sed nisi. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Cras pulvinar mattis nunc sed. Senectus et netus et malesuada fames ac turpis egestas integer. Elementum tempus egestas sed sed risus pretium. Mauris a diam maecenas sed enim ut. Nisl vel pretium lectus quam id leo. Iaculis at erat pellentesque adipiscing commodo elit at. Nunc non blandit massa enim nec. Ullamcorper velit sed ullamcorper morbi tincidunt. Mi ipsum faucibus vitae aliquet nec ullamcorper. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a.</p>
            <p>Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Eu non diam phasellus vestibulum lorem. Est placerat in egestas erat imperdiet. Adipiscing tristique risus nec feugiat. Posuere morbi leo urna molestie at elementum eu. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Orci dapibus ultrices in iaculis nunc sed. Eu lobortis elementum nibh tellus. Faucibus turpis in eu mi bibendum. Libero nunc consequat interdum varius sit amet mattis. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. In fermentum et sollicitudin ac orci phasellus egestas. Elementum eu facilisis sed odio. Hendrerit gravida rutrum quisque non tellus. Vitae ultricies leo integer malesuada nunc vel risus. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Tincidunt augue interdum velit euismod in pellentesque massa placerat. Velit egestas dui id ornare arcu. Id donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
            <p>Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Sed elementum tempus egestas sed sed. Lectus magna fringilla urna porttitor rhoncus dolor. Porttitor eget dolor morbi non arcu risus quis varius quam. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Montes nascetur ridiculus mus mauris. Blandit massa enim nec dui nunc mattis enim ut tellus. Sed adipiscing diam donec adipiscing tristique risus nec. Justo nec ultrices dui sapien eget mi proin. Nam libero justo laoreet sit. Tristique magna sit amet purus. Venenatis a condimentum vitae sapien pellentesque. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Faucibus et molestie ac feugiat sed lectus vestibulum mattis.</p>
            <p>Et malesuada fames ac turpis egestas sed tempus. Duis at tellus at urna condimentum mattis pellentesque. Quis lectus nulla at volutpat. Auctor urna nunc id cursus. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Vulputate enim nulla aliquet porttitor lacus luctus accumsan. Sapien faucibus et molestie ac feugiat sed lectus. Fringilla ut morbi tincidunt augue interdum velit. Dui ut ornare lectus sit amet est placerat. Facilisi morbi tempus iaculis urna. Parturient montes nascetur ridiculus mus mauris vitae. Morbi tincidunt ornare massa eget. Amet massa vitae tortor condimentum. Diam vel quam elementum pulvinar etiam. Convallis tellus id interdum velit laoreet id donec ultrices. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Adipiscing enim eu turpis egestas. Et netus et malesuada fames ac turpis egestas maecenas. Urna cursus eget nunc scelerisque viverra mauris in aliquam.</p>
        </main>
    );
}

function DropdownMenu() {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, []);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
          <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
              <span className="icon-button">{props.leftIcon}</span>

              {props.children}

              <span className="icon-right">{props.rightIcon}</span>
          </a>
        );
    }

    return (
      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
          <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>

              <div className="menu">
                  <DropdownItem><h3>My Profile</h3></DropdownItem>
                  <hr/>
                  <DropdownItem
                      leftIcon={<CogIcon />}
                      rightIcon={<ChevronIcon />}
                      goToMenu="settings" >
                      <h3>Settings</h3>
                  </DropdownItem>
                  <DropdownItem
                      leftIcon={<PawIcon />}
                      rightIcon={<ChevronIcon />}
                      goToMenu="animals">
                      <h3>Animals</h3>
                  </DropdownItem>
              </div>

          </CSSTransition>

          <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>

              <div className="menu">
                  <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main"/>
                  <DropdownItem leftIcon={<BoltIcon />}><h3>Settings</h3></DropdownItem>
                  <DropdownItem leftIcon={<BoltIcon />}><h3>Settings</h3></DropdownItem>
                  <DropdownItem leftIcon={<BoltIcon />}><h3>Settings</h3></DropdownItem>
                  <DropdownItem leftIcon={<BoltIcon />}><h3>Settings</h3></DropdownItem>
                  <DropdownItem leftIcon={<BoltIcon />}><h3>Settings</h3></DropdownItem>
                  <DropdownItem leftIcon={<BoltIcon />}><h3>Settings</h3></DropdownItem>
                  <DropdownItem leftIcon={<BoltIcon />}><h3>Settings</h3></DropdownItem>
                  <DropdownItem leftIcon={<BoltIcon />}><h3>Settings</h3></DropdownItem>
              </div>

          </CSSTransition>

          <CSSTransition
              in={activeMenu === 'animals'}
              timeout={500}
              classNames="menu-secondary"
              unmountOnExit
              onEnter={calcHeight}>
              <div className="menu">
                  <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                      <h1>Animals</h1>
                  </DropdownItem>
                  <DropdownItem leftIcon={<CatIcon />}><h3>Cat</h3></DropdownItem>
                  <DropdownItem leftIcon={<DoveIcon />}><h3>Dove</h3></DropdownItem>
                  <DropdownItem leftIcon={<DragonIcon />}><h3>Dragon</h3></DropdownItem>
                  <DropdownItem leftIcon={<FishIcon />}><h3>Fish</h3></DropdownItem>
                  <DropdownItem leftIcon={<HorseIcon />}><h3>Horse</h3></DropdownItem>
                  <DropdownItem leftIcon={<KiwiBirdIcon />}><h3>Kiwi bird</h3></DropdownItem>
                  <DropdownItem leftIcon={<OtterIcon />}><h3>Otter</h3></DropdownItem>
                  <DropdownItem leftIcon={<SpiderIcon />}><h3>Spider</h3></DropdownItem>
              </div>
          </CSSTransition>
      </div>
    );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
      </a>
        {open && props.children}
    </li>
  );

}

export default App;

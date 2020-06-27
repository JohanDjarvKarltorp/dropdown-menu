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
      <Navbar>
          <NavItem icon={<PlusIcon />} />
          <NavItem icon={<BellIcon />} />
          <NavItem icon={<MessengerIcon />} />

          <NavItem icon={<CaretIcon />}>
              <DropdownMenu/>
          </NavItem>
      </Navbar>
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
                  <DropdownItem>My Profile</DropdownItem>
                  <DropdownItem
                      leftIcon={<CogIcon />}
                      rightIcon={<ChevronIcon />}
                      goToMenu="settings" >
                      Settings
                  </DropdownItem>
                  <DropdownItem
                      leftIcon={<PawIcon />}
                      rightIcon={<ChevronIcon />}
                      goToMenu="animals">
                      Animals
                  </DropdownItem>
              </div>

          </CSSTransition>

          <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>

              <div className="menu">
                  <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main"/>
                  <DropdownItem><h3>Settings</h3></DropdownItem>
                  <DropdownItem><h3>Settings</h3></DropdownItem>
                  <DropdownItem><h3>Settings</h3></DropdownItem>
                  <DropdownItem><h3>Settings</h3></DropdownItem>
                  <DropdownItem><h3>Settings</h3></DropdownItem>
                  <DropdownItem><h3>Settings</h3></DropdownItem>
                  <DropdownItem><h3>Settings</h3></DropdownItem>
                  <DropdownItem><h3>Settings</h3></DropdownItem>
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

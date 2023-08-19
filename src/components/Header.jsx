import { useState } from 'react';
import styled from "styled-components";
import searchIcon from '../assets/image/menu-search.png'
import userIcon from '../assets/image/user.png'
import { useNavigate } from 'react-router-dom';

const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

const MenuLabel = styled.label`
  // background-color: ${COLORS.primaryLight};
    position: relative;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
    z-index: 1000;
    box-shadow: rgba(182, 237, 200, 0.3) 0px 1rem 3rem;
    text-align: center;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`;

const NavBackground = styled.div`
  position: fixed;
  top: 0rem;
  right: 0rem;
  background-image: radial-gradient(
    ${COLORS.primaryDark},
    ${COLORS.primaryLight}
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "black")};
  width: 20px;
  height: 2px;
  display: inline-block;
  // margin-top: 3.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: black;
    width: 20px;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0px;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.4rem")};
    background-color:  ${(props) => (props.clicked ? "white" : "black")};
    transform: ${(props) =>
    props.clicked ? "rotate(135deg)" : "rotate(0)"};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.4rem")};
    background-color:  ${(props) => (props.clicked ? "white" : "black")};
    transform: ${(props) =>
    props.clicked ? "rotate(-135deg)" : "rotate(0)"};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.45rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "0.45rem")};
  }
`;

const NavigationBar = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled.a`
  display: inline-block;
  font-size: 2.5rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 0.5rem 1.5rem;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  cursor: pointer;
  &:hover,
  &:active {
    background-position: 100%;
    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

function Header() {
  // humberger menu
  const [clickMenu, setClickMenu] = useState(false);
  const handleClickMenu = () => setClickMenu(!clickMenu);

  const navigate = useNavigate();

  return (
    <div className='header'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <div 
            onClick={() => navigate("/home")}
            className='text-[48px] font-bold font-[sans] pb-2 pr-10 cursor-pointer'>React</div>
            <div
              className='p-2 px-4 text-lg font-medium cursor-pointer'
              onClick={() => navigate("/product")}
            >Product</div>
            <div className='p-2 px-4 text-lg font-medium cursor-pointer'
              onClick={() => navigate("/collection")}
            >Collection</div>
            <div className='p-2 px-4 text-lg font-medium cursor-pointer'>Professional</div>
          </div>
          <div className='flex items-center'>
            <div className='mr-7 cursor-pointer'>
              <img src={searchIcon} alt="searchIcon" />
            </div>
            <div className='mr-7 text-lg font-medium underline cursor-pointer'>EN</div>
            <div className='mr-7 cursor-pointer'>
              <img src={userIcon} alt="searchIcon" />
            </div>
            <>
              {/* humberger menu start */}
              <MenuLabel htmlFor="navi-toggle" onClick={handleClickMenu}>
                <Icon clicked={clickMenu ? true : false}>&nbsp;</Icon>
              </MenuLabel>
              <NavBackground
                clicked={clickMenu ? true : false}
                onClick={() => handleClickMenu()}
              >
                &nbsp;
              </NavBackground>

              <NavigationBar clicked={clickMenu ? true : false}>
                <List>
                  <li>
                    <ItemLink onClick={handleClickMenu}>Product</ItemLink>
                  </li>
                  <li>
                    <ItemLink onClick={handleClickMenu}>Collection</ItemLink>
                  </li>
                  <li>
                    <ItemLink onClick={handleClickMenu}>Professional</ItemLink>
                  </li>
                  <li>
                    <ItemLink onClick={handleClickMenu}>Get In Touch</ItemLink>
                  </li>
                </List>
              </NavigationBar>
              {/* humberger menu end */}
            </>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

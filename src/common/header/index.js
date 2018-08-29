import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreator} from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style.js';

const Header = (props) => {
  const {focused, handleInputFocus, handleInputBlur} = props;
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'>
          <i className='iconfont'>&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in={focused}
            timeout={200}
            classNames='slide'
          >
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe697;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writing'>
          <i className='iconfont'>&#xe62b;</i>
          写文章
        </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  );
}
const mapStateToProps = (state) => ({
  // focused:state.get('header').get('focused')
  focused: state.getIn(['header', 'focused'])
});

const mapDisptchToProps = (dispatch) => ({
  handleInputFocus() {
    dispatch(actionCreator.searchFocus());
  },
  handleInputBlur() {
    dispatch(actionCreator.searchBlur());
  }
});

export default connect(mapStateToProps, mapDisptchToProps)(Header);

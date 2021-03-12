import { Route, Switch, 
  useRouteMatch, NavLink, Redirect } from "react-router-dom";

import PushPage from './PushPage';
import Header from './Header';

function SubMenu() {

  let { path, url } = useRouteMatch();  

  const activeStyle = {
    color: '#2B90D9',
  };

  return (
    <>
    <div className="SubMenu">

      <p className="title">설정</p>
      
      <p className="subtitle">알림설정</p>

      <ul className="nav_ul">
        <li className="nav_li"><NavLink to={`${url}/push`} activeStyle={activeStyle} activeClassName="current"><p>푸시 알림 설정</p></NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/time`} activeStyle={activeStyle} activeClassName="current">방해금지 시간 설정</NavLink></li>
      </ul>

      <p className="subtitle">사용자 설정</p>

      <ul className="nav_ul">
        <li className="nav_li"><NavLink to={`${url}/account`} activeStyle={activeStyle} activeClassName="current"><p>계정관리</p></NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/etc`} activeStyle={activeStyle} activeClassName="current">기타설정</NavLink></li>
      </ul>

      <p className="subtitle">기타</p>

      <ul className="nav_ul">
        <li className="nav_li"><NavLink to={`${url}/version`} activeStyle={activeStyle} activeClassName="current"><p>버전 정보</p></NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/logout`} activeStyle={activeStyle} activeClassName="current">로그아웃</NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/delete`} activeStyle={activeStyle} activeClassName="current">탈퇴하기</NavLink></li>
      </ul>

    </div>

    <div className="Main">
      <Header />

      <div className="MainPage sub">
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/push`} />
          </Route>
          <Route path={`${path}/push`}>
            <PushPage />
          </Route>
          <Route path={`${path}/time`}>
            <PushPage />
          </Route>
          <Route path={`${path}/account`}>
            <PushPage />
          </Route>
          <Route path={`${path}/etc`}>
            <PushPage />
          </Route>
          <Route path={`${path}/version`}>
            <PushPage />
          </Route>
          <Route path={`${path}/logout`}>
            <PushPage />
          </Route>
          <Route path={`${path}/delete`}>
            <PushPage />
          </Route>
          
        </Switch>
      </div>

    </div>

    
    </>
  );
}

export default SubMenu;

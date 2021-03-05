import { Route, Switch, 
  useRouteMatch, NavLink, Redirect } from "react-router-dom";

import TotalPage from './TotalPage';
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
        <li className="nav_li"><NavLink to={`${url}/total`} activeStyle={activeStyle} activeClassName="current"><p>푸시 알림 설정</p></NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/newcustomer`} activeStyle={activeStyle} activeClassName="current">방해금지 시간 설정</NavLink></li>
      </ul>

    </div>

    <div className="Main">
      <Header />

      <div className="MainPage sub">
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/total`} />
          </Route>
          <Route path={`${path}/total`}>
            <TotalPage />
          </Route>
          <Route path={`${path}/newcustomer`}>
            <TotalPage />
          </Route>
        </Switch>
      </div>

    </div>

    
    </>
  );
}

export default SubMenu;

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

      <p className="title">통계</p>
      <p className="subtitle">구분</p>

      <ul className="nav_ul">
        <li className="nav_li"><NavLink to={`${url}/total`} activeStyle={activeStyle} activeClassName="current"><p>종합</p></NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/newcustomer`} activeStyle={activeStyle} activeClassName="current">신규고객</NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/revisit`} activeStyle={activeStyle} activeClassName="current">재방문고객</NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/secession`} activeStyle={activeStyle} activeClassName="current">이탈고객</NavLink></li>
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
          <Route path={`${path}/revisit`}>
            <TotalPage />
          </Route>
          <Route path={`${path}/secession`}>
            <TotalPage />
          </Route>
        </Switch>
      </div>

    </div>

    
    </>
  );
}

export default SubMenu;

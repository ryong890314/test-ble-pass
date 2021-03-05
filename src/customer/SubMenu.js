import { Route, Switch, 
  useRouteMatch, NavLink, Redirect } from "react-router-dom";

import TotalPage from './TotalPage';
import Header from './Header';
import List from './List';
import Detail from './Detail';

function SubMenu() {

  let { path, url } = useRouteMatch();  

  const activeStyle = {
    color: '#2B90D9',
  };

  return (
    <>
    <div className="SubMenu">

      <p className="title">고객</p>
      <p className="subtitle">구분</p>

      <ul className="nav_ul">
        <li className="nav_li"><NavLink to={`${url}/total`} activeStyle={activeStyle} activeClassName="current"><p>전체고객</p></NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/new`} activeStyle={activeStyle} activeClassName="current">신규고객</NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/revisit`} activeStyle={activeStyle} activeClassName="current">단골고객</NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/secession`} activeStyle={activeStyle} activeClassName="current">이탈고객</NavLink></li>
      </ul>

    </div>

    <div className="Main">
      <Header />

      <div className="MainPage sub flex_container">
        
        <List />

        <Detail />

        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/total`} />
          </Route>
          <Route path={`${path}/total`}>
            <TotalPage />
          </Route>
          <Route path={`${path}/new`}>
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

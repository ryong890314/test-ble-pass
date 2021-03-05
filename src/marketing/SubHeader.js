import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import { Route, Switch,
  useRouteMatch, NavLink, Redirect } from "react-router-dom";

import TotalPage from './TotalPage';

function SubHeader() {

  let { path, url } = useRouteMatch();  

  const activeStyle = {
    color: '#2B90D9',
  };

  useEffect(() => {
    function tick() {
      const date = new Date();
      const element = (
        <>
        <p className="date">{ date.getFullYear() + "-" + ("00" + (date.getMonth()+1)).slice(-2) + "-" + ("00" + date.getDate()).slice(-2)}</p>
        <span className="time">{date.toLocaleTimeString('en-GB')}</span>
        </>
      );
      ReactDOM.render(element, document.getElementById('timer'));
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
    <div className="SubHeader">
      <ul className="visit_ul">
        <li className="visit_li">
          <p className="stat_title">전체 마케팅</p>
          <p className="stat_text">10</p>
        </li>
        <li className="visit_li">
          <p className="stat_title">진행중인 마케팅</p>
          <p className="stat_text">3</p>
        </li>
        <li className="visit_li">
          <p className="stat_title">종료된 마케팅</p>
          <p className="stat_text">7</p>
        </li>
        <li className="visit_li">
          <span className="datetime" id="timer">
            <p className="date dumy">0000-00-00</p>
            <span className="time dumy">00:00:00</span>
          </span>
        </li>
      </ul>

      <ul className="nav_ul">
        <li className="nav_li"><NavLink to={`${url}/total`} activeStyle={activeStyle} activeClassName="current">전체</NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/proceeding`} activeStyle={activeStyle} activeClassName="current">진행중</NavLink></li>
        <li className="nav_li"><NavLink to={`${url}/end`} activeStyle={activeStyle} activeClassName="current">종료</NavLink></li>
      </ul>

    </div>

    <div className="MainPage">
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/total`} />
        </Route>
        <Route path={`${path}/total`}>
          <TotalPage />
        </Route>
        <Route path={`${path}/proceeding`}>
          <TotalPage />
        </Route>
        <Route path={`${path}/end`}>
          <TotalPage />
        </Route>
      </Switch>
    </div>

    </>
  );
}

export default SubHeader;
import { Route, Switch, useRouteMatch, NavLink, Redirect } from "react-router-dom";
import Detail from './Detail';

function List() {

  let { url } = useRouteMatch();

  let default_id = marketingList.marketings[0].id;

  return (
    <>
      <div className="List card">

        {marketingList.marketings.map(marketing => {
          return (
            <>
            <div className="marketing_list">
              <NavLink to={`${url}/${marketing.id}`} activeClassName="current">
                <div className="marketing_header">
                  <p className="stat_title">제목</p>
                  <p className="stat_text">{marketing.title}</p>
                </div>
                <div className="marketing_info">
                  <div className="info_box_left">
                    <div className="stat">
                      <div className="stat_title">등록날짜</div>
                      <div className="stat_text">{marketing.date}</div>
                    </div>
                    <div className="stat">
                      <p className="stat_title">전송</p>
                      <p className="stat_text">{marketing.send}</p>
                    </div>
                    <div className="stat">
                      <p className="stat_title">조회</p>
                      <p className="stat_text">{marketing.read}</p>
                    </div>
                    <div className="stat">
                      <p className="stat_title">클릭</p>
                      <p className="stat_text">{marketing.click}</p>
                    </div>
                  </div>
                  <div className="info_box_right">
                    <div className="goal">
                      <p className="stat_title">목표달성</p>
                      <p className="stat_text">{marketing.goal}</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
           </>
          );
        })}

      </div>
      
       <Switch>
          <Route exact path={url}>
            <Redirect to={`${url}/${default_id}`} />
          </Route>
          <Route path={`${url}/:id`} children={<Detail />}/>
        </Switch>
      
    </>
  );

}

const marketingList = {
  "marketings" : [
    {"id": 1, "title": "마케팅 A", "date": "2021-01-21", "send": 200, "read": "25.0%", "click": "10.0%", "goal": "20.0%"},
    {"id": 2, "title": "마케팅 B", "date": "2021-01-10", "send": 350, "read": "30.0%", "click": "25.0%", "goal": "24.5%"},
  ]
}

export default List;

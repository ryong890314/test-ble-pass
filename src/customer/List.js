import { Route, Switch, useRouteMatch, NavLink } from "react-router-dom";
  import Detail from './Detail';
  import profile_img from '../images/profile_img.png';

function List() {

  let { url } = useRouteMatch();  
  
  return (
    <>
      <div className="List">

        {customerList.customers.map(customer => {
          return (
            <>
            <div className="user_list">
              <NavLink to={`${url}/${customer.id}`} activeClassName="current">
                <img className="profile_img" src={profile_img} alt="profile_img" />
                <div className="profile_info">
                  <p className="name">{customer.name}</p>
                  <p className="phone_number">{customer.phone_number}</p>
                </div>
              </NavLink>
            </div>
           </>
          );
        })}

      </div>
      
       <Switch>
          <Route path={`${url}/:id`} children={<Detail />} />
        </Switch>
      
    </>
  );

}

const customerList = {
  "customers" : [
    {"id": 1, "name" : "김*훈", "phone_number" : "010-****-1234"},
    {"id": 2, "name" : "박*수", "phone_number" : "010-****-4567"},
    {"id": 3, "name" : "이*훈", "phone_number" : "010-****-8901"},
    {"id": 4, "name" : "박*지", "phone_number" : "010-****-2345"},
    {"id": 5, "name" : "정*훈", "phone_number" : "010-****-6789"},
    {"id": 6, "name" : "김*진", "phone_number" : "010-****-0123"},
    {"id": 7, "name" : "김*호", "phone_number" : "010-****-4567"},
    {"id": 8, "name" : "최*지", "phone_number" : "010-****-8901"},
  ]
}

export default List;

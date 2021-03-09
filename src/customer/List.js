import { Route, Switch, useRouteMatch, NavLink } from "react-router-dom";
  import Detail from './Detail';

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
                <p className="name">{customer.name}</p>
                <p className="phone_number">{customer.phone_number}</p>
              </NavLink>
            </div>
           </>
          );
        })}

      </div>
      
       <Switch>
         {/* <Redirect to={`${url}/:id`} /> */}
          <Route path={`${url}/:id`} children={<Detail />} />
        </Switch>
      
    </>
  );

}

const customerList = {
  "customers" : [
    {"id": 55, "name" : "홍*동", "phone_number" : "010-****-4567"},
    {"id": 59, "name" : "김*훈", "phone_number" : "010-****-8484"},
  ]
}

export default List;

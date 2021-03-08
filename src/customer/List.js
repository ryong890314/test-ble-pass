import { Route, Switch, Link,
  useRouteMatch, NavLink, Redirect } from "react-router-dom";
  import Detail from './Detail';

function List() {

  let { path, url } = useRouteMatch();  
  
  return (
    <>
      <div className="List">

        {customerList.customers.map(customer => {
          return (
            <>
            <div className="user_list">
              <Link to={`${url}/${customer.id}`}>
                <p className="name">{customer.name}</p>
                <p className="phone_number">{customer.phone_number}</p>
              </Link>
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
    {"id": 1, "name" : "홍*동", "phone_number" : "010-****-4567"},
    {"id": 2, "name" : "김*훈", "phone_number" : "010-****-8484"},
  ]
}

export default List;

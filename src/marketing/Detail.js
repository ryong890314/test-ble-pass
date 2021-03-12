import { useParams } from "react-router-dom";
import profile_img from '../images/profile_img.png';

function Detail() {

  let { id } = useParams();

  let marketingInfo = marketingList.marketings.filter(e => e.id === parseInt(id));

  return (
    <>
      <div className="Detail wide">
        <div className="MainPage initial">

        {/* <h3>ID: {id}</h3>
        <p>{customerInfo[0].name}</p> */}

          <div className="layout_1">
            <p className="title bottom">제목</p>
            <div className="customer_info">
                <p className="name">{marketingInfo[0].title}</p>
            </div>
            
            <div className="layout_header bottom">
              <ul className="visit_ul">
                <li className="visit_li">
                  <p className="stat_title">목표달성</p>
                  <p className="stat_text">{marketingInfo[0].goal}</p>
                </li>
                <li className="visit_li">
                  <p className="stat_title">전송</p>
                  <p className="stat_text">{marketingInfo[0].send}</p>
                </li>
                <li className="visit_li">
                  <p className="stat_title">조회</p>
                  <p className="stat_text">{marketingInfo[0].read}</p>
                </li>
                <li className="visit_li">
                  <p className="stat_title">클릭</p>
                  <p className="stat_text">{marketingInfo[0].click}</p>
                </li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className="layout_1">
            <p className="title">목록</p>
            <table border="1">
              <th>이름</th>
              <th>전송</th>
              <th>조회</th>
              <th>클릭</th>
              <th>목표달성</th>
              {customerList.customers.map(customer => {
                return (
                  <>
                  <tr>
                    <td className="td_small">
                      <div className="customer_info bottom">
                        <img className="profile_img_small" src={profile_img} alt="profile_img" />
                        <div className="profile_info">
                          <p className="name small">{customer.name}</p>
                          <p className="phone_number small">{customer.phone_number}</p>
                        </div>
                      </div>
                    </td>
                    <td className="td_small">2021-01-25<br/>16:29</td>
                    <td className="td_small">2021-01-25<br/>16:29</td>
                    <td className="td_small">2021-01-25<br/>16:29</td>
                    <td className="td_small">완료</td>
                  </tr>
                  </>
                )
                })
              }

            </table>
          </div>

          <hr />

        </div>
      </div>
    </>
  );
}

const marketingList = {
  "marketings" : [
    {"id": 1, "title": "마케팅 A", "date": "2021-01-21", "send": 200, "read": "25.0%", "click": "10.0%", "goal": "20.0%"},
    {"id": 2, "title": "마케팅 B", "date": "2021-01-10", "send": 350, "read": "30.0%", "click": "25.0%", "goal": "24.5%"},
  ]
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

export default Detail;

import { Bar } from 'react-chartjs-2';
import { useParams } from "react-router-dom";
import profile_img from '../images/profile_img.png';

function Detail() {

  let { id } = useParams();

  let customerInfo = customerList.customers.filter(e => e.id === parseInt(id));

  return (
    <>
      <div className="Detail">
        <div className="MainPage initial">

        {/* <h3>ID: {id}</h3>
        <p>{customerInfo[0].name}</p> */}

          <div className="layout_1">
            <p className="title">고객정보</p>
            <div className="customer_info">
              <img className="profile_img" src={profile_img} alt="profile_img" />
              <div className="profile_info">
                <p className="name">{customerInfo[0].name}</p>
                <p className="phone_number">{customerInfo[0].phone_number}</p>
              </div>
            </div>
            
            <div className="layout_header bottom">
              <ul className="visit_ul">
                <li className="visit_li">
                  <p className="stat_title">구분</p>
                  <p className="stat_text">단골고객</p>
                </li>
                <li className="visit_li">
                  <p className="stat_title">누적방문수</p>
                  <p className="stat_text">223</p>
                </li>
                <li className="visit_li">
                  <p className="stat_title">최근 방문 날짜</p>
                  <p className="stat_text">2021-01-25</p>
                </li>
                <li></li>
              </ul>
            </div>
          </div>

          <div className="layout_1">
            <p className="title">시간대별 방문수</p>
            <Bar
              options={{
                scales: {
                  xAxes: [{
                    gridLines:{
                      display: false,
                    }
                  }],
                  yAxes: [{
                    gridLines:{
                      color: "#eaeaea",
                    },
                    ticks: {
                      min: 0,
                      max: 50,
                      stepSize : 10,
                    }
                  }]
                },
                legend: {
                  display: false,
                }
              }}
              data={visitTimeData}
              height={150}
            />
          </div>

          <div className="layout_1">
            <p className="title">방문기록</p>
            <table border="1">
              <th>방문일시</th>
              <th>누적방문수</th>
              <tr>
                  <td>2021-01-25 16:29</td>
                  <td>5</td>
              </tr>
              <tr>
                  <td>2021-01-24 13:44</td>
                  <td>4</td>
              </tr>
              <tr>
                  <td>2021-01-22 17:43</td>
                  <td>3</td>
              </tr>
              <tr>
                  <td>2021-01-20 18:13</td>
                  <td>2</td>
              </tr>
              <tr>
                  <td>2021-01-18 16:38</td>
                  <td>1</td>
              </tr>
            </table>
          </div>

          <hr />

        </div>
      </div>
    </>
  );
}

const visitTimeData = {
  labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
  datasets: [
    {
      data: [5, 8, 7, 6, 8, 10, 7, 7, 5, 9, 14, 15, 18,25,32, 35,39, 37,35, 20, 12, 7, 6, 5],
      backgroundColor: 'rgba(43, 144, 217, .2)',
            borderColor: 'rgb(43, 144, 217)',
            fill: 'start',
    }
  ]
};

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

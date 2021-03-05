import { Line, Bar } from 'react-chartjs-2';

function Detail() {

  return (
    <>
      <div className="Detail">
        <div className="MainPage initial">

          <div className="layout_1">
            <p className="title">고객정보</p>
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

export default Detail;

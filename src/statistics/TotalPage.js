import { Doughnut, Bar, } from 'react-chartjs-2';

function Total() {
  return (
    <>
    <div className="layout_1">
      <p className="title">방문수</p>
      <div className="layout_header">
        <ul className="visit_ul">
          <li className="visit_li">
            <p className="stat_title">일평균</p>
            <p className="stat_text">250</p>
          </li>
          <li className="visit_li">
            <p className="stat_title">월평균</p>
            <p className="stat_text">7,600</p>
          </li>
          <li className="visit_li">
            <p className="stat_title">연평균</p>
            <p className="stat_text">100,000</p>
          </li>
          <li></li>
        </ul>
      </div>
      <p className="sub_title">시간대별 평균</p>
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
      height={60}
    />
    </div>

    <div className="layout_1">
      <p className="title">방문고객 분석</p>
      <ul className="part_ul">
        <li className="part_li">
          <Doughnut
            options={{
              legend: {
                display: true,
                position: "right",
                reverse: true,
              }
            }}
            data={visitData}
            height={50}
          />
        </li>
        <li className="part_li">
          <p className="stat_title">신규고객</p>
          <p className="stat_text">150(60%)</p>
          <p className="stat_title">재방문고객</p>
          <p className="stat_text">100(40%)</p>
        </li>
      </ul>
    </div>

    <div className="layout_1">
      <p className="title">이탈고객 분석</p>
    </div>

  </>
  );
  
}

const visitData = {
  labels: ['신규', '재방문'],
  datasets: [
    {
      backgroundColor: ["#2B90D9", "#D5E9F7"],
			borderColor: '#fff',
      data: [65, 35]
    }
  ]
};

const visitTimeData = {
  labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
  datasets: [
    {
      data: [5, 8, 7, 6, 8, 10, 7, 7, 5, 9, 14, 15, 18,25,32, 35,39, 37,35, 20, 12, 7, 6, 5],
      backgroundColor: 'rgba(43, 144, 217, 1)',
            borderColor: 'rgb(43, 144, 217)',
            fill: 'start',
    }
  ]
};


export default Total;

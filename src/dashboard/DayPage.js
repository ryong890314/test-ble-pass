import { Line, Bar } from 'react-chartjs-2';

function DayPage() {
  return (
    <>
    <div className="layout_1">
      <p className="title">방문수</p>
      <Line
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
                max: 1000,
                stepSize : 200,
              }
            }]
          },
          legend: {
            display: false,
          }
        }}
        data={visitData}
        height={100}
      />
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
      height={60}
    />
  </div>

  <div className="layout_1">
   <p className="title">방문고객</p>
   <table border="1">
    <th>방문일시</th>
    <th>이름</th>
    <th>전화번호</th>
    <tr>
        <td>2021-01-21 16:44</td>
        <td>김*수</td>
        <td>010-****-1234</td>
    </tr>
    <tr>
        <td>2021-01-21 14:24</td>
        <td>박*수</td>
        <td>010-****-3456</td>
    </tr>
    <tr>
        <td>2021-01-21 14:14</td>
        <td>이*수</td>
        <td>010-****-1234</td>
    </tr>
    <tr>
        <td>2021-01-21 13:45</td>
        <td>김*훈</td>
        <td>010-****-1234</td>
    </tr>
    <tr>
        <td>2021-01-21 13:32</td>
        <td>김*지</td>
        <td>010-****-1234</td>
    </tr>
   </table>
  </div>
  </>
  );
  
}

const visitData = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  datasets: [
    {
      data: [634, 513, 756, 252, 235, 456, 323, 400, 460, 100],
      backgroundColor: 'rgba(43, 144, 217, .2)',
            borderColor: 'rgb(43, 144, 217)',
            fill: 'start',
    }
  ]
};

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


export default DayPage;

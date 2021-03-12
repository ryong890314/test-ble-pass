
function PushPage() {
  return (
    <>
    <div className="layout_1">
      <p className="title">푸시 알림 설정</p>
      <div className="option_box">
        <p>활동 알림</p>
        <input type="checkbox" id="option_id_1" />
        <label for="option_id_1" />
      </div>
      <div className="option_box">
        <p>기타 알림</p>
        <input type="checkbox" id="option_id_2" />
        <label for="option_id_2" />
      </div>
      <div className="option_box">
        <p>마케팅 알림</p>
        <input type="checkbox" id="option_id_3" />
        <label for="option_id_3" />
      </div>
    </div>

    </>
  );
  
}

export default PushPage;

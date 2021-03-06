import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <div className="Header bottom">
      <span className="title">푸시 알림 설정</span>
      <span className="option"><FontAwesomeIcon icon={faBars} /></span>
    </div>
  );
}

export default Header;

import style from "../style/Message.module.css";
const Message = () => {
  return (
    <div id={style.toast}>
      <div className={`${style.toast} ${style.toast_info}`}>
        <div className={style.toast__icon}>
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className={style.toast__body}>
          <h3 className={style.toast__title}>Thông báo</h3>
          <p className={style.toast__msg}>$message</p>
        </div>
      </div>
      <div className={`${style.toast} ${style.toast_warning}`}>
        <div className={style.toast__icon}>
          <i className="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div className={style.toast__body}>
          <h3 className={style.toast__title}>Thông báo</h3>
          <p className={style.toast__msg}>$message</p>
        </div>
      </div>
      <div className={`${style.toast} ${style.toast_error}`}>
        <div className={style.toast__icon}>
          <i className="fa-solid fa-skull-crossbones"></i>
        </div>
        <div className={style.toast__body}>
          <h3 className={style.toast__title}>Thông báo</h3>
          <p className={style.toast__msg}>$message</p>
        </div>
      </div>
      <div className={`${style.toast} ${style.toast_success}`}>
        <div className={style.toast__icon}>
          <i className="fas fa-check-circle"></i>
        </div>
        <div className={style.toast__body}>
          <h3 className={style.toast__title}>Thông báo</h3>
          <p className={style.toast__msg}>$message</p>
        </div>
      </div>
    </div>
  );
};

export default Message;

import style from "../style/Form.module.css";
const Form = () => {
  return (
    <div className={style.container_page}>
      <div className={style.container_form}>
        <div className={style.header}>
          <h2>Create Account</h2>
        </div>
        <form id="form" className={style.form}>
          <div className={style.form_control}>
            <label htmlFor="input">input</label>
            <i className="fas fa-exclamation-circle"></i>
            <input
              type="text"
              className={style.text}
              placeholder="florinpop17"
              id="input"
            />
            <small>Error message</small>
          </div>

          <div className={style.form_control}>
            <label htmlFor="select">select</label>
            <i className="fas fa-exclamation-circle"></i>
            <select className={style.select} id="select">
              <option>--- Open ---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <small>Error message</small>
          </div>
          <div className={style.form_control}>
            <label htmlFor="textarea">textarea</label>
            <i className="fas fa-exclamation-circle"></i>
            <textarea
              className={style.textarea}
              id="textarea"
              cols="30"
              rows="10"
              placeholder="sdthgưẻgtưeg"
            ></textarea>
            <small>Error message</small>
          </div>
          <div className={style.form_control}>
            <h2>checkbox</h2>
            <i className="fas fa-exclamation-circle"></i>
            <div className={style.group}>
              <input
                type="checkbox"
                className={style.checkbox}
                id="1"
                value="1"
              />
              <label htmlFor="1">1</label>
            </div>
            <div className={style.group}>
              <input
                type="checkbox"
                className={style.checkbox}
                id="2"
                value="2"
              />
              <label htmlFor="2">2</label>
            </div>
            <div className={style.group}>
              <input
                type="checkbox"
                className={style.checkbox}
                id="3"
                value="3"
              />
              <label htmlFor="3">3</label>
            </div>

            <small>Error message</small>
          </div>

          <div className={style.form_control}>
            <h2>radio</h2>
            <i className="fas fa-exclamation-circle"></i>
            <div className={style.group}>
              <input
                type="radio"
                name="exampleRadios"
                className={style.checkbox}
                id="1"
                value="1"
              />
              <label htmlFor="1">1</label>
            </div>
            <div className={style.group}>
              <input
                type="radio"
                name="exampleRadios"
                className={style.checkbox}
                id="2"
                value="2"
              />
              <label htmlFor="2">2</label>
            </div>
            <div className={style.group}>
              <input
                type="radio"
                name="exampleRadios"
                className={style.checkbox}
                id="3"
                value="3"
              />
              <label htmlFor="3">3</label>
            </div>

            <small>Error message</small>
          </div>
          <div className={style.form_control}>
            <label htmlFor="myFile">multiple</label>
            <i className="fas fa-exclamation-circle"></i>
            <div className="file-upload">
              <input
                className={style.file_upload__input}
                type="file"
                id="myFile"
                multiple
              />
            </div>
            <small>Error message</small>
          </div>
          <button className={style.submit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;

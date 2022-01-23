import "./write.css";

export default function Write() {
  return (
    <div className="write" >
        <img className="writeImg" src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" />
                <input className="writeInput" autoFocus={true} type="text" placeholder="Title" />
            </div>
            <div className="writeFormGroup">
                <textarea className="writeInput writeText" placeholder="Tell something..." type="text" ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

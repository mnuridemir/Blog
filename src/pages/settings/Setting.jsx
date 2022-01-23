import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Setting() {
  return( 
    <div className="setting">
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form className="settingForm">
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Mehmet" />
                <label>Email</label>
                <input type="email" placeholder="mehmet@gmail.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingSubmit">Update</button>
                
            </form>
        </div>
        <Sidebar/>
    </div>
    )
}


import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sİdebar from "../../sidebar/Sİdebar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home">
        <Posts />
        <Sİdebar />
      </div>
    </>
    )
}

import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sİdebar from "../../components/sidebar/Sidebar";
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

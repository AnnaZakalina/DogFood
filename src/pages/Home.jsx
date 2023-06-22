import {Link} from "react-router-dom";
import {BookHalf} from "react-bootstrap-icons";
import Slider from "../components/Slider";
const Home = ({user, setActive}) => {
    return <>
        <div className="banner">
        <h1>Крафтовые<br/>лакомства для<br/>собак</h1>
        <p>Всегда свежие лакомства ручной<br/>работы с доставкой по России и Миру</p>
        <div className="info">
    <button>
    {user && <Link to="/catalog" className="info-link">
        <BookHalf style={{marginRight: "10px"}}/>
        Каталог товаров
    </Link>}
    </button>
    </div>
    {!user && <>
    <span className="info-link" onClick={() => setActive(true)}>
    Авторизуйтесь</span>, чтобы получить доступ к сайту</>}
    </div>
    <Slider desktop={3} mobile={2}/>
    </>
}
    

export default Home;
import {Link} from "react-router-dom";
import {BookHalf} from "react-bootstrap-icons";
const Home = ({user, setActive}) => {
    return <div className="info">
    {user && <Link to="/catalog" className="info-link">
        <BookHalf style={{marginRight: "10px"}}/>
        Каталог товаров
    </Link>}
    {!user && <>
    <span className="info-link" onClick={() => setActive(true)}>
    Авторизуйтесь</span>, чтобы получить доступ к сайту</>}
    </div>
}

export default Home;
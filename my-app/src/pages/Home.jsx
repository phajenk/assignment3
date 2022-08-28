import profpic from '../img/profpic.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <div>
            <br/><br/>
            <img src={profpic} alt="Profile" width={500} height={300}/>;
            <h1>アーニャ・フォージャー</h1>
            <h2>Anya Forger
                <br/>
                <FontAwesomeIcon icon={faGoogle} /> anya_foja@gmail.co.jp
                <br/>
                <FontAwesomeIcon icon={faFacebook} /> Anya Forger
            </h2>
        </div>
    )
}

export default Home;
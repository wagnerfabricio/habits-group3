import TestesActivity from "../../components/testesActivity"
import { Container } from "./style"
import Login01Image from "../../assets/images/Home01.svg"
import Loguin02Image from "../../assets/images/Home02.svg"
import CircleImage01 from "../../assets/images/Circle01.svg"
import CircleImage02 from "../../assets/images/Circle02.svg"
import CircleImage03 from "../../assets/images/Circle03.svg"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"

const Home = () => {


    const history = useHistory()

    return (
        <Container>
            <section>
                <div className="home__top">
                    <div className="home__header">
                        <nav>
                            <ul>
                                <li>
                                    <a href="#aboutUs"> About us</a>

                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="home__top__frist">
                        <div className="top__frist__left">
                            <img src={Login01Image} alt="" />
                        </div>
                        <div className="top__frist__right">
                            <h2>Compartilhe seus objetivos</h2>
                        </div>
                    </div>
                    <div className="home__top__second">
                        <div className="top__second__left">
                            <p>Já pensou em desenvolver um novo hábito na sua rotina? Estamos aqui para te auxiliar com os teus desafios e te ajudar a monitorar as suas práticas diárias.

                            </p>
                            <button onClick={() => { history.push("/signup") }}>Cadastre-se agora!</button>
                        </div>
                        <div className="top__second__right">

                            <img src={Loguin02Image} alt="" />
                        </div>
                    </div>

                </div>
                <div className="home__bot">
                    <div className="home__bot__frist">
                        <div className="circles" id="aboutUs">

                            <img src={CircleImage01} alt="" />
                        </div>
                        <h4>Saúde e condicionamento físico.</h4>
                        <p>De um copo de água até execícios físicos de maior intensidade. Gerencie seus hábitos e torne seu dia mais saudável.</p>
                    </div>
                    <div className="home__bot__mid">
                        <div className="circles">

                            <img src={CircleImage02} alt="" />
                        </div>
                        <h4>Estudos e trabalhos.</h4>
                        <p>Estipule e gerencie suas metas de forma mais objetiva.</p>
                    </div>
                    <div className="home__bot__last">
                        <div className="circles">

                            <img src={CircleImage03} alt="" />
                        </div>
                        <h4>E muito mais.</h4>
                        <p>Todos os tipos de atividades, hábitos, metas entre outros...</p>
                    </div>

                </div>
            </section>



        </Container>
    )
}

export default Home


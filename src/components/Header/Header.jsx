import ReactImage from "../../assets/react-core-concepts.png"
import "./Header.css"
const reactDescription=['Fundamental','Crucial','Core'];
function genRandomInt(number){
    return Math.floor(Math.random()*(number+1));
}
function Header(){
const description=reactDescription[genRandomInt(2)]
return(
        <header>
            <img src={ReactImage}  alt="reactImage" />
            <h1>React Essentials</h1>
            <p>
            {description} React concepts you will need for almost any app you are going to build!
            </p>
                    <h2>Time to get started!</h2>

        </header>
)
}
export default Header;
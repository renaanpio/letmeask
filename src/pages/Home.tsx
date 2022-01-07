import { useNavigate } from 'react-router-dom'


import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";
import '../styles/auth.scss'
import { auth } from '../services/firebase';



export function Home() {

  const navigate = useNavigate()

  function handleCreateRoom() {

//QUERO ABRIR UM POPUP DO GOOGLE, MAS NAO CONSIGO TRAZER PRA CA O FIREBASE

      // const provider = new app.auth.GoogleProvider();
      // auth.signInWithPopUp(provider).then (result => {
      //   console.log(result)
      // })


    navigate("/rooms/new")
  }


  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg}></img>
        <strong>Create Rooms Q&amp;a live </strong>
        <p>Ask your audience's questions in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg}></img>
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg}></img>
            Create your room with google
          </button>
          <div className="separator">enter in another room</div>
          <form>
              <input
               type='text'
               placeholder="Room code"
               >
               </input>
               <Button>join room</Button>
          </form>
        </div>
      </main>
    </div>
  );
}

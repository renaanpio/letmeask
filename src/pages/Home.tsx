import { useNavigate } from 'react-router-dom'

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";
import '../styles/auth.scss'

export function Home() {

  const navigate = useNavigate()

  function navigateToNewRoom() {
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
          <button onClick={navigateToNewRoom} className="create-room">
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

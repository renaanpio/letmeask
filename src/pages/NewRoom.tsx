import {Link} from 'react-router-dom'

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";
import '../styles/auth.scss'

export function NewRoom() {

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
            <h2>Create new room</h2>
            <form>
                <input
                 type='text'
                 placeholder="room's name"
                 >
                 </input>
                 <Button>Create room</Button>
            </form>
            <p>Do yo want to enter an existing room? <Link to="/">click here</Link></p>
          </div>
        </main>
      </div>
    );
  }
  
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg}></img>
        <strong>Create Rooms Q&amp;a live </strong>
        <p>Ask your audience's questions in real time</p>
      </aside>
      <main>
        <div>
          <img src={logoImg}></img>
          <button>
            <img src={googleIconImg}></img>
            Create your room with google
          </button>
          <div>enter in another room</div>
          <form>
              <input
               type='text'
               placeholder="Room code"
               >
               </input>
               <button>join room</button>
          </form>
        </div>
      </main>
    </div>
  );
}

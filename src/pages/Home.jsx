import { CHeader } from "../components";

function Home() {
  return (
    <>
      <CHeader />
      <main>
        <article>
          <h2>Hours : Minutes : Seconds</h2>
        </article>
        <article>
          <input
            type="text"
          />
          <button>Iniciar</button>
        </article>
      </main>
    </>
  );
}

export default Home;
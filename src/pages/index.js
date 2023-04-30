import styles from "@styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";

import Head from "next/head";

export const EMPTY_RESULT_HINT =
  "Geben Sie einen Werte > 1 ein in das Formular ein.";

function Home() {
  return (
    <>
      <Head>
        <title>Bewerber-Quiz - FizzBuzz - Autohaus König</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-5">
        <h1 className="text-primary">FizzBuzz - Bewerber Quiz</h1>
        <div className="form w-25">
          <form>
            <label for="number" className="form-label">
              Bitte geben sie eine nummer ein:
            </label>
            <input
              type="number"
              className="form-control"
              id="number"
              placeholder="Enter number"
              name="email"
            />
            <button type="submit" class="btn btn-sm btn-primary mt-2">
            Submit
          </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Home;

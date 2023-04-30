import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Head from "next/head";

function Home() {
  const EMPTY_RESULT_HINT = "Bitte geben Sie eine Zahl größer als 0 ein";

  const [number, setNumber] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(number);

    if (num < 1) {
      setResults([]);
      return;
    }

    const newResults = [];
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        newResults.push("FizzBuzz");
      } else if (i % 3 === 0) {
        newResults.push("Fizz");
      } else if (i % 5 === 0) {
        newResults.push("Buzz");
      } else {
        newResults.push(i);
      }
    }
    setResults(newResults);
  };

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
          <form onSubmit={handleSubmit}>
            <label htmlFor="number" className="form-label">
              Bitte geben sie eine nummer ein:
            </label>
            <input
              type="number"
              className="form-control"
              id="number"
              placeholder="Enter number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={() => setNumber("")}
            />
            <small className="text-danger">
              {number && number < 0 ? EMPTY_RESULT_HINT : ""}
            </small>
            <button type="submit" className="btn btn-sm btn-primary mt-2">
              Submit
            </button>
          </form>

          {/* result */}
          {results.length > 0 ? (
            <ul className="result list-group d-flex flex-row flex-wrap mt-3">
              {results.map((result) => (
                <li key={result} className="list-group-item">{result}</li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </div>
      </main>
    </>
  );
}

export default Home;

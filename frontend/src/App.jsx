

import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
      <section id="center">
        <div className="mx-auto max-w-md p-8 text-center text-white bg-slate-800 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-indigo-400 mb-4">Tailwind works</h1>
          <p className="text-slate-300 mb-6">
            This card is styled entirely with Tailwind utility classes.
          </p>
          <button
            type="button"
            className="px-4 py-2 bg-indigo-500 hover:bg-indigo-400 rounded-md font-semibold transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>
      </section>
    </>

  )
  
}

export default App

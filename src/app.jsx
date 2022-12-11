import React from "react";
import Playground from "./components/playground";

function App() {
  return (
    <div className="p-4 md:p-8">

      {/* Header */}
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-transparent lg:text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500 decoration-8">
          &#123; JSON Beautifier &#125;
        </h1>
        <p className="text-sm">Pro Tip 💡 : You can directly paste your code here.</p>
      </header>

      {/* Main */}
      <main>
        <Playground/>
      </main>

      {/* Footer */}
      <footer></footer>
      
    </div>
  );
}

export default App;

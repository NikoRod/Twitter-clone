import React from 'react';

// COMPONENTES
import GlobalStyles from "./styles/GlobalStyles";
import { Home } from './componentes/Home';
import { Sidebar } from './componentes/Sidebar';
import { Widgets } from './componentes/Widgets';

function App() {
  return (
    <div className="App">

      {/* sidebar */}
      <Sidebar />

      {/* home */}
      <Home />

      {/* widgets */}
      <Widgets />

      <GlobalStyles />

    </div>
  );
}

export default App;
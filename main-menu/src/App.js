import React, { useState } from "react";

const App = () => {
  const [selectedApp, setSelectedApp] = useState("To-Do List");

  const renderApp = () => {
    switch (selectedApp) {
      case "To-Do List":
        return <div>To-Do List App</div>;
      case "Contador de Cliques":
        return <div>Contador de Cliques</div>;
      case "Jogo da Velha":
        return <div>Jogo da Velha</div>;
      case "Calculadora":
        return <div>Calculadora</div>;
      case "Buscador de CEP":
        return <div>Buscador de CEP</div>;
      default:
        return <div>Escolha uma funcionalidade</div>;
    }
  };

  const apps = [
    "To-Do List",
    "Contador de Cliques",
    "Jogo da Velha",
    "Calculadora",
    "Buscador de CEP",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow p-4 mb-4 rounded-2xl flex gap-4 flex-wrap justify-center">
        {apps.map((app) => (
          <button
            key={app}
            className={`px-4 py-2 rounded-xl font-semibold ${
              selectedApp === app
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedApp(app)}
          >
            {app}
          </button>
        ))}
      </header>
      <main className="bg-white rounded-2xl shadow p-6 text-center text-xl font-medium">
        {renderApp()}
      </main>
    </div>
  );
};

export default App;

import React, { useEffect } from 'react';
import './greeting.css'

const Greeting = () => {
  useEffect(() => {
        //BOM DIA | BOA TARDE | BOA NOITE
        const greetingElement = document.getElementById("greeting");
        const currentHour = new Date().getHours();
        const greetingMessage =
        currentHour >= 5 && currentHour < 12
            ? "Bom dia"
            : currentHour >= 12 && currentHour < 18
            ? "Boa tarde"
            : "Boa noite";

        greetingElement.textContent = greetingMessage;

  }, []);

  return (
        <div className="playlist">
            {/* COLOCAR O BOM DIA | BOA TARDE | BOA NOITE */}
            <h1 id="greeting"></h1>
            <h2 className="session">Navegar por todas as seções</h2>
            </div>
        );
};

export default Greeting;
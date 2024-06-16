import React, { useState, useEffect } from 'react';
import './ButtonsView.css';

const LOCAL_STORAGE_KEY = 'pressedButtons';

const ButtonsView = () => {
  // Recuperar el estado almacenado de Local Storage
  const getStoredState = () => {
    const storedButtons = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    return storedButtons;
  };

  // Estado para almacenar los botones presionados
  const [pressedButtons, setPressedButtons] = useState(getStoredState);

  // Efecto para guardar el estado en Local Storage cada vez que cambia pressedButtons
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pressedButtons));
  }, [pressedButtons]);

  // Maneja el clic en un botón
  const handleButtonClick = (number) => {
    setPressedButtons((prev) => {
      if (prev.includes(number)) {
        return prev.filter((n) => n !== number);
      } else {
        return [...prev, number];
      }
    });
  };

  // Renderiza los botones
  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 153; i++) {
      const isPressed = pressedButtons.includes(i);
      buttons.push(
        <button
          key={i}
          className={`btn ${isPressed ? 'pressed' : ''}`}
          onClick={() => handleButtonClick(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div>
      <div className="buttons-container">{renderButtons()}</div>
      <div className="summary">
        <h2>Resumen de Botones Apretados</h2>
        <p>{pressedButtons.length > 0 ? pressedButtons.join(', ') : 'Ninguno'}</p>
      </div>
    </div>
  );
};

export default ButtonsView;
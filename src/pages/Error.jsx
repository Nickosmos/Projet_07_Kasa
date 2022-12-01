import React from "react";
import { useNavigate } from "react-router-dom";


export default function Error() {
  const navigate = useNavigate();
  const HomePage = () => {
    navigate("/");
  };
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p className="homeLink" onClick={HomePage}>
        Retourner sur la page d'acceuil
      </p>
    </div>
  );
};
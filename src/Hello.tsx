import React from "react";

const Hello: React.FC = () => {
  return (
    <div>
      <h1>Merhaba dd cc </h1>
      <button
        onClick={() => {
          throw new Error("hata oluştu ama nerde");
        }}
      >
        Tıkla{" "}
      </button>
    </div>
  );
};

export default Hello;

import React from 'react';

const CardGraficos = ({ titulo, subtitulo }) => {
  return (
    <div className="card">
    
      <div className="card-footer">
        <h5 class="card-title">{titulo}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{subtitulo}</h6>
      </div>
    </div>
  );
};

export default CardGraficos;

import { useState } from "react";
import styles from "./FormFilme.module.css";

function FormFilme({ onAddFilme }) {
  // 3. State para os campos do formulário
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [nota, setNota] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !genero || !ano || !nota) {
      alert("Preencha todos os campos!");
      return;
    }
    
    // Passando o filme novo para o App.jsx
    onAddFilme({
      nome,
      genero,
      ano,
      nota: parseFloat(nota)
    });

    // Limpando os campos
    setNome("");
    setGenero("");
    setAno("");
    setNota("");
  };

  return (
    <form className={styles.formulario} onSubmit={handleSubmit}>
      {/* 5. Eventos: onChange */}
      <input 
        type="text" 
        placeholder="Nome do filme" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Gênero (Ex: Ação, Drama)" 
        value={genero} 
        onChange={(e) => setGenero(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Ano de lançamento" 
        value={ano} 
        onChange={(e) => setAno(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Nota (0 a 10)" 
        min="0" 
        max="10" 
        step="0.1" 
        value={nota} 
        onChange={(e) => setNota(e.target.value)} 
      />
      
      {/* 5. Eventos: onClick */}
      <button 
        type="submit" 
        className={styles.btnCadastrar} 
        onClick={handleSubmit}
      >
        Cadastrar Filme
      </button>
    </form>
  );
}

export default FormFilme;
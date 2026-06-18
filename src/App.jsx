import { useState } from "react";
import FormFilme from "./components/FormFilme";
import ListaFilmes from "./components/ListaFilmes";
import styles from "./App.module.css";

function App() {
  // 3. State para a lista de filmes e 8. State Lifting
  const [filmes, setFilmes] = useState([]);
  // State para o Filtro de Pesquisa (Funcionalidade Adicional)
  const [busca, setBusca] = useState("");

  // Função para adicionar filme que será passada via Props para o formulário
  const adicionarFilme = (novoFilme) => {
    setFilmes([...filmes, { ...novoFilme, id: Date.now() }]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>🎬 Meus Filmes Favoritos</h1>
      
      <div className={styles.infos}>
        {/* Contador de Filmes (Funcionalidade Adicional) */}
        <p><strong>Total de filmes cadastrados:</strong> {filmes.length}</p>
        
        {/* Filtro de Pesquisa (Funcionalidade Adicional) */}
        <input
          type="text"
          placeholder="Pesquisar pelo nome..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className={styles.busca}
        />
      </div>

      {/* 4. Utilização de Props */}
      <FormFilme onAddFilme={adicionarFilme} />
      
      <hr />

      {/* 4. Utilização de Props */}
      <ListaFilmes filmes={filmes} busca={busca} />
    </div>
  );
}

export default App;
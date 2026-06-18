import CardFilme from "./CardFilme";
import styles from "./ListaFilmes.module.css";

function ListaFilmes({ filmes, busca }) {
  // Lógica para o Filtro de Pesquisa
  const filmesFiltrados = filmes.filter((filme) =>
    filme.nome.toLowerCase().includes(busca.toLowerCase())
  );

  // 6. Renderização Condicional: Nenhum filme cadastrado
  if (filmes.length === 0) {
    return <p className={styles.mensagemVazia}>Nenhum filme cadastrado.</p>;
  }

  return (
    <div>
      {filmesFiltrados.length === 0 ? (
        <p className={styles.mensagemVazia}>Nenhum filme encontrado na busca.</p>
      ) : (
        <div className={styles.gridFilmes}>
          {/* 7. Renderização de Listas utilizando map() */}
          {filmesFiltrados.map((filme) => (
            <CardFilme key={filme.id} filme={filme} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListaFilmes;
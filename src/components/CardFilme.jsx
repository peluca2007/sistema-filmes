import styles from "./CardFilme.module.css";

function CardFilme({ filme }) {
  
  // 5. Eventos: onDoubleClick
  const handleDoubleClick = () => {
    alert(`Você favoritou o filme: ${filme.nome}!`);
  };

  return (
    <div className={styles.card} onDoubleClick={handleDoubleClick}>
      <h3 className={styles.titulo}>{filme.nome}</h3>
      <p className={styles.info}><strong>Gênero:</strong> {filme.genero}</p>
      <p className={styles.info}><strong>Ano:</strong> {filme.ano}</p>
      <p className={styles.info}><strong>Nota:</strong> {filme.nota}</p>
      
      {/* 6. Renderização Condicional da Nota */}
      <div className={`${styles.badge} ${filme.nota >= 8 ? styles.recomendado : styles.comum}`}>
        {filme.nota >= 8 ? "⭐ Filme Recomendado" : "📌 Filme Comum"}
      </div>
    </div>
  );
}

export default CardFilme;
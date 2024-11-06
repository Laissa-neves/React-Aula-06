import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderFeed from "../../components/HeaderFeed";
import * as styles from "./Feed.module.css";
import axios from "axios";
import { set } from "react-hook-form";


export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6729c2f86d5fa4901b6e3c77.mockapi.io/post")
      .then((response) => {
        console.log("Deu Certo");
        setPosts(response.data);
      })
      .catch(() => console.log("Problemas na requisição"));
  }, []);

  function apagar(id) {
    axios
      .delete(`https://6729c2f86d5fa4901b6e3c77.mockapi.io/post/${id}`)
      .then(() => {
        console.log("Post Apagado!");
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch(() => console.log("Problemas na requisição"));
  }

  return (
    <div>
      <HeaderFeed />
      <main>
        <div className={styles.cards}>
          {posts.map((post, key) => (
            <div className={styles.card} key={key}>
              <header>
                <h2>{post.titulo}</h2>
              </header>

              <div className={styles.line} />

              <p>{post.descricao}</p>

              <div className={styles.btns}>
                <div className={styles.btnEdit}>
                  <Link to={`/update/${post.id}`}>
                    <button>Editar</button>
                  </Link>
                </div>

                <div className={styles.btnReadMore}>
                  <Link to={`/more/${post.id}`}>
                    <button>Leia mais</button>
                  </Link>
                </div>
                <div className={styles.btnDelete}>
                  <button onClick={()=>apagar(post.id)}>Apagar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

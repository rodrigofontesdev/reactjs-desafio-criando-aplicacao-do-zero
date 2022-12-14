import { GetStaticProps } from 'next';
import Header from '../components/Header';
import { FiCalendar, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <Header />

      <main className={commonStyles.container}>
        <div className={styles.posts}>
          <article className={styles.post}>
            <h2>Como utilizar Hooks</h2>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>

            <footer>
              <span>
                <FiCalendar />
                15 Mar 2021
              </span>
              <span>
                <FiUser />
                Joseph Oliveira
              </span>
            </footer>
          </article>

          <article className={styles.post}>
            <h2>Criando um app CRA do zero</h2>
            <p>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App.
            </p>

            <footer>
              <span>
                <FiCalendar />
                19 Abr 2021
              </span>
              <span>
                <FiUser />
                Danilo Vieira
              </span>
            </footer>
          </article>

          <article className={styles.post}>
            <h2>Como utilizar Hooks</h2>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>

            <footer>
              <span>
                <FiCalendar />
                15 Mar 2021
              </span>
              <span>
                <FiUser />
                Joseph Oliveira
              </span>
            </footer>
          </article>

          <article className={styles.post}>
            <h2>Criando um app CRA do zero</h2>
            <p>
              Tudo sobre como criar a sua primeira aplicação utilizando Create
              React App.
            </p>

            <footer>
              <span>
                <FiCalendar />
                19 Abr 2021
              </span>
              <span>
                <FiUser />
                Danilo Vieira
              </span>
            </footer>
          </article>

          <article className={styles.post}>
            <h2>Como utilizar Hooks</h2>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>

            <footer>
              <span>
                <FiCalendar />
                15 Mar 2021
              </span>
              <span>
                <FiUser />
                Joseph Oliveira
              </span>
            </footer>
          </article>
        </div>

        <div className={styles.paginator}>
          <button type="button">Carregar mais posts</button>
        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient({});
//   // const postsResponse = await prismic.getByType(TODO);

//   // TODO
// };

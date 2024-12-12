'use client';
import { Provider } from "react-redux";
import store from './redux/store';
import Board from "./components/Board/Board";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>        
        <Provider store={store}>
          <Board />
        </Provider>
      </main>
    </div>
  );
}

'use client';
import { Provider } from "react-redux";
import store from './slices/index';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./components/Board/Board";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <Board />
          </DndProvider>
        </Provider>
      </main>
    </div>
  );
}

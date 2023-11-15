import { useState } from "react";
import styles from './App.module.css';
import List from "./components/List/List";
import Home from "./components/Home/Home";
import UserList from "./components/UserList/UserList";


function App() {
  const arr = [1, 2, 3, 4];
  const arr2 = ['Навыки : Написание новостных материалов для сайта и соцсетей;', 'Опыт работы : 0', 'Языки:Kyrgyz-Родной'];
  return (
    <>
      {
        <UserList />
      /* <h1 className={styles.surname}>ZHANATBEK ZHEENBAEV</h1>
      <Home />

      {

        <List
          arr2={arr2}
          arr={arr}
        />} */}
    </>
  );
}
export default App;
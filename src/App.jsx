
import styles from "./app.module.css";
import { columns } from "./column";
import { suppliersData } from "./dummyData";
import Footer from "./footer";
import Header from "./header";
import ListComponent from "./table";

function App() {
  return (
    <div className={styles.container}>
      <Header/>
      <div className={styles.tableHeading}>1370 2025 Record Name</div>
      <div className={styles.list}>
        <ListComponent suppliersData={suppliersData} columns={columns} />
      </div>
      <Footer/>
      <div className={styles.buttonContainer}>
        <button>
          Button 1
        </button>
        <button>
          Button 2
        </button>
        <button>
          Button 3
        </button>
        <button>
          Button 4
        </button>
        <button>
          Button 5
        </button>
      </div>
    </div>
  );
}

export default App;
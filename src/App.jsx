import Board from "./components/board/Board";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Board />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
}

export default App;

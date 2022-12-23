import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home, ChatRoom } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:roomId" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

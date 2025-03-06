import routes from "./routes";
import { useRoutes } from "react-router-dom";

const App = () => {

  const router = useRoutes(routes)

  return (
    <div className="">
      {router}
    </div>
  );
};

export default App;

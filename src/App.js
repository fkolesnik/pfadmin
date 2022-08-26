import {useSnapshot} from "valtio";
import {userStore} from "./store/user.store";
import {Route, Routes} from "react-router-dom";
import {Container} from "@chakra-ui/react";
import Nav from "./components/Nav";
import Login from "./pages/login/Login";
import Queries from "./pages/queries/Queries";
import Users from "./pages/users/Users";
import {useAutoLogin} from "./pages/login/hooks/useAutoLogin";
import SpinnerGlobal from "./components/SpinnerGlobal";
import Empty from "./components/Empty";

const App = () => {
  const {user, isAutoLoginLoading} = useSnapshot(userStore);

  useAutoLogin();

  return (
    <Container maxW='container.xl' py={5}>
      {!user && !isAutoLoginLoading && <Login/>}

      {isAutoLoginLoading && <SpinnerGlobal/>}

      {user &&
        <>
          <Nav/>
          <Routes>
            <Route path='/' exact element={<Queries/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='*' element={<Empty/>}/>
          </Routes>
        </>
      }
    </Container>
  );
}

export default App;

import "./App.css";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "src/theme";
import { store } from "./store/store";
import apolloConfig from "./config/apolloConfig";
import routes from "./config/routerConfig";

const App = () => {
  const content = useRoutes(routes);
  return (
    <ApolloProvider client={apolloConfig()}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">{content}</div>
        </ThemeProvider>
      </Provider>
    </ApolloProvider>
  );
};

export default App;

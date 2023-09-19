import { WebSocketLink } from "@apollo/client/link/ws";
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  split,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";
import { useSnackbar as Snackbar } from "notistack";
import appConfig from "./express.json";

const apolloConfig = () => {
  const { enqueueSnackbar } = Snackbar();
  const env = process.env.NODE_ENV || "development";
  const config = appConfig[env];

  // Handle authentication error and redirect to login
  // const logoutLink = onError(({ graphQLErrors }) => {
  //   if (
  //     graphQLErrors?.some((err) => err.extensions?.code === "UNAUTHENTICATED")
  //   ) {
  //     window.location.href = "/login";
  //   }
  // });

  // Handle GraphQL and network errors and authentication error and redirect to login
  const linkErrorHandler = onError(({ graphQLErrors, networkError }) => {
    graphQLErrors?.forEach(() => {
      // console.log(
      //   `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      // );
    });

    if (networkError) {
      enqueueSnackbar(
        "Unable to connect to the server. Please contact the admin.",
        {
          variant: "error",
        },
      );
    }
    if (
      graphQLErrors?.some((err) => err.extensions?.code === "UNAUTHENTICATED")
    ) {
      window.location.href = "/login";
    }
  });

  // Create a WebSocketLink for subscriptions
  const wsLink: any = new WebSocketLink({
    uri: `${config.graphql_subscription_domain}:${config.port}/${config.graphql_endpoint}`,
    options: {
      timeout: 600000,
      minTimeout: 600000,
      reconnect: true,
      lazy: true,
    },
  });

  // Define WebSocket event handlers (you can uncomment these as needed)
  wsLink.subscriptionClient.on("connecting", () => {
    // console.log("connecting subs " + new Date().toString());
  });

  wsLink.subscriptionClient.on("connected", () => {
    // console.log("connected subs " + new Date().toString());
  });

  wsLink.subscriptionClient.on("reconnecting", () => {
    // console.log("reconnecting subs " + new Date().toString());
  });

  wsLink.subscriptionClient.on("reconnected", () => {
    // console.log("reconnected subs " + new Date().toString());
  });

  wsLink.subscriptionClient.on("disconnected", () => {
    // console.log("disconnected subs " + new Date().toString());
  });

  wsLink.subscriptionClient.on("onError", () => {
    // console.log(message + "  " + new Date().toString());
  });

  // Create an HTTP link for non-subscription operations
  const httpLink = new HttpLink({
    uri: `${config.graphql_domain}:${config.port}/${config.graphql_endpoint}`,
    credentials: "include",
  });

  // Split traffic between WebSocket and HTTP links based on operation type
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    httpLink,
  );

  // Create the Apollo Client instance
  const apolloClient = new ApolloClient({
    link: ApolloLink.from([linkErrorHandler, splitLink]),
    cache: new InMemoryCache(),
  });
  return apolloClient;
};

export default apolloConfig;

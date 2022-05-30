import {
  ApolloProvider as BasicApolloProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl3d189141hkk01xpcesz7a2l/master",
  cache: new InMemoryCache(),
});

type Props = {
  children: React.ReactNode;
};

const ApolloProvider = ({ children }: Props) => {
  return <BasicApolloProvider client={client}>{children}</BasicApolloProvider>;
};

export default ApolloProvider;

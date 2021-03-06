import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:1337/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <SiteHeader />
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path={"/details/:id"} element={<ReviewDetails />} />

            <Route path="/category/:id" element={<Category />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

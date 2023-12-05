/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";
import Dashboard from "./pages/dashboard.tsx";
import NewCase from "./pages/new-case.tsx";
import Case from "./pages/case.tsx";
import { theme } from "./chakra.theme.ts";
import { configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { WagmiConfig, createConfig, mainnet, sepolia } from "wagmi";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/new-case",
    element: <NewCase />,
  },
  {
    path: "/cases/:id",
    element: <Case />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <React.StrictMode>
        <WagmiConfig config={config}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
      </WagmiConfig>
    </React.StrictMode>

);

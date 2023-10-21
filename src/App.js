import React, { lazy, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import PasswordRecovery from "./Pages/PasswordRecoveryPage";
import SignupPage from "./Pages/SignupPage";
import HomePage from "./Pages/HomePage";
import JobMarketPlace from "./Pages/JobMarketPlace";
import ResourceMarketplace from "./Pages/ResourceMarketplace";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

function App() {
  return (
    <>
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
      <ChakraProvider theme={theme}>
        <Suspense fallback={<>Loading... </>}>
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/job-marketplace" element={<JobMarketPlace />} />
            <Route
              path="/resource-marketplace"
              element={<ResourceMarketplace />}
            />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<HomePage />} />

            {/* <Route path="/*" element={<Navigate to="/signin" replace />} /> */}
          </Routes>
        </Suspense>
      </ChakraProvider>
    </>
  );
}

export default App;

"use client";
import { Provider } from "react-redux";
import store from "./index";

const ProviderWrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;

import { createRoot } from "react-dom/client";
import { App } from "./App";

const helloWorldElement = <App />;

const roorElement = document.getElementById("root");

const root = createRoot(roorElement);

root.render(helloWorldElement);

import { TailwindProvider } from "tailwind-rn";
import { Home } from "./Home";
import utilities from "./tailwind.json";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <Home />
    </TailwindProvider>
  );
}

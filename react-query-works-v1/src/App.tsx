import React from "react";
import { ItemsListSection, ProductSection } from "./components";

const App: React.FC = () => {
  return (
    <div>
      <h3>React Query Lessons</h3>
      <ProductSection />
      <ItemsListSection />
    </div>
  );
};

export default App;

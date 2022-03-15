import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Elden ring"]);

  // const handleAdd = () => {
  // setCategories(cats => [...cats, 'Tokyo ghoul']);
  //Poniendo el elemento agregado atras lo pondremos al final de la lista
  //y si lo ponemos al principio ira el primero
  //}

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

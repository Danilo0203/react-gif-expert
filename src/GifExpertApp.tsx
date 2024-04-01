import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);
  const onAddCategory = (newValue: string) => {
    const catMinuscula = categories.map((x) => x.toLowerCase());
    if (catMinuscula.includes(newValue.toLowerCase())) return;
    // 1. Agregar nuevos elementos a un array
    setCategories([newValue, ...categories]);

    // setCategories([
    //   // Seleccionamos la posicion en el que queremos insertar el nuevo elemento
    //   ...categories.slice(0, 0),
    //   // Insertamos el valor nuevo
    //   "valorant",
    //   // Volvemos a cargar el array pero con todos los datos
    //   ...categories.slice(0),
    // ]);
  };

  return (
    <>
      <h1 className="py-5 text-center text-5xl font-bold">GIF EXPERT APP</h1>
      <hr />
      {/* Input */}
      <AddCategory
        // onAddCategory={setCategories}
        onNewValue={onAddCategory}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

import React, { useState } from "react";

interface InputValue {
  onNewValue: (x: string) => void;
}

export const AddCategory = ({ onNewValue }: InputValue) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value: string = inputValue.trim();
    if (value.length <= 1) return;
    onNewValue(value);
    setInputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex w-full items-center justify-center p-5">
        <div className="flex w-full justify-center rounded-lg bg-gray-200">
          <div className="flex w-full justify-center">
            <div className="flex w-10 items-center justify-center rounded-bl-lg rounded-tl-lg border-r border-gray-200 bg-white p-5">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute w-5 fill-gray-500 transition"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="w-1/3 bg-white pl-2 text-base font-semibold outline-0"
              placeholder="Buscar gifs..."
              value={inputValue}
              onChange={onInputChange}
              id=""
            />
            <input
              type="submit"
              value="Buscar"
              className="rounded-br-lg rounded-tr-lg bg-blue-500 p-2 font-semibold text-white transition-colors hover:bg-blue-800"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

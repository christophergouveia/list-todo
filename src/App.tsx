import { useState, type ComponentPropsWithoutRef } from "react";
import "./App.css";
import * as React from "react";
import { PencilIcon, PencilSlashIcon } from "@phosphor-icons/react";

function App() {
  const [items, setItems] = useState<
    { item: string; checked: boolean; editing?: boolean }[]
  >([
    {
      item: "Item 1 abluabluablua",
      checked: true,
      editing: false,
    },
    {
      item: "Item 2",
      checked: false,
      editing: false,
    },
    {
      item: "Item 3",
      checked: false,
      editing: false,
    },
  ]);

  function checkboxChanged(index: number, checked: boolean) {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = { ...newItems[index], checked };
      return newItems;
    });
  }

  function editItem(index: number) {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = {
        ...newItems[index],
        editing: !newItems[index].editing,
      };
      return newItems;
    });
    console.log(items);
  }

  return (
    <div className="container">
      <header className="App-header">
        <h1>Lista TODO</h1>
        <h3>
          Manipulação de Arrays e Strings no React com persistência em local
          storage.
        </h3>
      </header>
      <main>
        <div className="items-container">
          {items.map((item, index) => (
            <Item
              key={index}
              checkboxChanged={(e) => checkboxChanged(index, e.target.checked)}
              editItem={() => editItem(index)}
              checked={item.checked}
              editing={item.editing}
            >
              {item.item}
            </Item>
          ))}
        </div>
      </main>
    </div>
  );
}

interface ItemProps extends ComponentPropsWithoutRef<"li"> {
  checkboxChanged?: React.ChangeEventHandler<HTMLInputElement>;
  editItem?: React.MouseEventHandler<HTMLButtonElement>;
  checked: boolean;
  editing?: boolean;
}

function Item({
  children,
  checkboxChanged,
  editItem,
  checked,
  editing,
  ...rest
}: ItemProps) {
  return (
    <li className="item-container" {...rest}>
      <label className="item-label">
        <input
          type="checkbox"
          onChange={checkboxChanged}
          checked={checked}
          className="item-checkbox"
        />
        {editing ? (
          <input
            type="text"
            defaultValue={children as string}
            className="item-edit-input"
          />
        ) : (
          <span className={`item-text ${checked ? "item-checked" : ""}`}>
            {children}
          </span>
        )}

        <button
          className="item-edit-btn"
          aria-label="Editar tarefa"
          onClick={editItem}
        >
          {editing ? (
            <PencilSlashIcon width={15} height={15} />
          ) : (
            <PencilIcon width={15} height={15} />
          )}
        </button>
      </label>
      {/* <button className="item-delete-btn" aria-label="Excluir tarefa"></button> */}
    </li>
  );
}

export default App;

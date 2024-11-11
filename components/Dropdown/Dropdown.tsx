import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { dropdownStyles } from "./Dropdown.style";

export type DropdownProps = {
  list: { id: string; nome: string }[]; // Alterado para aceitar um array de objetos com id e nome
  onChange: (selectedId: string) => void; // Prop para lidar com a mudança de seleção
};

const Dropdown = ({ list, onChange, ...rest }: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState(list[0]?.id || "");
  const [query, setQuery] = useState("");

  const filteredItems =
    query === ""
      ? list
      : list.filter((item) => {
          return item.nome.toLowerCase().includes(query.toLowerCase());
        });

  const handleChange = (selectedId: string) => {
    setSelectedItem(selectedId);
    onChange(selectedId); // Atualiza o valor selecionado externamente
  };

  return (
    <Combobox value={selectedItem} onChange={handleChange} {...rest}>
      <div className={dropdownStyles.container}>
        <div className={dropdownStyles.containerMenu}>
          <Combobox.Input
            className={dropdownStyles.input}
            displayValue={(id: string) =>
              list.find((item) => item.id === id)?.nome || ""
            }
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className={dropdownStyles.button}>
            <ChevronDownIcon
              className="h-5 w-5 text-primary"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className={dropdownStyles.optionsContainer}>
            {filteredItems.length === 0 && query !== "" ? (
              <div className={dropdownStyles.noResult}>Nenhum selecionado.</div>
            ) : (
              filteredItems.map((item) => (
                <Combobox.Option
                  className={({ active }) =>
                    `${dropdownStyles.option} ${
                      active ? "bg-dark text-gray-primary" : "text-gray-900"
                    }`
                  }
                  key={item.id}
                  value={item.id} // Agora o valor é o id do item
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium text-primary" : "font-normal"
                        }`}
                      >
                        {item.nome} {/* Exibe o nome do item */}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default Dropdown;

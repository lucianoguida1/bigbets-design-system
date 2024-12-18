import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import { SingleValue, MultiValue } from "react-select";

export type ReactSelectProps = {
  url_api: string;
  multSelect?: boolean;
  className?: string;
  defaultValue?: SingleValue<OptionType> | MultiValue<OptionType>;
  defaultOptions?: OptionType[];
  incrementDefaultOptions?: boolean;
  onChange?: (
    selectedValue: SingleValue<OptionType> | MultiValue<OptionType> | null
  ) => void;
};

type OptionType = {
  value: any;
  label: string;
};

const ReactSelect = ({
  url_api,
  multSelect = false,
  className = "",
  defaultValue = null,
  defaultOptions = [],
  incrementDefaultOptions = true,
  onChange,
  ...rest
}: ReactSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<OptionType> | MultiValue<OptionType> | null
  >(defaultValue);

  const [currentDefaultOptions, setCurrentDefaultOptions] =
    useState<OptionType[]>(defaultOptions);

  // Função para buscar opções com base no inputValue
  const fetchOptions = async (inputValue: string) => {
    try {
      let new_url = url_api.includes("?") ? `${url_api}&` : `${url_api}?`;
      const response = await fetch(`${new_url}search=${inputValue}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();
      const newOptions = data.data.map((item: any) => ({
        value: item.id,
        label: item.nome,
      }));

      if (incrementDefaultOptions) {
        setCurrentDefaultOptions((prevOptions) => {
          const allOptions = [...prevOptions, ...newOptions];
          return Array.from(
            new Map(allOptions.map((opt) => [opt.value, opt])).values()
          );
        });
      }

      return newOptions;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  };

  // Busca inicial para popular as opções padrão
  useEffect(() => {
    if (incrementDefaultOptions) {
      const fetchInitialOptions = async () => {
        const initialOptions = await fetchOptions(""); // Busca inicial sem inputValue
        setCurrentDefaultOptions((prevOptions) => {
          const allOptions = [...prevOptions, ...initialOptions];
          return Array.from(
            new Map(allOptions.map((opt) => [opt.value, opt])).values()
          );
        });
      };

      fetchInitialOptions();
    }
  }, [url_api, incrementDefaultOptions]); // Executa sempre que a URL ou a flag mudar

  // Gerenciar a mudança no valor selecionado
  const handleChange = (
    newValue: SingleValue<OptionType> | MultiValue<OptionType>
  ) => {
    setSelectedOption(newValue); // Atualiza o estado interno
    if (onChange) {
      onChange(newValue); // Chama a função passada via props
    }
  };

  return (
    <div className={className}>
      <AsyncSelect
        isMulti={multSelect}
        cacheOptions
        loadOptions={fetchOptions}
        defaultOptions={currentDefaultOptions} // Usa o estado `currentDefaultOptions`
        value={selectedOption}
        onChange={handleChange} // Handler atualizado
        placeholder="Digite para buscar..."
        {...rest}
      />
    </div>
  );
};

export default ReactSelect;

import React, { useEffect, useState } from "react";
import AsyncSelect from "react-select/async";
import { SingleValue, MultiValue } from "react-select";

export type ReactSelectProps = {
  url_api: string;
  multSelect?: boolean;
  dados_inicial?: {};
};

type OptionType = {
  value: any;
  label: string;
};

const ReactSelect = ({
  url_api,
  multSelect = false,
  ...rest
}: ReactSelectProps) => {
  const [selectedOption, setSelectedOption] = useState<
    SingleValue<OptionType> | MultiValue<OptionType> | null
  >(null);
  const [defaultOptions, setDefaultOptions] = useState<OptionType[]>([]);

  // Função para buscar os valores iniciais do endpoint sem parâmetros
  const fetchDefaultOptions = async () => {
    try {
      const response = await fetch(url_api, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição inicial: ${response.status}`);
      }

      const data = await response.json();
      const options = data.paises.map((item: any) => ({
        value: item.id,
        label: item.nome,
      }));

      setDefaultOptions(options); // Define as opções padrão
    } catch (error) {
      console.error("Erro ao buscar valores padrão:", error);
    }
  };

  // Função para buscar opções com base na entrada do usuário
  const fetchOptions = async (inputValue: string) => {
    if (!inputValue) return defaultOptions; // Retorna os valores padrão se não houver entrada
    try {
      const response = await fetch(`${url_api}?search=${inputValue}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();
      const newOptions = data.paises.map((item: any) => ({
        value: item.id,
        label: item.nome,
      }));

      // Mescla os novos itens buscados com os defaults (removendo duplicados)
      setDefaultOptions((prevOptions) => {
        const allOptions = [...prevOptions, ...newOptions];
        return Array.from(
          new Map(allOptions.map((opt) => [opt.value, opt])).values()
        );
      });

      return newOptions;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    }
  };

  const handleChange = (
    newValue: SingleValue<OptionType> | MultiValue<OptionType>
  ) => {
    setSelectedOption(newValue);
  };

  useEffect(() => {
    // Busca os valores padrão ao montar o componente
    fetchDefaultOptions();
  }, []);

  return (
    <AsyncSelect
      isMulti={multSelect} // Define se é múltipla seleção
      cacheOptions
      loadOptions={fetchOptions} // Incrementa com a busca
      defaultOptions={defaultOptions} // Define os valores iniciais padrão
      value={selectedOption} // Valor atual selecionado
      onChange={handleChange} // Atualiza o estado
      placeholder="Digite para buscar..."
      {...rest}
    />
  );
};

export default ReactSelect;

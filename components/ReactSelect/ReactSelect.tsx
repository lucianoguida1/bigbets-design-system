import React, { useState } from "react";
import AsyncSelect from 'react-select/async';

export type ReactSelectProps = {
  url_api: string;
  dados_inicial?: {};
}

const ReactSelect = ({
  url_api,
  dados_inicial,
  ...rest
}: ReactSelectProps) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const fetchOptions = async (inputValue: string) => {
    if (!inputValue) return [];
    try {
      const response = await fetch(`${url_api}?search=${inputValue}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json(); // Use `response.json()` para extrair o corpo da resposta
      return data.paises.map((item: any) => ({
        value: item.id, // O campo `id` da sua API
        label: item.nome, // O campo `nome` ou qualquer outro campo de exibição
      }));
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  };

  return (
    <AsyncSelect
      cacheOptions
      loadOptions={fetchOptions} // Chama a função de busca
      defaultOptions
      onChange={setSelectedOption} // Atualiza o estado ao selecionar
      placeholder="Digite para buscar..."
    />
  );
};

export default ReactSelect;

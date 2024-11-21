import React from "react";
import { MaterialReactTable } from "material-react-table";

export type ReactTableProps = {
  data: Array<Record<string, any>>;
};

const ReactTable: React.FC<ReactTableProps> = ({ data }) => {
  // Gerar colunas automaticamente com base nas chaves do primeiro objeto
  const columns = Object.keys(data[0] || {}).map((key) => ({
    accessorKey: key, // Define a chave de acesso
    header: key.charAt(0).toUpperCase() + key.slice(1), // Título com a primeira letra maiúscula
    enableSorting: true, // Habilitar ordenação
  }));

  return <MaterialReactTable columns={columns} data={data} enableSorting />;
};

export default ReactTable;

type Props = {
  config: any;
  data: any;
};

const Table = ({ config, data }: Props) => {
  const renderedRows = data.map((company: any, idx: number) => {
    return (
      <tr>
        {config.map((val: any, idx: number) => {
          return <td className="p-3">{val.render(company)}</td>;
        })}
      </tr>
    );
  });
  const renderedHeaders = config.map((config: any, idx: number) => {
    return (
      <th
        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {config.label}
      </th>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
      <table className="min-w-full divide-y divide-gray-200 m-5">
        <thead className="bg-gray-50"><tr>{renderedHeaders}</tr></thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;

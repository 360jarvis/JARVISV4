import type { ReactNode } from 'react';

export type TableColumn<Row> = {
  key: keyof Row | string;
  label: string;
  render?: (row: Row) => ReactNode;
};

export default function Table<Row extends Record<string, ReactNode>>(props: { columns: TableColumn<Row>[]; rows: Row[] }) {
  return (
    <div style={{ overflowX: 'auto', border: '1px solid var(--jarvixx-border)', borderRadius: 18, background: '#fff' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ background: '#fbfaf7' }}>
            {props.columns.map((column) => (
              <th key={String(column.key)} style={{ textAlign: 'left', padding: '13px 14px', color: 'var(--jarvixx-muted)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', borderBottom: '1px solid var(--jarvixx-border)' }}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row, index) => (
            <tr key={index}>
              {props.columns.map((column) => (
                <td key={String(column.key)} style={{ padding: '14px', borderBottom: index === props.rows.length - 1 ? 0 : '1px solid var(--jarvixx-border)', color: 'var(--jarvixx-ink)' }}>
                  {column.render ? column.render(row) : row[column.key as keyof Row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import type { ReactNode } from 'react';
import Button from './Button';
import EmptyState from './EmptyState';
import Skeleton from './Skeleton';

export type EnterpriseDataTableColumn<Row> = {
  key: keyof Row | string;
  label: string;
  width?: string;
  sortable?: boolean;
  render?: (row: Row) => ReactNode;
};

export type EnterpriseDataTableAction<Row> = {
  label: string;
  onSelect?: (row: Row) => void;
};

type EnterpriseDataTableProps<Row extends Record<string, ReactNode>> = {
  title: string;
  description?: string;
  columns: EnterpriseDataTableColumn<Row>[];
  rows: Row[];
  rowActions?: EnterpriseDataTableAction<Row>[];
  loading?: boolean;
  error?: string;
  emptyTitle?: string;
  emptyMessage?: string;
  page?: number;
  pageSize?: number;
  totalRows?: number;
  selectable?: boolean;
};

function EnterpriseDataTableSkeleton({ columns }: { columns: number }) {
  return (
    <tbody>
      {[0, 1, 2, 3, 4].map((row) => (
        <tr key={row}>
          {Array.from({ length: columns }).map((_, column) => (
            <td key={`${row}-${column}`} style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>
              <Skeleton height={14} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default function EnterpriseDataTable<Row extends Record<string, ReactNode>>({
  title,
  description,
  columns,
  rows,
  rowActions,
  loading = false,
  error,
  emptyTitle = 'No records found',
  emptyMessage = 'There are no records to display yet.',
  page = 1,
  pageSize = 25,
  totalRows,
  selectable = true
}: EnterpriseDataTableProps<Row>) {
  const visibleColumns = selectable ? [{ key: '__select', label: '', width: '44px' }, ...columns] : columns;
  const resolvedTotal = totalRows ?? rows.length;
  const start = resolvedTotal === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, resolvedTotal);

  if (error) {
    return (
      <section className="lux-card" style={{ padding: 18 }}>
        <EmptyState title="Table could not load" message={error} />
      </section>
    );
  }

  return (
    <section className="lux-card" style={{ overflow: 'hidden', boxShadow: '0 18px 50px rgba(23,19,13,0.04)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 14,
          padding: 18,
          borderBottom: '1px solid var(--jarvixx-border)',
          background: '#fff'
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: 18, letterSpacing: '-0.02em' }}>{title}</h2>
          {description ? <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13 }}>{description}</p> : null}
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Button variant="secondary">Saved Views</Button>
          <Button variant="secondary">Export</Button>
          <Button>New</Button>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: 14, borderBottom: '1px solid var(--jarvixx-border)', background: '#fbfaf7' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
          <input
            aria-label={`Search ${title}`}
            placeholder="Search table..."
            disabled
            style={{
              minHeight: 40,
              width: 'min(360px, 100%)',
              borderRadius: 999,
              border: '1px solid var(--jarvixx-border)',
              background: '#fff',
              color: 'var(--jarvixx-muted)',
              padding: '0 14px',
              outline: 0
            }}
          />
          <Button variant="secondary">Filters</Button>
          <Button variant="ghost">Density</Button>
        </div>
        <div style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>
          {start}-{end} of {resolvedTotal}
        </div>
      </div>

      {rows.length === 0 && !loading ? (
        <div style={{ padding: 18 }}>
          <EmptyState title={emptyTitle} message={emptyMessage} />
        </div>
      ) : (
        <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 13 }}>
            <thead>
              <tr>
                {visibleColumns.map((column) => (
                  <th
                    key={String(column.key)}
                    scope="col"
                    style={{
                      position: 'sticky',
                      top: 0,
                      zIndex: 1,
                      width: column.width,
                      textAlign: 'left',
                      padding: '13px 14px',
                      color: 'var(--jarvixx-muted)',
                      fontSize: 11,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid var(--jarvixx-border)',
                      background: '#fff'
                    }}
                  >
                    {column.key === '__select' ? <input type="checkbox" aria-label="Select all rows" disabled /> : column.label}
                    {'sortable' in column && column.sortable ? <span aria-hidden="true" style={{ marginLeft: 6 }}>↕</span> : null}
                  </th>
                ))}
                {rowActions && rowActions.length > 0 ? (
                  <th scope="col" style={{ width: 96, padding: '13px 14px', borderBottom: '1px solid var(--jarvixx-border)', background: '#fff', color: 'var(--jarvixx-muted)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Actions
                  </th>
                ) : null}
              </tr>
            </thead>
            {loading ? (
              <EnterpriseDataTableSkeleton columns={visibleColumns.length + (rowActions && rowActions.length > 0 ? 1 : 0)} />
            ) : (
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {visibleColumns.map((column) => (
                      <td key={String(column.key)} style={{ padding: '14px', borderBottom: rowIndex === rows.length - 1 ? 0 : '1px solid var(--jarvixx-border)', color: 'var(--jarvixx-ink)', verticalAlign: 'middle' }}>
                        {column.key === '__select' ? <input type="checkbox" aria-label={`Select row ${rowIndex + 1}`} disabled /> : column.render ? column.render(row) : row[column.key as keyof Row]}
                      </td>
                    ))}
                    {rowActions && rowActions.length > 0 ? (
                      <td style={{ padding: '14px', borderBottom: rowIndex === rows.length - 1 ? 0 : '1px solid var(--jarvixx-border)' }}>
                        <Button variant="secondary">More</Button>
                      </td>
                    ) : null}
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: 14, borderTop: '1px solid var(--jarvixx-border)', background: '#fff' }}>
        <div style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>Page {page} · {pageSize} per page</div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button variant="secondary" disabled>Previous</Button>
          <Button variant="secondary" disabled>Next</Button>
        </div>
      </div>
    </section>
  );
}

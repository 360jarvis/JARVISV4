export default function Skeleton(props: { height?: number; width?: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        height: props.height ?? 16,
        width: props.width ?? '100%',
        borderRadius: 999,
        background: 'linear-gradient(90deg, #f3eee4 0%, #fff 50%, #f3eee4 100%)',
        border: '1px solid var(--jarvixx-border)'
      }}
    />
  );
}

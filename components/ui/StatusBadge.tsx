import Badge from './Badge';

export default function StatusBadge(props: { status: string }) {
  const status = props.status.toLowerCase();
  const tone = status.includes('active') || status.includes('paid') || status.includes('complete') ? 'success'
    : status.includes('pending') || status.includes('hold') ? 'warning'
    : status.includes('failed') || status.includes('declined') || status.includes('cancel') ? 'danger'
    : 'neutral';

  return <Badge tone={tone}>{props.status}</Badge>;
}

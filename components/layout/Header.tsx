import TopNavigation from './TopNavigation';

export default function Header(props: { title: string; subtitle: string }) {
  return <TopNavigation title={props.title} subtitle={props.subtitle} />;
}

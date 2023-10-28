export default interface IElement {
  component: string;
  props?: {
    className?: string;
  };
  children?: string;
}

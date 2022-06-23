interface InfoboxProps {
  text?: string;
  parentCallback?: () => void;
}

export const Infobox = ({ text = "Suppe", parentCallback }: InfoboxProps) => {
  return <div onClick={() => parentCallback?.()}>{text}</div>;
};

interface InfoboxProps {
  text?: string;
  parentCallback?: () => void;
}

export const Infobox = ({ text = "Suppse", parentCallback }: InfoboxProps) => {
  return <div onClick={() => parentCallback?.()}>{text}</div>;
};

type Props = {
  label: string;
};

export const LabeledSection = ({ label, children }: React.PropsWithChildren<Props>) => {
  return (
    <div className="space-y-1">
      <p className="text-xs font-thin uppercase tracking-widest">{label}</p>
      {children}
    </div>
  );
};

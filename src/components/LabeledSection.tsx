type Props = {
  label: string;
};

export const LabeledSection = ({ label, children }: React.PropsWithChildren<Props>) => {
  return (
    <div className="space-y-1">
      <p className="text-sm font-thin uppercase tracking-widest">{label}</p>
      {children}
    </div>
  );
};

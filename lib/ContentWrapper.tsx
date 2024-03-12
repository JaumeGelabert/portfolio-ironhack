interface ContentWrapperProps {
  children: React.ReactNode;
}

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <div className="w-full flex flex-row justify-center items-start">
      <div className="w-[750px]">{children}</div>
    </div>
  );
};

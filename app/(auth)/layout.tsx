export default function authLayout({
        children,
      }: Readonly<{
        children: React.ReactNode;
      }>){
    return (
        <div className="p-1 border-b text-center">
            30 % off for 2 days
            {children}
        </div>
    )
}
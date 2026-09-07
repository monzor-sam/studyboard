<<<<<<< HEAD
// A nested layout — wraps only pages under /groups (i.e. /groups and /groups/[id]).
// Demonstrates that layouts can nest and each adds its own shared UI.
export default function GroupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-24 pt-10">
      <p className="mb-6 text-xs uppercase tracking-wide text-pink-400">
        StudyBoard / Groups
      </p>
      {children}
    </div>
  );
}
=======
export default function GroupsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return(
        <div className="p-24 pt-10">
            <p className="mb-6 text-xs uppercase tracking-wide text-pink-300">
                StudyBoard / Groups
            </p>
            {children}
        </div>
    );
}
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92

import GroupCard from "@/components/GroupCard";
import { getGroups } from "@/lib/data";

<<<<<<< HEAD
// A Server Component — Server Components can be `async` and query the
// database directly, no client-side fetching needed.
export default async function Home() {
  const allGroups = await getGroups();
  const groups = allGroups.slice(0, 2); // "featured" = first two for now

  return (
    <main className="flex min-h-screen flex-col p-24">
      <h1 className="text-4xl font-bold text-pink-900 text-center">Welcome to Studyboard</h1>
      <p className="mt-4 text-center text-pink-800">
        Coordinate tasks with your study groups, all in one place.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-pink-700">Featured Groups</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
=======
export default function Home() {
  const groups = getGroups();
  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-pink-500">Welcome to StudyBoard.</h1>
      <p className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      </p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </main>
  );
}

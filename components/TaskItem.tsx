"use client";

import { useState } from "react";
import { Task } from "@/lib/data";

<<<<<<< HEAD
// "use client" is required because this component owns interactive state
// (useState) and responds to a click event. Note: since there's no backend
// yet, toggling here only affects this component's local state and will
// reset on page refresh — real persistence arrives in Week 5 (database)
// and Week 4 (API routes).
export default function TaskItem({ task }: { task: Task }) {
  const [done, setDone] = useState(task.done);

  return (
    <li className="flex items-center gap-3 rounded-md border px-3 py-2 text-pink-600 hover:bg-pink-50 transition-colors">
      <input
        type="checkbox"
        checked={done}
        onChange={() => setDone(!done)}
        className="h-4 w-4 text-pink-600 focus:ring-pink-500"
      />
      <span className={done ? "line-through text-pink-400" : ""}>
        {task.title}
      </span>
    </li>
  );
}
=======
export default function TaskItem({ task }: { task: Task }) {
    const [done, setDone] = useState(task.done);

    return(
        <li className="flex items-center gap-3 rounded-md border px-3 py-2">
            <input
                type="checkbox"
                checked={done}
                onChange={() => setDone(!done)}
                className="h-4 w-4"
            />
            <span className={done ? "line-through text-gray-400" : ""}>
                {task.title}
            </span>
        </li>
    );
}
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92

<<<<<<< HEAD
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getGroupById, createTask } from "@/lib/data";

// GET /api/groups/:id/tasks — list a group's tasks. Stays PUBLIC.
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const group = await getGroupById(params.id);

  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  return NextResponse.json(group.tasks);
}

// TODO (Step 14): POST /api/groups/:id/tasks — add a task to a group.
// Requires authentication AND ownership of the PARENT GROUP (not the task —
// tasks don't have their own owner field, so we check via their group).
// Follow the same 3-check pattern as PATCH /api/groups/:id in the previous file.
export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const group = await getGroupById(params.id);
  
=======
import { NextRequest, NextResponse } from "next/server";
import { getGroupById, getTasksByGroupId, createTask } from "@/lib/data";

type Params = { params: Promise<{ id: string }> };

// GET /api/groups/:id/tasks
export async function GET(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const group = getGroupById(id);
  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }
  return NextResponse.json(getTasksByGroupId(id));
}

// POST /api/groups/:id/tasks
export async function POST(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const group = getGroupById(id);
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92
  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

<<<<<<< HEAD
  if (group.ownerId !== session.user.id) {
    return NextResponse.json(
      { error: "Only the owner can add tasks to this group" },
      { status: 403 }
    );
  }

  const body = await request.json();

  if (!body.title) {
    return NextResponse.json(
      { error: "'title' is required" },
=======
  const body = await request.json();
  if (typeof body.title !== "string" || body.title.trim() === "") {
    return NextResponse.json(
      { error: "title is required and must be a non-empty string" },
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92
      { status: 400 }
    );
  }

<<<<<<< HEAD
  const newTask = await createTask(params.id, body.title);
  return NextResponse.json(newTask, { status: 201 });
}
=======
  const task = createTask(id, body.title);
  return NextResponse.json(task, { status: 201 });
}
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92

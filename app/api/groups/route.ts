<<<<<<< HEAD
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getGroups, createGroup } from "@/lib/data";

// GET /api/groups — list every group. Stays PUBLIC — no changes needed.
export async function GET() {
  const groups = await getGroups();
  return NextResponse.json(groups);
}

// TODO (Step 12): POST /api/groups — create a new group. Requires authentication.
// 1. Get the session: const session = await getServerSession(authOptions);
// 2. If there's no session, return 401 with an error message.
// 3. Parse and validate the body (name, subject required) — this part is
//    already written for you below.
// 4. Call createGroup with ownerId: session.user.id added to the input.
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json(
      { error: "You must be logged in to create a group." },
      { status: 401 }
    );
  }

  const body = await request.json();

  if (!body.name || !body.subject) {
    return NextResponse.json(
      { error: "'name' and 'subject' are required" },
=======
import { NextRequest, NextResponse } from "next/server";
import { getGroups, createGroup } from "@/lib/data";

// GET /api/groups — return all groups
export async function GET() {
  return NextResponse.json(getGroups());
}

// POST /api/groups — create a group
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (typeof body.name !== "string" || body.name.trim() === "") {
    return NextResponse.json(
      { error: "name is required and must be a non-empty string" },
      { status: 400 }
    );
  }
  if (typeof body.subject !== "string" || body.subject.trim() === "") {
    return NextResponse.json(
      { error: "subject is required and must be a non-empty string" },
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92
      { status: 400 }
    );
  }

<<<<<<< HEAD
  // TODO: replace this — a group currently has no owner, which will
  // throw a Prisma error since ownerId is required in the schema.
  const newGroup = await createGroup({
    name: body.name,
    subject: body.subject,
    memberCount: body.memberCount,
    ownerId: session.user.id, // TODO: add ownerId from the session user
  });

  return NextResponse.json(newGroup, { status: 201 });
}
=======
  const group = createGroup({
    name: body.name,
    subject: body.subject,
    memberCount: typeof body.memberCount === "number" ? body.memberCount : undefined,
  });

  return NextResponse.json(group, { status: 201 });
}
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92

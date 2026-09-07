<<<<<<< HEAD
import { prisma } from "@/lib/prisma";

=======
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92
export type Task = {
  id: string;
  title: string;
  done: boolean;
<<<<<<< HEAD
  groupId: string;
=======
};

export type Member = {
  id: string;
  name: string;
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92
};

export type Group = {
  id: string;
  name: string;
  subject: string;
  memberCount: number;
<<<<<<< HEAD
  tasks: Task[];
  ownerId: string;
  owner: {
    id: string;
    name: string;
  };
};

export async function getGroups(): Promise<Group[]> {
  return prisma.group.findMany({
    include: {
      tasks: true,
      owner: { select: { id: true, name: true } },
    },
    orderBy: { createdAt: "asc" },
  });
}

export async function getGroupById(id: string): Promise<Group | null> {
  return prisma.group.findUnique({
    where: { id },
    include: {
      tasks: true,
      owner: { select: { id: true, name: true } },
    },
  });
}

type NewGroupInput = {
  name: string;
  subject: string;
  memberCount?: number;
  ownerId: string;
};

export async function createGroup(input: NewGroupInput): Promise<Group> {
  return prisma.group.create({
    data: {
      name: input.name,
      subject: input.subject,
      memberCount: input.memberCount ?? 1,
      ownerId: input.ownerId,
    },
    include: {
      tasks: true,
      owner: { select: { id: true, name: true } },
    },
  });
}

type UpdateGroupInput = Partial<{
  name: string;
  subject: string;
  memberCount: number;
}>;

export async function updateGroup(
  id: string,
  updates: UpdateGroupInput
): Promise<Group | undefined> {
  try {
    return await prisma.group.update({
      where: { id },
      data: updates,
      include: {
        tasks: true,
        owner: { select: { id: true, name: true } },
      },
    });
  } catch {
    return undefined;
  }
}

export async function deleteGroup(id: string): Promise<boolean> {
  try {
    await prisma.group.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

export async function createTask(
  groupId: string,
  title: string
): Promise<Task | undefined> {
  const group = await prisma.group.findUnique({ where: { id: groupId } });
  if (!group) return undefined;

  return prisma.task.create({
    data: { title, groupId },
  });
}

type UpdateTaskInput = Partial<{
  title: string;
  done: boolean;
}>;

export async function updateTask(
  groupId: string,
  taskId: string,
  updates: UpdateTaskInput
): Promise<Task | undefined> {
  const task = await prisma.task.findFirst({
    where: { id: taskId, groupId },
  });
  if (!task) return undefined;

  return prisma.task.update({
    where: { id: taskId },
    data: updates,
  });
}

export async function deleteTask(
  groupId: string,
  taskId: string
): Promise<boolean> {
  const task = await prisma.task.findFirst({
    where: { id: taskId, groupId },
  });
  if (!task) return false;

  await prisma.task.delete({ where: { id: taskId } });
  return true;
}
=======
  members: Member[];
  tasks: Task[];
};

// Static mock data — will be replaced by real database queries in Week 5.
const groups: Group[] = [
  {
    id: "1",
    name: "Data Structures Study Circle",
    subject: "Computer Science",
    memberCount: 5,
    members: [
      { id: "m1", name: "Alice" },
      { id: "m2", name: "Bob" },
      { id: "m3", name: "Carlos" },
      { id: "m4", name: "Diana" },
      { id: "m5", name: "Eve" },
    ],
    tasks: [
      { id: "t1", title: "Review binary trees", done: false },
      { id: "t2", title: "Practice linked list problems", done: true },
      { id: "t3", title: "Summarize Big-O notation", done: false },
    ],
  },
  {
    id: "2",
    name: "Thermodynamics Crew",
    subject: "Physics",
    memberCount: 3,
    members: [
      { id: "m6", name: "Frank" },
      { id: "m7", name: "Grace" },
      { id: "m8", name: "Henry" },
    ],
    tasks: [
      { id: "t4", title: "Solve entropy problem set", done: false },
      { id: "t5", title: "Read Chapter 4", done: false },
    ],
  },
  {
    id: "3",
    name: "Philippine History Readers",
    subject: "History",
    memberCount: 8,
    members: [
      { id: "m9", name: "Ivy" },
      { id: "m10", name: "Jack" },
      { id: "m11", name: "Karen" },
      { id: "m12", name: "Leo" },
      { id: "m13", name: "Mia" },
      { id: "m14", name: "Nina" },
      { id: "m15", name: "Oscar" },
      { id: "m16", name: "Paula" },
    ],
    tasks: [
      { id: "t6", title: "Outline Chapter 2 discussion", done: true },
      { id: "t7", title: "Prepare debate points", done: false },
      { id: "t8", title: "Watch assigned documentary", done: true },
    ],
  },
];

export function getGroups(): Group[] {
  return groups;
}

export function getGroupById(id: string): Group | undefined {
  return groups.find((group) => group.id === id);
}

export function getTasksByGroupId(id: string): Task[] {
  return getGroupById(id)?.tasks ?? [];
}

export function getMembersByGroupId(id: string): Member[] {
  return getGroupById(id)?.members ?? [];
}

let nextGroupId = groups.length + 1;
let nextTaskId =
  groups.flatMap((g) => g.tasks).length + 1;

export function createGroup(input: {
  name: string;
  subject: string;
  memberCount?: number;
}): Group {
  const newGroup: Group = {
    id: String(nextGroupId++),
    name: input.name,
    subject: input.subject,
    memberCount: input.memberCount ?? 0,
    members: [],
    tasks: [],
  };
  groups.push(newGroup);
  return newGroup;
}

export function updateGroup(
  id: string,
  updates: Partial<Pick<Group, "name" | "subject" | "memberCount">>
): Group | undefined {
  const group = getGroupById(id);
  if (!group) return undefined;
  Object.assign(group, updates);
  return group;
}

export function deleteGroup(id: string): boolean {
  const index = groups.findIndex((g) => g.id === id);
  if (index === -1) return false;
  groups.splice(index, 1);
  return true;
}

export function createTask(groupId: string, title: string): Task | undefined {
  const group = getGroupById(groupId);
  if (!group) return undefined;
  const newTask: Task = {
    id: `t${nextTaskId++}`,
    title,
    done: false,
  };
  group.tasks.push(newTask);
  return newTask;
}

export function updateTask(
  groupId: string,
  taskId: string,
  updates: Partial<Pick<Task, "title" | "done">>
): Task | undefined {
  const group = getGroupById(groupId);
  if (!group) return undefined;
  const task = group.tasks.find((t) => t.id === taskId);
  if (!task) return undefined;
  Object.assign(task, updates);
  return task;
}

export function deleteTask(groupId: string, taskId: string): boolean {
  const group = getGroupById(groupId);
  if (!group) return false;
  const index = group.tasks.findIndex((t) => t.id === taskId);
  if (index === -1) return false;
  group.tasks.splice(index, 1);
  return true;
}
>>>>>>> 641aad2650ce991ae14c58f433dc2a40c0546a92

"use server";
import { redirect } from "next/navigation";

function navigateToTask() {
  redirect("/task");
}

export { navigateToTask };

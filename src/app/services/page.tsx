import { redirect } from "next/navigation";
import { firstServicePath } from "@/data/practices";

export default function ServicesIndexPage() {
  redirect(firstServicePath);
}

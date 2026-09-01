import { redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function LegacyAboutPracticePage({ params }: Props) {
  const { slug } = await params;
  redirect(`/services/${slug}`);
}

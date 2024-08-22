import PageIllustration from "@/components/hero-illustration-right";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grow">
      <PageIllustration />

      {children}
    </main>
  );
}

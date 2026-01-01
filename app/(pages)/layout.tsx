import FooterSm from "@/components/common/footer-sm";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-3 flex min-h-screen max-w-3xl flex-col space-y-8">
      {children}
      <div className="mt-auto">
        <FooterSm />
      </div>
    </div>
  );
}

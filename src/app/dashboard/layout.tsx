import { ReactNode } from "react";

export default function DashboardLayout({
  children,
  product,
  analytics,
  payments,
}: {
  children: ReactNode;
  product: ReactNode;
  analytics: ReactNode;
  payments: ReactNode;
}) {
  return (
    <div className="m-5 p-5 flex flex-row flex-wrap gap-2">
      {children}
      <div className="mt-5 flex w-full justify-center gap-5">
        {product}
        {analytics}
      </div>
      {payments}
    </div>
  );
}

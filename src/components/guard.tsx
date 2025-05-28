"use client";

import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function HydrationGuard({ children }: Props) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return <>{children}</>;
}

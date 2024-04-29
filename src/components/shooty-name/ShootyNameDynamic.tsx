import dynamic from "next/dynamic";

export const ShootyNameDynamic = dynamic(
  () => import("@/components/shooty-name/ShootyName"),
  {
    ssr: false,
  }
);

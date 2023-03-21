import { useRouter } from "next/router";

import { en, ja } from "../locales";

export function useLocale() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : ja;
  return { locale, t };
}
export default useLocale;

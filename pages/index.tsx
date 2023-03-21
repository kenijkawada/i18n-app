import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from "../components/locale-switcher";
import useLocale from "../hooks/useLocal";

export default function IndexPage() {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const { t } = useLocale();

  return (
    <div>
      <h1>Index page</h1>
      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <LocaleSwitcher />

      <Link href="/gsp">To getStaticProps page</Link>
      <br />

      <Link href="/gsp/first">To dynamic getStaticProps page</Link>
      <br />

      <Link href="/gssp">To getServerSideProps page</Link>
      <br />

      <p>{t.hello}</p>
    </div>
  );
}

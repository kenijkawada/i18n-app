import type {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import LocaleSwitcher from "../../components/locale-switcher";
import { en, ja } from "../../locales";

type GspPageProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function GspPage(props: GspPageProps) {
  const router = useRouter();
  const { defaultLocale, isFallback, query } = router;

  if (isFallback) {
    return "Loading...";
  }

  return (
    <div>
      <h1>getStaticProps page</h1>
      <p>Current slug: {query.slug}</p>
      <p>Current locale: {props.locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(props.locales)}</p>

      <LocaleSwitcher />

      <Link href="/gsp">To getStaticProps page</Link>
      <br />

      <Link href="/gssp">To getServerSideProps page</Link>
      <br />

      <Link href="/">To index page</Link>
      <br />

      <p>{props.t.hello}</p>
    </div>
  );
}

type Props = {
  locale?: string;
  locales?: string[];
  t: typeof en | typeof ja;
};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
  locales,
}) => {
  const t = locale === "en" ? en : ja;
  return {
    props: {
      locale,
      locales,
      t,
    },
  };
};

export const getStaticPaths: GetStaticPaths = ({ locales = [] }) => {
  const paths = [];

  for (const locale of locales) {
    paths.push({ params: { slug: "first" }, locale });
    paths.push({ params: { slug: "second" }, locale });
  }

  return {
    paths,
    fallback: true,
  };
};

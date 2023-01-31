import Link from "next/link";
import Layout from "../components/Layout";

import { APP_INFO } from "../environments/index";

const IndexPage = () => {
  const { TITLE } = APP_INFO;
  return (
    <Layout title={`Contact | ${TITLE}`}>
      <main className="flex justify-center mt-8 font-primary">
        <h1 className="font-primary hover:underline text-secondary-300">
          Hello Next.js 👋
        </h1>
      </main>
    </Layout>
  );
};

export default IndexPage;

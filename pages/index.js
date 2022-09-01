import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
// import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';


// export async function getStaticProps() {
//   console.log('HERE BRO! Static')
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData: allPostsData
//     }
//   }
// }

export async function getServerSideProps(context) {
  return { props: { allPostsData: ['SUP SUP'] } }
}

export default function Home({ allPostsData }) {
  console.log(allPostsData, ' all posts')
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData?.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
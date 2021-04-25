import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import Router from 'next/router';
import cookie from 'js-cookie';
import { Button } from 'antd';
function Dashboard() {
  const { data, revalidate } = useSWR('/api/me', async function (args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <p>Loading...</p>;
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }
  return (
    <div>
      <Head>
        <title>Welcome to landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {loggedIn && (
        <>
          <p>Welcome {data.email}!</p>
          <Button type="primary" onClick={() => {
            cookie.remove('token');
            revalidate();
            Router.push('/login');
          }}>
            Logout
        </Button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
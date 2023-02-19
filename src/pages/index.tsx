import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Typography, Button, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Button variant="outlined">Outlined</Button>
        <Typography variant="s48_w700">11</Typography>
      </main>
    </>
  );
}

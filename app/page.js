import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>
        <Link target="_blank" href="/progress-bar">
          Form Progress Bar
        </Link>
      </h1>
      <h1>
        <Link target="_blank" href="/countdown">
          Countdown Timer
        </Link>
      </h1>
      <h1>
        <Link target="_blank" href="/item-search">
          Search Form
        </Link>
      </h1>
    </>
  );
}

import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import chalk from "chalk";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="text-start containernpm">
        <ul className="list-unstyled">
          <li>
            <Link
              className="fst-none text-dark btn btn-primary text-white"
              href={"/products"}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="fst-none text-dark btn btn-primary text-white my-4"
              href={"/sticker"}
            >
              Sticker
            </Link>
          </li>
          <li>
            <button
              className="btn btn-primary"
              onClick={() => {
                router.back();
              }}
            >
              Back to last one
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

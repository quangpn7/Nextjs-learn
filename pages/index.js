import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
import chalk from "chalk";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="text-center">
        <ul className="list-unstyled">
          <li>
            <Link className="fst-none text-dark" href={"/products"}>
              Product
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

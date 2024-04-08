import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <div className="flex text-center w-100% h-100vh justify-center">
        <h2>oops! page not found!</h2>
        <h2 className="text-4xl">404 page</h2>
        <p className="text-slate-500">Sorry, but the page you requested was not found!</p>
        <Link to="/">Go back to home page</Link>
      </div>
    </div>
  )
}

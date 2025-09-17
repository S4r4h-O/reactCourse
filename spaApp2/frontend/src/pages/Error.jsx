import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred";
  let message = "Something went wrong";

  if (error instanceof Response) {
    if (error.status === 500) {
      try {
        const data = JSON.parse(error.statusText || "{}");
        message = data.message || "Server error";
      } catch {
        message = "Server error";
      }
    }

    if (error.status === 404) {
      title = "Not found.";
      message = "Could not find resource or page.";
    }
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

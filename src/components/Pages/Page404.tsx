import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { Container } from "./Page404.styles";

export const Page404 = () => {
  const error = useRouteError();
  const response = isRouteErrorResponse(error) ? (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.data.message}</i>
      </p>
    </div>
  ) : (
    <h1>Oops!</h1>
  );
  return (
    <Container>
      {response}
      <Link to="/"> Return to the HomePage</Link>
    </Container>
  );
};

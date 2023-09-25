// import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // const error: any = useRouteError();
  // console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>A página que você acessou não existe.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
        ERRO 404
      </p>
    </div>
  );
}
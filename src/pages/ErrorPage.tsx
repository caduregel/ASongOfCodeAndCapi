import PublicNav from "@/components/PublicNav";
import { Empty } from "@/components/ui/empty";
import { useRouteError } from "react-router";

function ErrorPage() {
  const melisandreImageURL =
    "https://thronesapi.com/assets/images/melisandre.jpg";

  const error = useRouteError() as any;
  console.error(error);

  return (
    <>
      <PublicNav />
      <div className="flex flex-col w-full py-20 items-center justify-center">
        <Empty className="border border-dashed">
          <img
            src={melisandreImageURL}
            alt="Melisandre from Game of Thrones"
            className="w-48 h-48 mb-4 rounded-lg"
          />
          <h1 className="text-xl italic">
            "The night is dark and full of (t)<b>errors</b>"
          </h1>
          <p>~ Melisandre</p>
        </Empty>
      </div>
    </>
  );
}

export default ErrorPage;

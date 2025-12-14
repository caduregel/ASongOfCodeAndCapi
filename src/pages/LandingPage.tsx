import { Card } from "@/components/ui/card";

function LandingPage() {
  return (
    <>
      <div className="grid grid-cols-2">
        <Card className="m-4 p-4">
          <h2 className="text-2xl font-bold mb-2">
            Welcome to ASongOfCodeAndCapi
          </h2>
          <p>Your gateway to exploring code and AI capabilities.</p>
        </Card>
        <Card className="m-4 p-4">
          <h2 className="text-2xl font-bold mb-2">Get Started</h2>
          <p>Sign up or log in to access your personalized dashboard.</p>
        </Card>
      </div>
    </>
  );
}
export default LandingPage;

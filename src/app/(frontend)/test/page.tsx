import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <main>
        <Button asChild variant="link">
          <Link href="/test/homepage">Homepage</Link>
        </Button>
      </main>
    </div>
  );
}
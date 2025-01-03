import { ModeToggle } from "@/components/common/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <UserButton afterSwitchSessionUrl="/" />
      <ModeToggle />
    </main>
  );
}

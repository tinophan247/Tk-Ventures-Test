import GamePage from "@/components/Games/page";
import PageLayout from "@/components/PageLayout/page";

export default function Home() {
  return (
    <PageLayout>
      <div className="w-[75%]">
        <GamePage/>
      </div>
    </PageLayout>
  )
}

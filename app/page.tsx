import Grid from "./components/grid/grid";
import Card from "./components/card/card";
import {HeroCard} from "./components/card/hero-card/hero-card";
import {PostsCard} from "./components/card/posts-card/posts-card";
import {Button} from "./components/button/button";

export default function Page() {
  return (
    <section>
        <Grid>
            <div className="col-span-2">
                <HeroCard />
            </div>
            <div>
                <Card>test</Card>
            </div>
            <div className="col-span-1 row-span-2 flex flex-col gap-4">
                <PostsCard/>
                <Card>test</Card>
            </div>

            <Card>
                Accessible Design
                <Button>accessible button</Button>
            </Card>
            <Card>test</Card>
            <Card>test</Card>

        </Grid>
    </section>
  )
}

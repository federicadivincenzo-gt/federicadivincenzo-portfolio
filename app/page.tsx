import Grid from "./components/grid/grid";
import Card from "./components/card/card";
import {HeroCard} from "./components/card/hero-card/hero-card";

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
            <div className="col-span-1 row-span-2 flex flex-col">
                <Card styles="grow">testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</Card>
                <Card>test</Card>
            </div>

            <Card>test</Card>
            <Card>test</Card>
            <Card>test</Card>

        </Grid>
    </section>
  )
}

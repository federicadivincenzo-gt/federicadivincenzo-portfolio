import Card from "../card";
import styles from './hero.module.css';
import {Badge} from "../../badge/badge";

export const HeroCard = () => {
    return (
        <Card>
            <div className="flex flex-col mt-10 pb-3">
                <div className="inline-flex mb-3">
                    <Badge color="blue">💻 Frontend Developer</Badge>
                    <Badge color="yellow">🦾 Accessibility Advocate</Badge>
                    <Badge color="red">🧑🏻‍🎨 UI/UX Enthusiast</Badge>
                </div>
                <h1 className="font-bold text-2xl mb-1.5">Hello I’m Federica! </h1>
                <p  className="text-xl">I turn ideas into interactive, <i>inclusive</i> digital products. I love solving problems, learning new technologies, and bringing a <b>touch of creativity</b> to everything I build.</p>
            </div>
        </Card>
    )
}
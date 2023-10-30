import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.content}>
            <div className={styles.container}>
                <div className={styles.left_panel}>
                    <div className={styles.introduction}>
                        <p>Greetings, I am</p>
                        <h2>Kawshik Biswas</h2>
                        <span className={styles.designation}>
                            {"> Software developer"}
                        </span>
                    </div>
                </div>
                <div className={styles.right_panel}>
                    <Image
                        width={780}
                        height={745}
                        src={"/BackgroundBlurs.png"}
                        alt=""
                        className={styles.right_panel_blurs}
                    />
                    <div className={styles.right_panel_inner}>
                        <Image
                            width={13}
                            height={13}
                            src={"/RightPanelBolt.png"}
                            alt=""
                            className={styles.right_panel_bolt_top_left}
                        />
                        <Image
                            width={13}
                            height={13}
                            src={"/RightPanelBolt.png"}
                            alt=""
                            className={styles.right_panel_bolt_top_right}
                        />
                        <Image
                            width={13}
                            height={13}
                            src={"/RightPanelBolt.png"}
                            alt=""
                            className={styles.right_panel_bolt_bottom_right}
                        />
                        <Image
                            width={13}
                            height={13}
                            src={"/RightPanelBolt.png"}
                            alt=""
                            className={styles.right_panel_bolt_bottom_left}
                        />
                        <Image
                            width={780}
                            height={745}
                            src={"/Profile.jpeg"}
                            alt=""
                            className={styles.right_panel_profile_pic}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

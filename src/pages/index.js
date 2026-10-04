import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const GUMROAD = 'https://elnullaix.gumroad.com/l/CameraAnimationElnullaIX';
const DEMO = 'https://vrchat.com/home/avatar/avtr_89e2b4e1-7a6a-4dbc-9c06-dfef99ec0472';
const FEATURES = [
  ['32 waypoints', 'Place up to 32 points with your hand and the camera glides along a smooth path.'],
  ['Orbit & look-at', 'Circle around yourself, or keep the camera on you, a dropped spot, or another player.'],
  ['Zoom & camera settings', 'Speed, loop, zoom, background colour, hide players, portrait mode.'],
  ['Desktop mode', 'Works in desktop mode as well as in VR.'],
  ['CamAnim desktop app', 'Save your paths on your PC, edit them in 3D and send them back in any world.'],
  ['VRCLens & VirtualLens2', 'Link CamAnim with your favourite camera system for better focus and zoom.'],
];

export default function Home() {
  return (
    <Layout title="CamAnim" description="Smooth camera animations for your VRChat avatar">
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <img className={styles.logo} src={useBaseUrl('/img/CALogo.png')} alt="" />
            <Heading as="h1" className={styles.title}>Cam<span>Anim</span></Heading>
            <p className={styles.tagline}>Smooth camera animations for your VRChat avatar.</p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/intro">Get started</Link>
              <Link className="button button--outline button--primary button--lg" href={GUMROAD}>Buy on Gumroad</Link>
            </div>
          </div>
          <img className={styles.shot} src={useBaseUrl('/img/app/editor.png')}
               alt="The CamAnim desktop app showing a camera path in 3D" />
        </div>
      </header>
      <main>
        <section className="container margin-vert--xl">
          <div className={styles.grid}>
            {FEATURES.map(([title, text]) => (
              <div key={title} className={styles.card}>
                <Heading as="h3">{title}</Heading>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.band}>
          <div className="container">
            <Heading as="h2">Try before you buy</Heading>
            <p>Switch into the demo avatar in VRChat and try every feature. PC only (not Quest). Desktop mode works.</p>
            <Link className="button button--primary button--lg" href={DEMO}>Open the demo avatar</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

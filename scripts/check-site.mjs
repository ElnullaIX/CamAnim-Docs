// Checks the built site against the redesign spec. Run with `npm run check` (builds first).
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const problems = [];
const check = (ok, msg) => { if (!ok) problems.push(msg); };
const read = p => readFileSync(join(root, p), 'utf8');
const walk = dir => readdirSync(join(root, dir)).flatMap(n => {
  const p = join(dir, n);
  return statSync(join(root, p)).isDirectory() ? walk(p) : [p];
});

// 1. every page of the new structure is built
for (const page of ['index', 'docs/intro', 'docs/install/standard', 'docs/install/vrclens', 'docs/install/virtuallens2',
  'docs/install/manual', 'docs/use', 'docs/desktop-app', 'docs/customize', 'docs/media', 'docs/faq', 'docs/about',
  'updates', 'updates/camanim-app-2.0.0']) {
  check(existsSync(join(root, 'build', `${page}.html`)), `missing page: /${page}`);
}

// 2. removed pages stay gone
for (const page of ['docs/Markdown Stuff', 'helloMarkdown', 'docs/CAHppe Intro', 'docs/How To Use/OSC']) {
  check(!existsSync(join(root, 'build', `${page}.html`)), `old page still built: /${page}`);
}

// 3. no old names in the sources; the app's real save folder is the one exception
const SAVE_PATH = /OSC[\\/]CameraAnimationHppe/g;
for (const file of [...walk('docs'), ...walk('updates'), ...walk('src'), 'docusaurus.config.js', 'sidebars.js']) {
  read(file).split('\n').forEach((line, i) => {
    if (/hppe/i.test(line.replace(SAVE_PATH, ''))) problems.push(`old name in ${file}:${i + 1}: ${line.trim()}`);
  });
}

// 4. home page: buy link, share image, app icon, X link
const home = read('build/index.html');
check(home.includes('https://elnullaix.gumroad.com/l/CameraAnimationElnullaIX'), 'home: no Gumroad link');
check(home.includes('content="https://elnullaix.github.io/CamAnim-Docs/img/CamAnim_Card.png"'), 'home: share image is not CamAnim_Card.png');
check(home.includes('/CamAnim-Docs/img/CALogo.ico'), 'home: favicon is not CALogo.ico');
check(home.includes('https://x.com/ElnullaIX'), 'home: no X link');

// 5. search index and images
check(readdirSync(join(root, 'build')).some(n => /^search-index.*\.json$/.test(n)), 'no search index in build/');
for (const img of ['app/library.png', 'app/editor.png', 'app/record.png', 'app/compact.png', 'app/settings.png',
  'CamAnim_Card.png', 'CALogo.png', 'CALogo.ico']) {
  check(existsSync(join(root, 'static/img', img)), `missing image: static/img/${img}`);
}

// 6. the desktop app page covers the 2.0 app
const appPage = existsSync(join(root, 'build/docs/desktop-app.html')) ? read('build/docs/desktop-app.html') : '';
for (const heading of ['Install and activate', 'Connect to VRChat', 'Library', '3D editor', 'Record a new path',
  'Send to VRChat', 'Compact mode', 'Settings', 'Share paths with friends', 'Troubleshooting']) {
  check(appPage.includes(heading), `desktop app page: no "${heading}" section`);
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log('site checks passed');

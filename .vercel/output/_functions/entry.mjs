import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_vi5d4Dlm.mjs';
import { manifest } from './manifest_CnK-sxkF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/avis.astro.mjs');
const _page4 = () => import('./pages/blog/_slug_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/compte.astro.mjs');
const _page7 = () => import('./pages/de/about.astro.mjs');
const _page8 = () => import('./pages/de/agb.astro.mjs');
const _page9 = () => import('./pages/de/bewertungen.astro.mjs');
const _page10 = () => import('./pages/de/blog/_slug_.astro.mjs');
const _page11 = () => import('./pages/de/blog.astro.mjs');
const _page12 = () => import('./pages/de/datenschutz.astro.mjs');
const _page13 = () => import('./pages/de/faq.astro.mjs');
const _page14 = () => import('./pages/de/funktionen.astro.mjs');
const _page15 = () => import('./pages/de/konto.astro.mjs');
const _page16 = () => import('./pages/de/login.astro.mjs');
const _page17 = () => import('./pages/de/neuigkeiten.astro.mjs');
const _page18 = () => import('./pages/de/preise.astro.mjs');
const _page19 = () => import('./pages/de/ratgeber/_slug_.astro.mjs');
const _page20 = () => import('./pages/de/ratgeber.astro.mjs');
const _page21 = () => import('./pages/de/support.astro.mjs');
const _page22 = () => import('./pages/de/uebungen/_slug_.astro.mjs');
const _page23 = () => import('./pages/de/uebungen.astro.mjs');
const _page24 = () => import('./pages/de.astro.mjs');
const _page25 = () => import('./pages/en/about.astro.mjs');
const _page26 = () => import('./pages/en/account.astro.mjs');
const _page27 = () => import('./pages/en/blog/_slug_.astro.mjs');
const _page28 = () => import('./pages/en/blog.astro.mjs');
const _page29 = () => import('./pages/en/changelog.astro.mjs');
const _page30 = () => import('./pages/en/exercises/_slug_.astro.mjs');
const _page31 = () => import('./pages/en/exercises.astro.mjs');
const _page32 = () => import('./pages/en/faq.astro.mjs');
const _page33 = () => import('./pages/en/features.astro.mjs');
const _page34 = () => import('./pages/en/guides/_slug_.astro.mjs');
const _page35 = () => import('./pages/en/guides.astro.mjs');
const _page36 = () => import('./pages/en/login.astro.mjs');
const _page37 = () => import('./pages/en/pricing.astro.mjs');
const _page38 = () => import('./pages/en/privacy.astro.mjs');
const _page39 = () => import('./pages/en/reviews.astro.mjs');
const _page40 = () => import('./pages/en/support.astro.mjs');
const _page41 = () => import('./pages/en/terms.astro.mjs');
const _page42 = () => import('./pages/en.astro.mjs');
const _page43 = () => import('./pages/exercices/_slug_.astro.mjs');
const _page44 = () => import('./pages/exercices.astro.mjs');
const _page45 = () => import('./pages/faq.astro.mjs');
const _page46 = () => import('./pages/fonctionnalites.astro.mjs');
const _page47 = () => import('./pages/forum/topic.astro.mjs');
const _page48 = () => import('./pages/forum.astro.mjs');
const _page49 = () => import('./pages/guides/_slug_.astro.mjs');
const _page50 = () => import('./pages/guides.astro.mjs');
const _page51 = () => import('./pages/login.astro.mjs');
const _page52 = () => import('./pages/nouveautes.astro.mjs');
const _page53 = () => import('./pages/pricing.astro.mjs');
const _page54 = () => import('./pages/privacy.astro.mjs');
const _page55 = () => import('./pages/support.astro.mjs');
const _page56 = () => import('./pages/terms.astro.mjs');
const _page57 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/avis.astro", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/compte.astro", _page6],
    ["src/pages/de/about.astro", _page7],
    ["src/pages/de/agb.astro", _page8],
    ["src/pages/de/bewertungen.astro", _page9],
    ["src/pages/de/blog/[slug].astro", _page10],
    ["src/pages/de/blog/index.astro", _page11],
    ["src/pages/de/datenschutz.astro", _page12],
    ["src/pages/de/faq.astro", _page13],
    ["src/pages/de/funktionen.astro", _page14],
    ["src/pages/de/konto.astro", _page15],
    ["src/pages/de/login.astro", _page16],
    ["src/pages/de/neuigkeiten.astro", _page17],
    ["src/pages/de/preise.astro", _page18],
    ["src/pages/de/ratgeber/[slug].astro", _page19],
    ["src/pages/de/ratgeber/index.astro", _page20],
    ["src/pages/de/support.astro", _page21],
    ["src/pages/de/uebungen/[slug].astro", _page22],
    ["src/pages/de/uebungen/index.astro", _page23],
    ["src/pages/de/index.astro", _page24],
    ["src/pages/en/about.astro", _page25],
    ["src/pages/en/account.astro", _page26],
    ["src/pages/en/blog/[slug].astro", _page27],
    ["src/pages/en/blog/index.astro", _page28],
    ["src/pages/en/changelog.astro", _page29],
    ["src/pages/en/exercises/[slug].astro", _page30],
    ["src/pages/en/exercises/index.astro", _page31],
    ["src/pages/en/faq.astro", _page32],
    ["src/pages/en/features.astro", _page33],
    ["src/pages/en/guides/[slug].astro", _page34],
    ["src/pages/en/guides/index.astro", _page35],
    ["src/pages/en/login.astro", _page36],
    ["src/pages/en/pricing.astro", _page37],
    ["src/pages/en/privacy.astro", _page38],
    ["src/pages/en/reviews.astro", _page39],
    ["src/pages/en/support.astro", _page40],
    ["src/pages/en/terms.astro", _page41],
    ["src/pages/en/index.astro", _page42],
    ["src/pages/exercices/[slug].astro", _page43],
    ["src/pages/exercices/index.astro", _page44],
    ["src/pages/faq.astro", _page45],
    ["src/pages/fonctionnalites.astro", _page46],
    ["src/pages/forum/topic.astro", _page47],
    ["src/pages/forum/index.astro", _page48],
    ["src/pages/guides/[slug].astro", _page49],
    ["src/pages/guides/index.astro", _page50],
    ["src/pages/login.astro", _page51],
    ["src/pages/nouveautes.astro", _page52],
    ["src/pages/pricing.astro", _page53],
    ["src/pages/privacy.astro", _page54],
    ["src/pages/support.astro", _page55],
    ["src/pages/terms.astro", _page56],
    ["src/pages/index.astro", _page57]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "06843562-d014-42e4-bb59-be6a07cb1516",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

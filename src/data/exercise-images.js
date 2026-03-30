/**
 * Mapping from French exercise names to English image slugs.
 * Images are located in /public/assets/exercises/ with -0.jpg (start) and -1.jpg (end) variants.
 */

export const IMAGE_MAP = {
  // PECTORAUX
  "Développé couché barre prise normale": "barbell-bench-press",
  "Développé couché barre prise serrée": "close-grip-barbell-bench-press",
  "Développé couché barre prise large": "wide-grip-barbell-bench-press",
  "Développé couché haltère": "dumbbell-bench-press",
  "Développé incliné barre prise normale": "incline-barbell-bench-press",
  "Développé incliné barre prise serrée": "incline-barbell-bench-press",
  "Développé incliné barre prise large": "incline-barbell-bench-press",
  "Développé incliné haltère": "incline-barbell-bench-press",
  "Développé décliné barre prise normale": "decline-barbell-bench-press",
  "Développé décliné barre prise serrée": "decline-barbell-bench-press",
  "Développé décliné barre prise large": "decline-wide-grip-barbell-press",
  "Développé décliné haltère": "decline-dumbbell-bench-press",
  "Écarté couché haltère": "dumbbell-chest-fly",
  "Écarté couché câble": "cable-chest-fly",
  "Écarté incliné haltère": "dumbbell-chest-fly",
  "Écarté poulie vis-à-vis": "cable-crossover",
  "Pompes classiques": "push-ups",
  "Pompes lestées classiques": "push-ups",
  "Pompes mains larges": "wide-push-ups",
  "Pompes lestées mains larges": "wide-push-ups",
  "Pompes déclinées": "decline-push-ups",
  "Pompes lestées déclinées": "decline-push-ups",
  "Pompes inclinées": "incline-push-ups",
  "Pompes lestées inclinées": "incline-push-ups",
  "Pec deck machine": "pec-deck-machine",
  "Développé couché Smith machine": "smith-machine-bench-press",
  "Développé incliné Smith machine": "smith-machine-incline-press",
  "Chest press machine": "chest-press-machine",

  // DOS
  "Tractions pronation prise normale": "pull-ups-overhand-grip",
  "Tractions lestées pronation prise normale": "pull-ups-overhand-grip",
  "Tractions pronation prise large": "wide-grip-pull-ups",
  "Tractions lestées pronation prise large": "wide-grip-pull-ups",
  "Tractions supination prise normale": "chin-ups-underhand-grip",
  "Tractions lestées supination prise normale": "chin-ups-underhand-grip",
  "Tractions supination prise serrée": "chin-ups-underhand-grip",
  "Tractions lestées supination prise serrée": "chin-ups-underhand-grip",
  "Tractions supination prise large": "chin-ups-underhand-grip",
  "Tractions lestées supination prise large": "chin-ups-underhand-grip",
  "Tractions machine assistée": "assisted-pull-up-machine",
  "Tirage horizontal barre prise normale": "barbell-row-standard-grip",
  "Tirage horizontal barre prise large": "wide-grip-barbell-row",
  "Tirage horizontal câble": "seated-cable-row",
  "Rowing barre prise pronation": "overhand-barbell-row",
  "Rowing barre prise supination": "barbell-row-standard-grip",
  "Rowing haltère": "dumbbell-row",
  "Rowing inversé poids du corps": "inverted-row",
  "T-bar rowing": "t-bar-row",
  "Rowing T-bar machine": "t-bar-row-machine",
  "Tirage vertical poulie prise pronation": "lat-pulldown-overhand",
  "Tirage vertical poulie prise supination": "lat-pulldown-overhand",
  "Tirage vertical poulie prise serrée": "lat-pulldown-overhand",
  "Tirage vertical machine": "lat-pulldown-machine",
  "Soulevé de terre barre conventionnel": "conventional-barbell-deadlift",
  "Soulevé de terre haltère conventionnel": "conventional-dumbbell-deadlift",
  "Soulevé de terre jambes tendues barre": "stiff-leg-barbell-deadlift",
  "Soulevé de terre sumo barre": "sumo-barbell-deadlift",
  "Pull-over haltère": "dumbbell-pullover",
  "Pull-over barre": "barbell-pullover",
  "Face pull câble": "cable-face-pull",
  "Hyperextension": "hyperextension",
  "Hyperextension lestée": "weighted-hyperextension",
  "Good morning barre": "barbell-good-morning",

  // EPAULES
  "Développé militaire barre": "barbell-overhead-press",
  "Développé militaire haltère": "dumbbell-overhead-press",
  "Développé épaules machine": "shoulder-press-machine",
  "Développé épaules Smith machine": "smith-machine-shoulder-press",
  "Arnold press haltère": "arnold-press",
  "Élévations latérales haltère": "dumbbell-lateral-raise",
  "Élévations latérales poulie": "cable-lateral-raise",
  "Élévations latérales buste penché haltère": "bent-over-dumbbell-lateral-raise",
  "Élévations frontales haltère": "dumbbell-front-raise",
  "Élévations frontales barre": "barbell-front-raise",
  "Élévations frontales poulie": "cable-front-raise",
  "Oiseau haltère": "dumbbell-reverse-fly",
  "Oiseau poulie": "cable-reverse-fly",
  "Oiseau machine (reverse pec deck)": "reverse-pec-deck",
  "Shrug barre": "barbell-shrug",
  "Shrug haltère": "dumbbell-shrug",
  "Shrug machine": "machine-shrug",
  "Upright row barre": "barbell-upright-row",

  // BICEPS
  "Curl barre droite prise normale": "close-grip-barbell-curl",
  "Curl barre droite prise serrée": "close-grip-barbell-curl",
  "Curl barre EZ prise normale": "ez-bar-curl-standard",
  "Curl barre EZ prise serrée": "ez-bar-curl-standard",
  "Curl haltère": "dumbbell-curl",
  "Curl marteau haltère": "hammer-curl",
  "Curl concentré haltère": "concentration-curl",
  "Curl pupitre barre EZ": "preacher-curl-ez-bar",
  "Curl pupitre haltère": "preacher-curl-dumbbell",
  "Curl marteau câble corde": "rope-hammer-curl",
  "Curl inversé barre": "reverse-barbell-curl",

  // TRICEPS
  "Extension barre droite": "lying-barbell-triceps-extension",
  "Extension barre EZ": "lying-barbell-triceps-extension",
  "Extension haltère": "dumbbell-triceps-extension",
  "Extension overhead câble corde": "overhead-cable-rope-extension",
  "Dips poids du corps": "bodyweight-dips",
  "Dips lestés": "weighted-dips",
  "Dips machine assistée": "assisted-dip-machine",
  "Dips entre bancs poids du corps": "bench-dips",
  "Dips entre bancs lestés": "weighted-bench-dips",
  "Push-down poulie corde": "rope-pushdown",
  "Push-down poulie barre droite": "straight-bar-pushdown",
  "Push-down poulie barre V": "v-bar-pushdown",
  "Kickback haltère": "dumbbell-kickback",
  "Kickback poulie": "cable-kickback",
  "Développé couché prise serrée barre": "close-grip-barbell-bench-press",

  // JAMBES
  "Squat barre prise normale": "barbell-back-squat",
  "Squat barre prise serrée": "barbell-back-squat",
  "Squat haltère": "dumbbell-squat",
  "Squat goblet": "goblet-squat",
  "Squat Smith machine": "smith-machine-squat",
  "Squat bulgare poids du corps": "bulgarian-split-squat",
  "Squat bulgare lesté": "bulgarian-split-squat",
  "Squat pistol": "pistol-squat",
  "Hack squat machine": "hack-squat-machine",
  "Fentes barre": "barbell-lunges",
  "Fentes haltère": "dumbbell-lunges",
  "Fentes poids du corps": "bodyweight-lunges",
  "Fentes lestées": "bodyweight-lunges",
  "Fentes marchées haltère": "dumbbell-lunges",
  "Step-up haltère": "dumbbell-step-up",
  "Step-up barre": "barbell-step-up",
  "Presse à cuisses machine": "leg-press-machine",
  "Presse à cuisses pieds hauts": "leg-press-machine",
  "Leg extension machine": "leg-extension-machine",
  "Leg curl machine": "leg-curl-machine",
  "Leg curl assis machine": "seated-leg-curl",
  "Leg curl allongé machine": "lying-leg-curl",
  "Adducteurs machine": "adductor-machine",
  "Abducteurs machine": "abductor-machine",
  "Mollets debout barre": "standing-barbell-calf-raise",
  "Mollets debout haltère": "standing-dumbbell-calf-raise",
  "Mollets debout machine": "standing-calf-raise-machine",
  "Mollets assis machine": "seated-calf-raise-machine",
  "Mollets assis haltère": "seated-dumbbell-calf-raise",

  // FESSIERS
  "Hip thrust barre": "barbell-hip-thrust",
  "Pont fessier poids du corps": "glute-bridge",
  "Pont fessier lesté": "glute-bridge",
  "Kickback fessier câble": "cable-glute-kickback",

  // ABDOS
  "Crunch poids du corps": "bodyweight-crunch",
  "Crunch lesté": "weighted-crunch",
  "Crunch avec disque": "weighted-crunch",
  "Crunch machine": "crunch-machine",
  "Crunch décliné poids du corps": "decline-crunch",
  "Crunch décliné lesté": "weighted-decline-crunch",
  "Relevé de jambes poids du corps": "lying-leg-raise",
  "Relevé de jambes lesté": "weighted-leg-raise",
  "Relevé de jambes barre fixe": "hanging-leg-raise",
  "Gainage planche": "plank",
  "Gainage planche latérale": "side-plank",
  "Russian twist poids du corps": "bodyweight-russian-twist",
  "Russian twist lesté": "weighted-russian-twist",
  "Russian twist haltère": "dumbbell-russian-twist",
  "Russian twist médecine ball": "medicine-ball-russian-twist",
  "Sit-up poids du corps": "bodyweight-sit-up",
  "Sit-up lesté": "weighted-sit-up",
  "Sit-up avec disque": "weighted-sit-up",
  "Mountain climbers poids du corps": "mountain-climbers",
  "Ab wheel rollout": "ab-wheel-rollout",
  "Woodchop câble": "cable-woodchop",
  "Pallof press câble": "cable-pallof-press",
  "Dead bug poids du corps": "dead-bug",

  // AVANT-BRAS
  "Curl poignet barre": "barbell-wrist-curl",
  "Curl poignet haltère": "dumbbell-wrist-curl",
  "Curl poignet inversé barre": "reverse-barbell-wrist-curl",
  "Farmer walk haltère": "farmer-s-walk",

  // FONCTIONNEL
  "Kettlebell swing": "kettlebell-swing",
  "Kettlebell goblet squat": "kettlebell-goblet-squat",
  "Kettlebell Turkish get-up": "kettlebell-turkish-get-up",
  "Kettlebell row": "kettlebell-row",
  "Box jump": "box-jump",
  "Jump squat poids du corps": "jump-squat",
  "Medicine ball overhead throw": "medicine-ball-overhead-throw",
  "Medicine ball rotational throw": "medicine-ball-rotational-throw",
  "Handstand push-up": "handstand-push-up",
};

/**
 * Returns the image path for a given French exercise name.
 * @param {string} frenchName - The French exercise name (exact match from exercises-fr.js)
 * @returns {string|null} The image path (e.g. "/assets/exercises/barbell-bench-press-0.jpg") or null if no image exists
 */
export function getExerciseImage(frenchName) {
  const slug = IMAGE_MAP[frenchName];
  if (!slug) return null;
  return `/assets/exercises/${slug}-0.jpg`;
}

/**
 * Returns the image path for a given English exercise name.
 * Converts the name to a slug and checks if the image exists.
 */
export function getExerciseImageEN(englishName) {
  const slug = englishName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  // Check if we have an image for this slug
  const allSlugs = new Set(Object.values(IMAGE_MAP));
  if (allSlugs.has(slug)) return `/assets/exercises/${slug}-0.jpg`;
  // Try common variations
  const variations = [slug, slug.replace(/-standard-?/g, '-'), slug.replace('dumbbell-', 'db-')];
  for (const v of variations) {
    if (allSlugs.has(v)) return `/assets/exercises/${v}-0.jpg`;
  }
  return null;
}

// --- Backward-compatible exports used by exercise detail pages ---

/** Helper: convert a French name to a URL slug (same logic as toSlug in exercises-fr.js) */
function _toSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Map from FR slug -> EN image slug (used by exercices/[slug].astro) */
export const exerciseImages = Object.fromEntries(
  Object.entries(IMAGE_MAP).map(([frName, enSlug]) => [_toSlug(frName), enSlug])
);

/** Set of EN image slugs that have images (used by en/exercises/[slug].astro & de/uebungen/[slug].astro) */
export const enExerciseImages = Object.fromEntries(
  [...new Set(Object.values(IMAGE_MAP))].map(slug => [slug, true])
);

/**
 * Returns the image path for a given FR slug (used by DE exercises which have frSlug).
 */
export function getExerciseImageByFrSlug(frSlug) {
  if (!frSlug) return null;
  const enSlug = exerciseImages[frSlug];
  if (!enSlug) return null;
  return `/assets/exercises/${enSlug}-0.jpg`;
}

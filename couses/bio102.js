/**
 * courses/bio102.js — BIO 102: General Biology II
 * Level: 100 Level, 2nd Semester
 * Department of Biology, FUTA
 *
 * Structure: 6 chapters based on the official course synopsis.
 * Each chapter has a summary, keyPoints, pdfUrl, cbtUrl, and questions array.
 * The quiz engine should display 25 randomly shuffled questions per trial
 * from a pool of 60+ questions per chapter.
 *
 * This file must be loaded in index.html BEFORE data.js and app.js.
 */

PORTAL_INJECT("BIO 102", [

  // ─────────────────────────────────────────────────────────────────────────────
  {
    number: 1,
    title: "Survey of the Animal Kingdom & Classification",
    summary: "The Animal Kingdom (Kingdom Animalia) is the largest and most diverse kingdom of multicellular eukaryotes. Animals are classified based on body symmetry, number of germ layers, presence or absence of a coelom, embryonic development pattern, and other structural features. Major phyla include Porifera, Cnidaria, Platyhelminthes, Nematoda, Annelida, Arthropoda, Mollusca, Echinodermata, and Chordata. Key concepts include diploblasty vs. triploblasty, acoelomate vs. pseudocoelomate vs. coelomate, and protostome vs. deuterostome development.",
    keyPoints: [
      "Diploblastic: two germ layers (ectoderm + endoderm) — e.g. Cnidaria, Porifera",
      "Triploblastic: three germ layers (ectoderm, mesoderm, endoderm) — all higher animals",
      "Acoelomate: no body cavity (Platyhelminthes); Pseudocoelomate: false coelom (Nematoda); Coelomate: true coelom (Annelida, Arthropoda, Mollusca, Chordata)",
      "Protostomes: blastopore → mouth (Annelida, Arthropoda, Mollusca); Deuterostomes: blastopore → anus (Echinodermata, Chordata)",
      "Radial symmetry: Cnidaria, Echinodermata; Bilateral symmetry: most other phyla",
      "Parazoa (no true tissues): Porifera; Eumetazoa (true tissues): all others",
      "Morula → Blastula → Gastrula: early embryonic developmental stages",
      "Schizocoel: coelom forms by splitting of mesoderm (Annelida, Mollusca); Enterocoel: coelom from gut pouches (Echinodermata, Chordata)"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      // ── Germ layers & symmetry ──
      {
        text: "Animals with only two germ layers are described as:",
        options: ["Triploblastic", "Diploblastic", "Monoblastic", "Pseudocoelomate"],
        correct: 1,
        explanation: "Diploblastic animals (e.g. Cnidaria) have only ectoderm and endoderm; triploblastic animals have a third layer, the mesoderm."
      },
      {
        text: "Which of the following phyla is diploblastic?",
        options: ["Annelida", "Platyhelminthes", "Cnidaria", "Nematoda"],
        correct: 2,
        explanation: "Cnidarians (jellyfish, Hydra, corals) are diploblastic, possessing only ectoderm and endoderm separated by mesoglea."
      },
      {
        text: "The first stage of animal development after cleavage begins is the:",
        options: ["Blastula", "Morula", "Gastrula", "Planula"],
        correct: 1,
        explanation: "Cleavage of the zygote produces a solid ball of cells called the morula, which then hollows to form the blastula."
      },
      {
        text: "Other than Radiata (Cnidaria), eumetazoans are:",
        options: ["Diploblastic", "Triploblastic", "Monoblastic", "Acoelous"],
        correct: 1,
        explanation: "All eumetazoans except the radially symmetrical Cnidaria are triploblastic — they possess ectoderm, mesoderm, and endoderm."
      },
      {
        text: "Animals with NO body cavity between the body wall and digestive tract are called:",
        options: ["Coelomates", "Pseudocoelomates", "Acoelomates", "Eucoelomata"],
        correct: 2,
        explanation: "Acoelomates (e.g. Platyhelminthes) have solid bodies with no fluid-filled cavity; mesoderm fills the space between ectoderm and endoderm."
      },
      {
        text: "A pseudocoelom is a body cavity found between the:",
        options: ["Ectoderm and mesoderm", "Endoderm and mesoderm", "Two layers of mesoderm", "Mesoderm and ectoderm only"],
        correct: 1,
        explanation: "A pseudocoelom (false coelom) is derived from the blastocoel and lies between the endoderm and mesoderm — characteristic of Nematoda."
      },
      {
        text: "Which phylum exhibits a TRUE coelom lined entirely by mesoderm?",
        options: ["Platyhelminthes", "Nematoda", "Annelida", "Cnidaria"],
        correct: 2,
        explanation: "Annelida possesses a true eucoelomate body plan — the coelom is fully lined by mesodermal peritoneum."
      },
      {
        text: "In protostome development, the blastopore eventually becomes the:",
        options: ["Anus", "Mouth", "Coelom", "Notochord"],
        correct: 1,
        explanation: "In protostomes (e.g. Annelida, Arthropoda, Mollusca), the blastopore (first opening in the embryo) becomes the mouth."
      },
      {
        text: "In deuterostome development, the blastopore becomes the:",
        options: ["Mouth", "Notochord", "Anus", "Coelom"],
        correct: 2,
        explanation: "In deuterostomes (Echinodermata, Chordata), the blastopore becomes the anus; the mouth forms secondarily."
      },
      {
        text: "Schizocoelic phyla include:",
        options: ["Protozoa, Porifera, and Cnidaria", "Platyhelminthes and Aschelminthes", "Annelida, Arthropoda, and Mollusca", "Arthropoda, Mollusca, and Echinodermata"],
        correct: 2,
        explanation: "Schizocoel forms by splitting of mesoderm — characteristic of Annelida, Arthropoda, and Mollusca (lophotrochozoa and ecdysozoa)."
      },
      // ── Symmetry & organization ──
      {
        text: "Radial symmetry is characteristic of which phyla?",
        options: ["Porifera and Annelida", "Cnidaria and Echinodermata", "Platyhelminthes and Nematoda", "Arthropoda and Mollusca"],
        correct: 1,
        explanation: "Cnidarians (radially symmetrical throughout life) and Echinoderms (secondarily radially symmetrical as adults) both show radial symmetry."
      },
      {
        text: "The subkingdom Parazoa includes organisms that:",
        options: ["Have true tissues and organs", "Lack true tissues", "Are triploblastic", "Have bilateral symmetry"],
        correct: 1,
        explanation: "Parazoa (Porifera — sponges) lack true tissues; their cells are loosely organised without definite tissue layers."
      },
      {
        text: "Animals with the simplest tissue level of organization are described as:",
        options: ["Triploblastic", "Monoblastic", "Diploblastic", "Mesoblastic"],
        correct: 2,
        explanation: "Diploblastic animals (Cnidaria) represent the simplest tissue-grade organisation among Eumetazoa."
      },
      {
        text: "Which of the following phyla were discovered most recently?",
        options: ["Cycliophora", "Cnidaria", "Porifera", "Nematoda"],
        correct: 0,
        explanation: "Cycliophora was discovered in 1995 on the lips of lobsters — it is one of the most recently described animal phyla."
      },
      {
        text: "The eumetazoan phylum sometimes called 'wheel animals' because of their feeding mechanism is:",
        options: ["Porifera", "Rotifera", "Nematoda", "Anthozoa"],
        correct: 1,
        explanation: "Rotifera ('wheel bearers') possess a ciliated corona that creates a wheel-like appearance during feeding."
      },
      // ── Embryology & development ──
      {
        text: "In which of the following do the regulatory signals in the egg become evenly distributed during cleavage and the blastopore becomes the anus?",
        options: ["Arthropoda", "Nematoda", "Annelida", "Echinodermata"],
        correct: 3,
        explanation: "Echinoderms are deuterostomes with radial, regulative cleavage; the blastopore forms the anus — classic deuterostome characteristics."
      },
      {
        text: "The outer covering and nervous system of eumetazoans develop from the:",
        options: ["Mesoderm", "Endoderm", "Ectoderm", "Notochord"],
        correct: 2,
        explanation: "The ectoderm gives rise to the integument (skin) and the nervous system in all triploblastic animals."
      },
      {
        text: "Which group of organisms has the simplest level of multicellular organisation but NO true tissues?",
        options: ["Cnidaria", "Porifera", "Platyhelminthes", "Nematoda"],
        correct: 1,
        explanation: "Sponges (Porifera) are multicellular but parazoan — their cells are differentiated but not organised into true tissues."
      },
      {
        text: "The phylum of the simplest animals to possess a complete digestive system (mouth + anus) is:",
        options: ["Nemertea", "Rotifera", "Platyhelminthes", "Cnidaria"],
        correct: 0,
        explanation: "Nemerteans (ribbon worms) are the simplest animals with a complete, one-way digestive tract."
      },
      {
        text: "The phylum of the simplest animal to have a blood-filled circulatory system is:",
        options: ["Annelida", "Nemertea", "Arthropoda", "Mollusca"],
        correct: 1,
        explanation: "Nemertea (ribbon worms) possess the most primitive closed circulatory system among invertebrates."
      },
      // ── Classification examples ──
      {
        text: "Of the Eumetazoa listed below, which are generally considered the most primitive?",
        options: ["Chordata", "Rotifera", "Onychophora", "Ctenophora"],
        correct: 3,
        explanation: "Ctenophora (comb jellies) are considered among the most basal (primitive) eumetazoans, possibly more ancient than Cnidaria."
      },
      {
        text: "Which of the following have a one-way digestive system?",
        options: ["Flukes", "Tapeworms", "Ctenophorans", "Cnidarians"],
        correct: 2,
        explanation: "Ctenophorans (comb jellies) are unique among 'primitive' animals in possessing a complete, one-way gut."
      },
      {
        text: "Sponges belong to the subkingdom:",
        options: ["Eumetazoa", "Parazoa", "Metaphyta", "Protozoa"],
        correct: 1,
        explanation: "Porifera belong to Parazoa — they are multicellular but lack true tissues, distinguishing them from Eumetazoa."
      },
      {
        text: "Which of the following correctly pairs a phylum with its body cavity type?",
        options: ["Platyhelminthes — pseudocoelomate", "Nematoda — acoelomate", "Annelida — eucoelomate", "Cnidaria — eucoelomate"],
        correct: 2,
        explanation: "Annelida are eucoelomates (true coelom); Platyhelminthes are acoelomates; Nematoda are pseudocoelomates."
      },
      {
        text: "Animals that exhibit bilateral symmetry include:",
        options: ["Only chordates", "Vertebrates only", "Vertebrates, annelids, and arthropods", "Cnidaria and Echinodermata"],
        correct: 2,
        explanation: "Bilateral symmetry is found in Vertebrates, Annelida, Arthropoda, Mollusca, Platyhelminthes, Nematoda, and more — but NOT in adult Echinoderms or Cnidaria."
      },
      // ── Additional questions ──
      {
        text: "Which term describes the evolutionary trend of animals having a distinct head with concentrated sense organs?",
        options: ["Metamerism", "Cephalisation", "Coelomation", "Segmentation"],
        correct: 1,
        explanation: "Cephalisation is the evolutionary development of a distinct head region with concentrated nervous tissue and sense organs."
      },
      {
        text: "Metamerism refers to:",
        options: ["The presence of three germ layers", "Repeated body segments along the anterior-posterior axis", "The development of a true coelom", "Radial division of the body"],
        correct: 1,
        explanation: "Metamerism (segmentation) is the serial repetition of body units, best seen in Annelida and Arthropoda."
      },
      {
        text: "Which of the following phyla is exclusively marine?",
        options: ["Platyhelminthes", "Nematoda", "Echinodermata", "Annelida"],
        correct: 2,
        explanation: "All Echinoderms (sea stars, sea urchins, sea cucumbers) are exclusively marine — there are no freshwater or terrestrial forms."
      },
      {
        text: "A 'tube within a tube' body plan (alimentary canal running through body) is first seen in:",
        options: ["Cnidaria", "Porifera", "Nematoda", "Platyhelminthes"],
        correct: 2,
        explanation: "Nematodes have a complete, tube-within-a-tube body plan with a distinct mouth and anus — the first phylum in the 'worm' lineage to achieve this."
      },
      {
        text: "Which of the following are invertebrate deuterostomes?",
        options: ["Arthropoda and Mollusca", "Annelida and Nematoda", "Echinodermata and Hemichordata", "Platyhelminthes and Rotifera"],
        correct: 2,
        explanation: "Echinodermata and Hemichordata are invertebrate deuterostomes — they share embryological affinities with Chordata."
      },
      {
        text: "The non-living jelly-like layer between the two body layers of a cnidarian is called:",
        options: ["Mesoderm", "Mesoglea", "Mesenchyme", "Mesohyl"],
        correct: 1,
        explanation: "Mesoglea is the gelatinous matrix between the ectoderm and endoderm in cnidarians; it is not a true tissue layer."
      },
      {
        text: "Which of the following animals would be classified as a coelomate?",
        options: ["Hydra", "Planaria", "Ascaris", "Earthworm"],
        correct: 3,
        explanation: "The earthworm (Annelida) is a true coelomate — its body cavity is fully lined by mesoderm. Ascaris is pseudocoelomate; Planaria is acoelomate; Hydra is diploblastic."
      },
      {
        text: "The phylum Nematoda is the largest phylum of:",
        options: ["Coelomates", "Pseudocoelomates", "Acoelomates", "Protostomes"],
        correct: 1,
        explanation: "Nematoda is the largest phylum of pseudocoelomates, with enormous species diversity and ecological importance."
      },
      {
        text: "Key innovations of bilateral animals over radially symmetrical animals include bilateral symmetry and:",
        options: ["A coelom", "Internal organs", "A one-way digestive tract", "A body cavity"],
        correct: 1,
        explanation: "Bilateral symmetry enabled cephalisation and the development of internal organs — a major evolutionary advance over radially symmetrical animals."
      },
      {
        text: "Which of the following is NOT a characteristic of all animals?",
        options: ["Multicellularity", "Heterotrophy", "Ability to photosynthesize", "Eukaryotic cells"],
        correct: 2,
        explanation: "Animals are heterotrophs; they cannot synthesise their own food through photosynthesis. All animals are multicellular eukaryotes."
      },
      {
        text: "Which characteristic is shared by ALL members of the Animal Kingdom?",
        options: ["Presence of a coelom", "Motility at some stage of life", "Radial symmetry", "Presence of a backbone"],
        correct: 1,
        explanation: "All animals exhibit motility (movement) at some stage of their life cycle, even sessile animals like sponges have motile larvae."
      },
      {
        text: "The correct sequence of early embryonic development after fertilization is:",
        options: ["Zygote → Gastrula → Morula → Blastula", "Zygote → Blastula → Morula → Gastrula", "Zygote → Morula → Blastula → Gastrula", "Zygote → Gastrula → Blastula → Morula"],
        correct: 2,
        explanation: "Development proceeds: Zygote → cleavage → Morula (solid ball) → Blastula (hollow ball) → Gastrula (infolding to form germ layers)."
      },
      {
        text: "Animals in which the coelom forms from pouches of the gut (archenteron) are called:",
        options: ["Schizocoelous", "Enterocoelous", "Acoelous", "Pseudocoelous"],
        correct: 1,
        explanation: "Enterocoelous development (pouching of the gut wall) is characteristic of deuterostomes — Echinodermata and Chordata."
      },
      {
        text: "Pronounced cephalisation is a characteristic feature of which phylum?",
        options: ["Echinodermata", "Annelida", "Mollusca", "Arthropoda"],
        correct: 3,
        explanation: "Arthropods show pronounced cephalisation with a well-developed head bearing complex eyes, antennae, and mouthparts."
      },
      {
        text: "Which of the following animals would be described as having a haemocoelic body cavity?",
        options: ["Ascaris (roundworm)", "Leech", "Cockroach", "Earthworm"],
        correct: 2,
        explanation: "Arthropods (e.g. cockroach) have a haemocoel — blood fills the body cavity directly bathing the organs, unlike a true coelom."
      },
      {
        text: "An unsegmented, coelomate animal with a head, foot, and visceral mass is characteristic of:",
        options: ["Echinodermata", "Arthropoda", "Mollusca", "Annelida"],
        correct: 2,
        explanation: "The combination of head, foot, and visceral mass enclosed in a mantle is the diagnostic body plan of phylum Mollusca."
      },
      {
        text: "In the Animal Kingdom, which feature first distinguishes Annelida from Nematoda?",
        options: ["Presence of a complete digestive system", "Presence of a true coelom", "Bilateral symmetry", "Triploblastic organisation"],
        correct: 1,
        explanation: "Annelida have a true coelom (eucoelomate); Nematoda have only a pseudocoelom. Both are triploblastic with complete digestive systems and bilateral symmetry."
      },
      {
        text: "Spicules in Porifera are produced by which cells?",
        options: ["Archaeocytes", "Choanocytes", "Sclerocytes", "Pinacocytes"],
        correct: 2,
        explanation: "Sclerocytes (also called spongocytes/scleroblasts) are specialised amoeboid cells responsible for secreting the spicules that form the sponge skeleton."
      },
      {
        text: "Which term refers to organisms that derive their body cavity from the blastocoel?",
        options: ["Eucoelomates", "Pseudocoelomates", "Acoelomates", "Hemicoelomates"],
        correct: 1,
        explanation: "Pseudocoelomates (e.g. Nematoda) retain a body cavity derived from the embryonic blastocoel — it is not lined by mesoderm."
      },
      {
        text: "Schizocoely (coelom formation by splitting mesoderm) is characteristic of which grouping?",
        options: ["Deuterostomes", "Protostomes", "Both protostomes and deuterostomes", "Diploblastic animals"],
        correct: 1,
        explanation: "Most protostomes (Annelida, Arthropoda, Mollusca) form their coelom by schizocoely — splitting of the mesodermal band."
      },
      {
        text: "Coral reef-forming animals belong to which phylum?",
        options: ["Porifera", "Cnidaria", "Mollusca", "Echinodermata"],
        correct: 1,
        explanation: "Corals are cnidarians (class Anthozoa) that secrete calcium carbonate skeletons, forming coral reefs."
      },
      {
        text: "The study of classification and naming of organisms is called:",
        options: ["Ecology", "Taxonomy", "Morphology", "Physiology"],
        correct: 1,
        explanation: "Taxonomy is the science of classification, including describing, identifying, naming, and organising organisms into a hierarchical system."
      },
      {
        text: "The hierarchical classification of animals from broadest to most specific is:",
        options: ["Kingdom → Phylum → Class → Order → Family → Genus → Species", "Species → Genus → Family → Order → Class → Phylum → Kingdom", "Kingdom → Class → Phylum → Order → Family → Genus → Species", "Phylum → Kingdom → Class → Order → Family → Genus → Species"],
        correct: 0,
        explanation: "The standard Linnaean hierarchy (broadest to most specific): Kingdom → Phylum → Class → Order → Family → Genus → Species."
      },
      {
        text: "Which of the following represents the correct phylum for the earthworm?",
        options: ["Nematoda", "Arthropoda", "Annelida", "Platyhelminthes"],
        correct: 2,
        explanation: "Earthworms belong to phylum Annelida (class Oligochaeta) — they are segmented, coelomate worms."
      },
      {
        text: "Which animals exhibit pentaradial (five-part) symmetry in the adult form?",
        options: ["Porifera", "Cnidaria", "Echinodermata", "Arthropoda"],
        correct: 2,
        explanation: "Adult echinoderms (starfish, sea urchins, brittle stars) are pentaradially symmetrical, though they evolved from bilaterally symmetrical ancestors."
      },
      {
        text: "Which major phylum lacks a head, has an external shell in many species, and includes snails, clams, and octopuses?",
        options: ["Annelida", "Arthropoda", "Echinodermata", "Mollusca"],
        correct: 3,
        explanation: "Mollusca includes gastropods (snails), bivalves (clams), and cephalopods (octopus) — all characterised by a mantle, foot, and visceral mass."
      },
      {
        text: "True metameric segmentation (serially repeated body units) is found in which phyla?",
        options: ["Annelida and Arthropoda", "Mollusca and Echinodermata", "Cnidaria and Porifera", "Nematoda and Platyhelminthes"],
        correct: 0,
        explanation: "True metamerism (repeated body segments) is a defining feature of Annelida and Arthropoda."
      },
      {
        text: "Nematocysts are characteristic of which phylum?",
        options: ["Porifera", "Platyhelminthes", "Cnidaria", "Annelida"],
        correct: 2,
        explanation: "Nematocysts are stinging organelles housed in cnidocytes — they are unique to phylum Cnidaria."
      },
      {
        text: "Which of the following is the correct statement about Porifera?",
        options: ["They possess a nervous system", "They have true tissues", "They belong to subkingdom Eumetazoa", "They lack true tissues and organs"],
        correct: 3,
        explanation: "Sponges (Porifera) lack true tissues and organs — they are parazoan and belong to subkingdom Parazoa."
      },
      {
        text: "Which of the following correctly describes an echinoderm?",
        options: ["Bilaterally symmetrical, marine, with jointed appendages", "Radially symmetrical, exclusively marine, with a water vascular system", "Segmented worm with true coelom and setae", "Unsegmented with a mantle and muscular foot"],
        correct: 1,
        explanation: "Echinoderms are exclusively marine, pentaradially symmetrical in adult form, and uniquely possess a water vascular system for locomotion and feeding."
      },
      {
        text: "Among invertebrates, the largest and most diverse phylum is:",
        options: ["Annelida", "Mollusca", "Arthropoda", "Nematoda"],
        correct: 2,
        explanation: "Arthropoda is the largest phylum in the Animal Kingdom, containing over 80% of all known animal species."
      },
      {
        text: "The presence of jointed appendages and an exoskeleton made of chitin is characteristic of:",
        options: ["Annelida", "Echinodermata", "Arthropoda", "Mollusca"],
        correct: 2,
        explanation: "Jointed appendages and a chitinous exoskeleton are the defining synapomorphies (shared derived characters) of phylum Arthropoda."
      },
      {
        text: "Planula larva is characteristic of which phylum?",
        options: ["Porifera", "Cnidaria", "Echinodermata", "Platyhelminthes"],
        correct: 1,
        explanation: "The planula is the free-swimming, ciliated larva characteristic of cnidarians (jellyfishes, corals, sea anemones, and hydrozoans)."
      },
      {
        text: "The water vascular system is a unique feature of which phylum?",
        options: ["Arthropoda", "Mollusca", "Annelida", "Echinodermata"],
        correct: 3,
        explanation: "The water vascular system — used for locomotion, feeding, and gas exchange — is unique to and diagnostic of phylum Echinodermata."
      },
      {
        text: "Which of the following organisms is CORRECTLY classified as an invertebrate?",
        options: ["Frog", "Lizard", "Starfish", "Whale"],
        correct: 2,
        explanation: "Starfish (Echinodermata) are invertebrates — they lack a vertebral column. Frogs, lizards, and whales are all vertebrates."
      },
      {
        text: "Tube feet in echinoderms are primarily locomotory organs that operate via:",
        options: ["Muscular contraction and chitin", "Hydraulic (water vascular) pressure", "Cilia beating", "Jet propulsion"],
        correct: 1,
        explanation: "Tube feet (podia) are extensions of the water vascular system; hydraulic pressure forces them to extend and adhere to surfaces."
      },
      {
        text: "The main classification criterion that distinguishes Chordata from all other phyla is the possession of a:",
        options: ["Vertebral column", "Notochord at some stage of development", "Brain and sense organs", "Endoskeleton of bone"],
        correct: 1,
        explanation: "The defining chordate feature is a notochord (present at least in the embryo). Not all chordates have vertebral columns (e.g. lancelets and tunicates lack one)."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────────────────────
  {
    number: 2,
    title: "Phylum Porifera (Sponges) & Phylum Cnidaria (Coelenterata)",
    summary: "Porifera (sponges) are the simplest multicellular animals; they are parazoan, lack true tissues, and are filter feeders with a unique canal system. Cnidaria (jellyfish, Hydra, coral, sea anemones) are diploblastic eumetazoans with radial symmetry, nematocysts (stinging cells), and a gastrovascular cavity. Cnidarians alternate between a sessile polyp form and a free-swimming medusa form. There are three main classes: Hydrozoa (Hydra, Obelia), Scyphozoa (true jellyfish), and Anthozoa (sea anemones, corals).",
    keyPoints: [
      "Porifera: pore-bearing; canal system (ostia → spongocoel → osculum); filter feeders",
      "Cell types in sponges: pinacocytes (outer wall), choanocytes/collar cells (water circulation and digestion), amoebocytes/archaeocytes (nutrient transport), sclerocytes (spicule formation)",
      "Sponge body plans: Asconoid → Syconoid → Leuconoid (increasing complexity)",
      "Sponge reproduction: asexual (budding, gemmules) and sexual (sperm + egg → amphiblastula larva)",
      "Cnidaria: nematocysts in cnidocytes; gastrovascular cavity; mesoglea between ectoderm and endoderm",
      "Hydra: Hydrozoa; hermaphrodite; prevents self-fertilisation by being protandrous",
      "Cnidarian classes: Hydrozoa (Hydra, Obelia), Scyphozoa (Aurelia — true jellyfish), Anthozoa (sea anemone, coral)",
      "Planula larva: free-swimming ciliated larva of cnidarians; settles to form polyp"
    ],
    pdfUrl: "",
    cbtUrl: "",
    questions: [
      // ── Porifera ──
      {
        text: "A sponge can be distinguished from other animals by the presence of:",
        options: ["Hollow body", "Coelenteron", "Choanocytes (collar cells)", "Dermal papillae"],
        correct: 2,
        explanation: "Choanocytes (collar cells) are unique to sponges — they bear flagella and create water currents that drive filter feeding."
      },
      {
        text: "Animals of phylum Porifera are characterised by their:",
        options: ["Diploblastic organisation", "Canal system", "Coelom", "Coelenteron"],
        correct: 1,
        explanation: "The defining feature of sponges is the canal system through which water flows, driven by flagellated choanocytes."
      },
      {
        text: "The larva of a sponge is known as:",
        options: ["Planula larva", "Trochophore larva", "Glochidium larva", "Amphiblastula larva"],
        correct: 3,
        explanation: "The amphiblastula is the free-swimming larva of most calcareous sponges; some sponges produce a parenchymula larva."
      },
      {
        text: "Gemmules in sponges are helpful in:",
        options: ["Digestion", "Sexual reproduction", "Secretion of spicules", "Survival during unfavourable conditions (drought)"],
        correct: 3,
        explanation: "Gemmules are internal buds packed with archaeocytes and nutrients, enabling sponges to survive drought, cold, or other harsh conditions."
      },
      {
        text: "Choanocytes in sponges are present on:",
        options: ["The external body surface", "Lining the spongocoel and canals", "The mesodermal layer", "Between the outer and inner layers only"],
        correct: 1,
        explanation: "Choanocytes line the spongocoel (internal cavity) and canals of sponges, driving water flow with their flagella."
      },
      {
        text: "Sycon belongs to the class:",
        options: ["Calcarea", "Demospongiae", "Hexactinellida", "Porifera"],
        correct: 0,
        explanation: "Sycon (a small, vase-shaped sponge) belongs to class Calcarea — its spicules are made of calcium carbonate."
      },
      {
        text: "The bath sponge (Euspongia) belongs to the class:",
        options: ["Calcarea", "Demospongiae", "Hexactinellida", "Anthozoa"],
        correct: 1,
        explanation: "Commercial bath sponges like Euspongia and Hippospongia belong to class Demospongiae, which includes the majority of living sponge species."
      },
      {
        text: "The most common method of reproduction in sponges is:",
        options: ["Binary fission", "Budding", "Multiple fission", "Conjugation"],
        correct: 1,
        explanation: "Budding is the most common asexual reproductive method in sponges; buds may be external or internal (gemmules)."
      },
      {
        text: "The only freshwater species of sponge is:",
        options: ["Scypha", "Euspongia", "Spongilla", "Oscarella"],
        correct: 2,
        explanation: "Spongilla is the best-known freshwater sponge genus; most other sponges are marine."
      },
      {
        text: "Venus's flower basket (Euplectella) is a:",
        options: ["Sea anemone resembling a flower basket", "Sponge made of glass-like siliceous spicules", "Glass rope sponge of class Calcarea", "Ornamental mollusc"],
        correct: 1,
        explanation: "Euplectella (Venus's flower basket) is a hexactinellid (glass sponge) with a beautiful lattice of silica spicules, found in deep-sea waters."
      },
      {
        text: "Digestion in sponges is:",
        options: ["Extracellular only", "Intercellular", "Intracellular (within cells)", "Both extra- and intracellular"],
        correct: 2,
        explanation: "Sponges digest food intracellularly — food particles are engulfed by choanocytes and amoebocytes and digested within food vacuoles."
      },
      {
        text: "Which structure allows water to exit a sponge?",
        options: ["Ostia", "Spongocoel", "Osculum", "Mesohyl"],
        correct: 2,
        explanation: "Water exits the sponge through the large apical opening called the osculum after passing through the canal system."
      },
      {
        text: "Porifera are classified as:",
        options: ["Triploblastic", "Diploblastic", "Without tissue layers", "Pseudocoelomate"],
        correct: 2,
        explanation: "Sponges are parazoan — they lack true tissue layers (not diploblastic or triploblastic in the eumetazoan sense)."
      },
      {
        text: "Which type of cells lines the interior (spongocoel) of a sponge?",
        options: ["Pinacocytes", "Choanocytes", "Porocytes", "Mesenchymal cells"],
        correct: 1,
        explanation: "Choanocytes (collar cells) line the spongocoel and flagellated chambers, creating water currents and capturing food."
      },
      {
        text: "Sponges lack which of the following systems?",
        options: ["Nervous system only", "Digestive system only", "Circulatory system only", "All of the above (nervous, digestive, and circulatory systems)"],
        correct: 3,
        explanation: "Sponges possess none of these organ systems — they rely on diffusio

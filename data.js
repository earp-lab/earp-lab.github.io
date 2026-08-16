/* =============================================================================
   EARP LAB — SITE CONTENT
   -----------------------------------------------------------------------------
   This is the ONLY file you need to edit to update the website.
   Nothing here is code you need to understand — just fill in the text between
   the quotation marks. A few rules:

     • Keep the quotation marks " " and backticks ` ` exactly where they are.
     • Separate each entry with a comma.
     • For bios and citations you may use backticks ` ` (they allow apostrophes).
     • To italicise a journal name, wrap it like this: <em>Journal</em>, <em>Vol</em>Issue,
     • Headshots live in  assets/headshots/  — add the file, then point to it.

   Prefer not to touch the file directly? Open  admin.html  in your browser,
   edit with forms, and click "Download data.js" to get an updated copy.
   ========================================================================== */

window.SITE_DATA = {

  /* ---- Header ---------------------------------------------------------- */
  lab: {
    name: "EARP Lab",
    subtitle: "Experimental Bioethics, AI, and Relational Moral Psychology Lab",
  },

  /* ---- Home: about the lab --------------------------------------------- */
  about: `The EARP Lab — Experimental Bioethics, Artificial Intelligence, and Relational Moral Psychology — 
  is directed by Associate Professor Brian D. Earp at 
  the Centre for Biomedical Ethics, Yong Loo Lin School of Medicine, National University of Singapore. 
  We study how people actually reason about moral questions in medicine, technology, and close relationships, 
  and we use those findings to inform ethical theory and practice. 
  Our work combines controlled behavioural experiments, conceptual analysis, 
  and cross-cultural and computational methods, spanning psychology, philosophy, and bioethics.`,

  /* ---- Home: five research themes -------------------------------------- */
  /* icon options: balance · chip · relations · brain · spark · book        */
  themes: [
    { icon: "balance",   label: "Experimental bioethics" },
    { icon: "chip",      label: "AI ethics" },
    { icon: "relations", label: "Relational moral psychology" },
    { icon: "brain",     label: "Neuroethics" },
    { icon: "spark",     label: "Psychology of technology" },
  ],

  /* ---- People ---------------------------------------------------------- */
  /* Groups render in this order. To add a member, copy a { ... } block,    */
  /* paste it inside the right group's members list, and edit the fields.   */
  /* Leave a field as "" to hide it.                                        */
  groups: [
    
     {title: "Primary Investigator",
      members: [
         
        {name: "Brian D. Earp",
          role: "Director, EARP Lab",
          institution: "National University of Singapore",
          website: "https://www.brianearp.com/",
          email: "",
          image: "assets/headshots/BrianDE.avif",
          bio: `Associate Professor Brian D. Earp, PhD, is director of the Oxford-NUS Centre for Neuroethics and Society (OCNS) and 
          the EARP Lab (Experimental Bioethics, Artificial Intelligence, and Relational Moral Psychology Lab) 
          within the Centre for Biomedical Ethics, Yong Loo Lin School of Medicine, National University of Singapore (NUS). 
          Brian is also an Associate Professor of Philosophy and of Psychology at NUS by courtesy. 
          Brian holds degrees from Yale, Oxford, and Cambridge Universities and is 
          a Research Associate of the Uehiro Oxford Institute at the University of Oxford. 
          Brian is also Associate Director of the Yale-Hastings Program in Ethics and Health Policy at Yale University and 
          The Hastings Center, and is an elected member of the UK Young Academy under the auspices of the British Academy and the Royal Society.`
        }
      ]
    }, 
     
    {title: "Affiliated Faculty & Collaborators",
      members: [
         
        {name: "Ivar R. Hannikainen",
          role: "Affiliated Faculty",
          institution: "University of Granada",
          website: "https://moralsciencelab.com/people/",
          email: "",
          image: "assets/headshots/IvarRH.png",
          bio: `I received my PhD in Philosophy from the University of Sheffield (2014). After receiving my PhD, 
          I held a postdoctoral position at the Department of Law at the Pontifical Catholic University of Rio de Janeiro (2015-2016), 
          a fellowship at Getulio Vargas Foundation (2016), and 
          an assistant professorship in the Department of Law at the Pontifical Catholic University of Rio de Janeiro (2017-2019). 
          I have been at the University of Granada since 2020, and currently hold a Ramón y Cajal fellowship (2022-). 
          Through my career, I have been heavily invested in interdisciplinary projects at the interface of philosophy, psychology and law.`
        },
         
        {name: "Vilius Dranseika",
          role: "Affiliated Faculty",
          institution: "Jagiellonian University",
          website: "https://www.dranseika.lt/",
          email: "",
          image: "assets/headshots/ViliusD.jpg",
          bio: `I am a philosopher at Jagiellonian University Interdisciplinary Centre for Ethics in Kraków, Poland, where I serve as a 
          university professor (profesor uczelni). My research focuses on the psychological underpinnings of philosophical concepts and theories. 
          Recently, the main themes of my work have been personal identity, death, and memory. 
          I am also interested in computational approaches—ranging from natural language processing to citation analysis—applied to philosophy, 
          including its history. I hold a PhD in Philosophy from the Centre for Philosophy of Memory, Grenoble Alpes University, France.`
        },
         
        {name: "Sebastian Porsdam Mann",
          role: "Affiliated Faculty",
          institution: "University of Copenhagen",
          website: "https://jura.ku.dk/cebil/staff/cebil/?pure=en/persons/623446",
          email: "",
          image: "assets/headshots/SebastianPM.jpeg",
          bio: `Sebastian Porsdam Mann is an Assistant Professor at the Center for Advanced Studies in Bioscience Innovation Law at the University of Copenhagen. 
          His background is in philosophy, neuroscience, applied ethics (BA, PhD, University of Cambridge) and 
          international human rights law (DPhil pending, University of Oxford). 
          He has held postdoctoral positions at Harvard Medical School and the Universities of Oxford and Copenhagen, 
          the latter supported by a personal grant by the Carlsberg Foundation. 
          His work focuses on the practical potential and regulatory conditions necessary for novel technologies to facilitate 
          scientific progress and normative goals, with a focus on blockchain, generative AI, and the human right to science.`
        },
         
        {name: "Xiaojun Ding",
          role: "Affiliated Faculty",
          institution: "Xi’an Jiaotong University",
          website: "https://pwl.fcsh.unl.pt/xiaojun-ding/",
          email: "",
          image: "assets/headshots/XiaojunD.png",
          bio: `Xiaojun Ding holds a PhD in Philosophy (2016) and is an Associate Professor in the Philosophy Department at Xi’an Jiaotong University (China). 
          Her priority lines of research are on philosophical practice, logic and critical thinking, analytic philosophy, 
          experimental philosophy, epistemology, philosophy of science and technology, moral psychology, and positive psychology. 
          She has directed several national and international research projects in the domains of philosophical practice and philosophy of AI.`
        },
         
        {name: "Peng Liu",
          role: "Affiliated Faculty",
          institution: "Zhejiang University",
          website: "https://person.zju.edu.cn/en/pengliu",
          email: "",
          image: "assets/headshots/PengL.png",
          bio: `Dr. Peng Liu is a researcher and PhD advisor at the Center for Psychological Sciences, Zhejiang University. 
          He received his PhD in Management Science and Engineering (human factors) from Tsinghua University in 2014. 
          He currently focuses on interdisciplinary research on automated vehicles, including socially acceptable risk, 
          social acceptance, user experience, mixed traffic, human-machine co-driving, responsibility, ethics, and morality. 
          Relevant works have been published in Journal of Experimental Psychology: Applied, Risk Analysis, Reliability Engineering and 
          System Safety, Accident Analysis & Prevention, and Transportation Research. 
          He has been nominated as one of the top 2% scientists in the world on the global list released by Stanford University and Elsevier.`
        }
      ]
    },
     
    {title: "Postdoctoral Research Fellows",
      members: [
         
        {name: "Clint Hurshman",
          role: "Research Fellow",
          institution: "National University of Singapore",
          website: "https://medicine.nus.edu.sg/cbme/people_uri/clint-hurshman/",
          email: "",
          image: "assets/headshots/ClintH.avif",
          bio: `Clint Hurshman holds a PhD in philosophy from the University of Kansas and joined CBmE as a research fellow in 2025. 
          Clint’s research interests include AI ethics (especially transparency, trust in AI, and privacy), 
          philosophy of biology, and philosophy of social science.`
        },
         
        {name: "Elzė Sigutė Mikalonytė",
          role: "Research Fellow",
          institution: "National University of Singapore",
          website: "https://mikalonyte.com/",
          email: "",
          image: "assets/headshots/ElzeSM.avif",
          bio: `Elzė Sigutė Mikalonytė is a Research Fellow at the Centre for Biomedical Ethics. She is an experimental philosopher 
          working in aesthetics, metaphysics, and moral psychology. Previously, she was a Research Associate in the Department of 
          Psychology and a Junior Research Fellow at Wolfson College, University of Cambridge. She received her BA, MA, and PhD in 
          philosophy from Vilnius University, Lithuania. She spent part of her PhD studies at the Institut Jean Nicod in Paris, France. 
          Before turning to philosophy, she studied violin at the Vilnius Conservatoire.`
        },
         
        {name: "Yuxin Liu",
          role: "Research Fellow & Lab Manager",
          institution: "National University of Singapore",
          website: "https://liu-yuxin-psych.github.io/",
          email: "",
          image: "assets/headshots/YuxinL.avif",
          bio: `Yuxin joined the Centre for Biomedical Ethics as a Research Fellow and Lab Manager for A/P Brian Earp’s EARP Lab in 2026. 
          She holds, or will soon hold, a PhD, MScR, and MA in Psychology from the University of Edinburgh. Her doctoral research examines the concept of AI moral enhancement, aiming to ground proposals for Artificial Moral Advisors in empirical evidence of how individuals are likely to respond to them. Her research interests include moral psychology, experimental philosophy/bioethics, machine (meta)ethics, and AI ethics.`
        },
         
        {name: "Lydia Tsiakiri",
          role: "Research Fellow",
          institution: "National University of Singapore",
          website: "https://medicine.nus.edu.sg/cbme/people_uri/lydia-tsiakiri/",
          email: "",
          image: "assets/headshots/LydiaT.avif",
          bio: `Lydia joined the Centre for Biomedical Ethics (CBmE) as a Research Fellow in 2026. She holds a PhD in 
          Political Science from Aarhus University, Denmark. Her doctoral thesis explored responsibility-sensitive approaches to 
          healthcare resource allocation and their potentially discriminatory implications. She also holds an MSc in 
          Bioethics and Society from King’s College London and a BA in Philosophy from the National and Kapodistrian University of Athens. 
          Her current research interests include bioethics, personal responsibility, distributive justice, discrimination, and experimental philosophy.`
        },
         
        {name: "Danni Yang",
          role: "Research Fellow",
          institution: "National University of Singapore",
          website: "https://medicine.nus.edu.sg/cbme/people_uri/yang-danni/",
          email: "",
          image: "assets/headshots/DanniY.avif",
          bio: `Danni Yang is a Research Fellow at the Centre for Biomedical Ethics at the National University of Singapore, 
          working with A/Prof Brian Earp and contributing to Prof Julian Savulescu’s Collective Reflective Equilibrium in Practice (CREP) programme. 
          She received her PhD in Psychology from South China Normal University and was previously a visiting doctoral scholar at Yale University under Prof Yarrow Dunham. 
          Danni’s research integrates moral psychology, experimental philosophy, and AI ethics to examine how people navigate moral trade-offs 
          across interpersonal and intergroup contexts, with a focus on harm-sensitivity, cognitive style, and relational norms.`
        },
         
        {name: "Shengyu Zhao",
          role: "Research Fellow",
          institution: "National University of Singapore",
          website: "https://medicine.nus.edu.sg/cbme/people_uri/zhao-shengyu/",
          email: "",
          image: "assets/headshots/ShengyuZ.avif",
          bio: `Shengyu joined the Centre for Biomedical Ethics (CBmE) as a Research Fellow in 2025. She has a background in the social sciences and 
          holds an MSc and a PhD in bioethics from the University of Bristol. Her doctoral research focuses on empirical bioethics and 
          explores ethical challenges in palliative care in the Chinese mainland. Shengyu’s research interests include end-of-life ethics, 
          palliative care ethics, and healthcare ethics in Asian cultural contexts.`
        },
         
        {name: "Fei Song",
          role: "Senior Research Fellow",
          institution: "National University of Singapore",
          website: "https://sites.google.com/view/feisongphil/home",
          email: "",
          image: "assets/headshots/FeiS.avif",
          bio: `Song Fei is a Senior Research Fellow at the Centre for Biomedical Ethics at the National University of Singapore. 
          Before joining NUS, she served as a Research Assistant Professor at Lingnan University in Hong Kong and as 
          an Assistant Professor at Nazarbayev University in Kazakhstan. 
          She holds a PhD in Philosophy from the University of Hong Kong, an MA in Philosophy from the Australian National University, and 
          dual bachelor’s degrees in Philosophy and Psychology from East China Normal University. 
          Her research focuses on normative and applied ethics of risk, behavioural ethics, and 
          the ethics of AI, with an emphasis on trustworthy AI.`
        }
      ]
    },
     
    {title: "Doctoral & Graduate Students",
      members: [
        
         {name: "Maryam Ali Khan",
          role: "PhD Student",
          institution: "National University of Singapore",
          website: "https://medicine.nus.edu.sg/cbme/people_uri/maryam-khan/",
          email: "",
          image: "assets/headshots/MaryamAliK.avif",
          bio: `Maryam holds a BSc in Psychology from Oxford Brookes University and an MSc in Psychological Research from the University of Edinburgh. 
          Prior to beginning her PhD, Maryam worked at the Uehiro Oxford Institute, where she was a research assistant for the EU-funded CAVAA project, and 
          concurrently the lab manager for the Philosophical Moral Psychology Lab. 
          Her research interests include moral psychology, experimental philosophy, and the human relationship with AI.`
        },
        
         {name: "Zuriel Hassirim",
          role: "PhD Student",
          institution: "National University of Singapore",
          website: "https://medicine.nus.edu.sg/cbme/people_uri/zuriel-hassirim/",
          email: "",
          image: "assets/headshots/ZurielH.avif",
          bio: `Zuriel has a background in the Cognitive Sciences and holds an MA (Honours) and MSc from the University of Edinburgh. 
          She has also done research focused on learning, attention and mindfulness interventions in a Neuropsychology lab with 
          the Centre for Sleep and Cognition at NUS. Her research interests lie generally in the realm of 4E cognition, 
          experimental philosophy, identity, and the role of language in cognition.`
        },
         
        {name: "Niñoval Flores Pacaol",
          role: "PhD Student",
          institution: "National University of Singapore",
          website: "https://medicine.nus.edu.sg/cbme/people_uri/ninoval-flores-pacaol/",
          email: "",
          image: "assets/headshots/NinovalFP.avif",
          bio: `Niñoval F. Pacaol is a licensed professional teacher. 
          He received his undergraduate degree in Secondary Social Studies Education and 
          his master’s degree in Educational Management from Leyte Normal University in the Philippines. 
          His doctoral dissertation will defend the moral status of de-extinct animals using a non-Western (African) moral theory, 
          while examining its implications for debates in artificial intelligence, enhancement, and medicine. 
          His research interests include empirical and theoretical bioethics, climate politics and ethics, critical pedagogy, political theory, and death studies.`
        },
         
        {name: "Shilpa Surendran",
          role: "PhD Student",
          institution: "National University of Singapore",
          website: "https://medicine.nus.edu.sg/cbme/people_uri/shilpa-surendran/",
          email: "",
          image: "assets/headshots/ShilpaS.avif",
          bio: `Shilpa is trained in medicine and holds a master’s degree in public health. She is currently pursuing her PhD part time with the Centre for Biomedical Ethics, NUS. At present, Shilpa’s research interests range widely in applied ethics, with more specific interests in bodily autonomy and integrity, healthcare decision-making, and empirical bioethics.`
        },
         
        {name: "Sankalpa Ghose",
          role: "PhD Student",
          institution: "National University of Singapore",
          website: "https://www.sankalpa.ai/",
          email: "",
          image: "assets/headshots/SankalpaG.avif",
          bio: `Sankalpa is a PhD student and President’s Graduate Fellow at the Centre for Biomedical Ethics, NUS. 
          He has a background in moral philosophy and biomedical engineering, has started companies in telemedicine and 
          augmented reality, and nonprofits in global health in human and veterinary medicine. 
          His research interests include normative guidance systems, clinical-decision pathways, moral patiency, 
          incapacitated subjects, representative agents, and product-led philosophy.`
        },
         
        {name: "Faisal Feroz",
          role: "DPhil Candidate",
          institution: "University of Oxford",
          website: "https://www.uehiro.ox.ac.uk/people/faisal-feroz",
          email: "",
          image: "assets/headshots/FaisalF.jpg",
          bio: `Faisal is a DPhil candidate in Experimental Psychology at Somerville College, University of Oxford, 
          funded by the Humanities, Arts, and Social Sciences (HASS) International PhD Scholarship. 
          He is supervised by Professor Charles Spence and Dr Joanna Demaree-Cotton. 
          His DPhil examines the cognitive processes that underpin moral reasoning and ethical decision-making, 
          with a focus on how people evaluate trade-offs in morally significant domains, including food ethics. 
          Faisal previously completed a BA in Experimental Psychology at Wadham College, Oxford, and 
          worked as a Research Assistant and Lab Manager in the EARP Lab.`
        },
         
        {name: "Yueying Chu",
          role: "Visiting PhD Student",
          institution: "Zhejiang University",
          website: "https://yueyingchu.github.io/",
          email: "",
          image: "assets/headshots/YueyingC.png",
          bio: `I am currently a PhD candidate in Psychology at Zhejiang University, affiliated with 
          the Center for Psychological Sciences and the Department of Psychology and Behavioral Sciences. 
          Since 2025, I have also been a visiting PhD student at the Centre for Biomedical Ethics, National University of Singapore. 
          My research integrates perspectives from machine psychology and moral psychology to explore 
          how individuals make moral judgments in both human and human–AI contexts, with a particular interest in the role of 
          interpersonal relationships in shaping moral evaluations and responsibility attributions.`
        }
      ]
    }, 

     {title: "Past Members",
      members: [
         
        {name: "Shalom Chalson",
          role: "Assistant Professor",
          institution: "Singapore Management University",
          website: "https://www.shalomchalson.com/about",
          email: "",
          image: "assets/headshots/ShalomC.avif",
          bio: `I'm an Assistant Professor of Philosophy (Education) at the School of Social Sciences, Singapore Management University. 
          My research interests lie at the intersection of moral, social, and political philosophy. 
          I work primarily on the topic of wrongful discrimination. 
          Before joining SMU, I was a Research Fellow at the Centre for Biomedical Ethics in the 
          Yong Loo Lin School of Medicine, National University of Singapore. 
          I received my PhD in Philosophy from the Australian National University in 2025. `
        }
      ]
    }

  ],

  /* ---- Publications ---------------------------------------------------- */
  /* APA 7th. Set featured: true to also show it on the Home page.           */
  /* To add one: copy a block, paste your APA citation, add the URL.        */
  publications: [
    {featured: true,
      citation: `Gordon, E. C., Cheung, K., Savulescu, J., & Earp, B. D. (2025). 
      Moral enhancement and cheapened achievement: Psychedelics, virtual reality and AI.
      <em>Bioethics</em>, <em>39</em>(3), 276–287.<br>`,
      url: "https://doi.org/10.1111/bioe.13374"
    },
     
    {featured: true,
      citation: `Toomey, J., Lewis, J., Hannikainen, I. R., & Earp, B. D. (2024). 
      The true self and decision-making capacity. 
      <em>The American Journal of Bioethics</em>, <em>24</em>(8), 86–88.<br>`,
      url: "https://doi.org/10.1080/15265161.2024.2361894", 
      pdf: "publications/ToomeyJ_LewisJ_HannikainenIR_et_al_2024.pdf"
    },
     
    {featured: true,
      citation: `Calcott, R., & Earp, B. D. (2025). 
      Relational moral philosophy needs relational moral psychology: A relational moral theory: African ethics in and beyond the continent. 
      <em>Philosophical Psychology</em>, <em>38</em>(6), 2993-3001.<br>`,
      url: "https://doi.org/10.1080/09515089.2024.2304054"
    },
     
    {featured: false,
      citation: `The Brussels Collaboration on Bodily Integrity. (2025). 
      Genital modifications in prepubescent minors: When may clinicians ethically proceed? 
      <em>The American Journal of Bioethics</em>, <em>25</em>(7), 53-102.<br>`,
      url: "https://doi.org/10.1080/15265161.2024.2353823"
    }
  ],

  /* ---- News / updates -------------------------------------------------- */
  /* Newest first. "body" supports basic HTML and shows on the detail page. */
  news: [
    {id: "site-launch",
      title: "EARP Lab website launched",
      date: "2026-06-12",
      summary: "Our new lab website is live. Explore our people, research themes, and publications.",
      body: `<p>Welcome to the new home of the EARP Lab. The site brings together our people, research themes, and publications in one place, and will be updated regularly with news, new work, and opportunities to join us.</p>`
    },
     
    {id: "moral-enhancement-paper",
      title: "New paper: Moral enhancement and cheapened achievement",
      date: "2025-04-01",
      summary: "Gordon, Cheung, Earp, and Savulescu ask whether psychedelics, VR, and AI cheapen moral achievement.",
      body: `<p>Our new paper in <em>Bioethics</em> examines whether moral improvement brought about by psychedelics, virtual reality, or AI counts as a genuine achievement, and what that means for debates about moral enhancement.</p><p>Read it at <a href="https://doi.org/10.1111/bioe.13369" target="_blank" rel="noopener">doi.org/10.1111/bioe.13369</a>.</p>`
    }
  ],

  /* ---- Footer social / contact links ----------------------------------- */
  /* icon options: website · email · github · bluesky · twitter · linkedin · scholar */
  social: [
    { icon: "website", url: "https://medicine.nus.edu.sg/cbme/", label: "NUS Centre for Biomedical Ethics" },
    { icon: "github",  url: "https://github.com/earp-lab", label: "GitHub" }
  ]
};

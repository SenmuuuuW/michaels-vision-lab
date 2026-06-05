import Image from "next/image";

const methodFlow = [
  "Camera Distribution",
  "Child-led Photography",
  "1-on-1 Photo Reflection Interviews",
  "Visual Archive",
  "Teacher Reflection",
  "Booklet Draft"
];

const materials = [
  "child-led photographs",
  "interview transcripts",
  "teacher reflections",
  "visual archive",
  "booklet draft"
];

const findings = [
  "Micro-textures came first.",
  "Many frames were made from child height.",
  "Children photographed overlooked spaces.",
  "The robot question revealed feelings adults could not infer."
];

const projectFacts = [
  "Completed first field phase",
  "March 2026",
  "Levey Day School",
  "21 child photographers",
  "1-on-1 interviews",
  "30+ page booklet draft"
];

const projectDimensions = [
  "Child-led image making",
  "Photo reflection interviews",
  "AI vs human interpretation",
  "Teacher and family reflections",
  "Privacy and consent"
];

const cases = [
  {
    title: "Eli's Snowflake",
    participant: "Eli",
    age: "Age 7",
    image: "/images/through-their-eyes/eli-snowflake.jpg",
    caption: "Project photograph from the booklet draft.",
    story: "Eli noticed that each snowflake is different and has its own personality.",
    future:
      "A robot could photograph snow, but not the exact snow from that exact moment.",
    note:
      "Eli's answer turns a small ice detail into a claim about time, attention, and uniqueness."
  },
  {
    title: "Owen's Rock Texture",
    participant: "Owen",
    age: "Age 6",
    image: "/images/through-their-eyes/owen-rock-texture.jpg",
    caption: "Project photograph from the booklet draft.",
    story: "Owen noticed a black mark, a hard surface, and something mini inside a big rock.",
    future: "A robot could take it and might like it enough to keep it.",
    note:
      "Owen reads texture as evidence: big and small, hard and marked, all in one frame."
  },
  {
    title: "Aviva's Flower Detail",
    participant: "Aviva",
    age: "Age 5",
    image: "/images/through-their-eyes/aviva-flower-detail.jpg",
    caption: "Project photograph from the booklet draft.",
    story: "Aviva photographed flowers for their color, beauty, and prettiness.",
    future: "A robot could take the picture and might feel happy for her.",
    note:
      "Her explanation is simple and direct: color is the reason the picture matters."
  },
  {
    title: "Manola's Slide Angle",
    participant: "Manola",
    age: "Age 4",
    image: "/images/through-their-eyes/manola-slide-angle.jpg",
    caption: "Project photograph from the booklet draft.",
    story:
      "Manola chose the blue slide, especially the middle slide, because it lets her go up in the air.",
    future:
      "Robots could take it with body cameras and might be happy because taking pictures is her favorite thing.",
    note:
      "The image holds motion, preference, and the feeling of play."
  },
  {
    title: "Birdie's Through-the-Hole View",
    participant: "Birdie",
    age: "Age 5",
    image: "/images/through-their-eyes/birdie-hole-view.jpg",
    caption: "Project photograph from the booklet draft.",
    story: "Birdie noticed color, closeness, and the view through small holes.",
    future:
      "Robots can zoom close, but Birdie was not sure they could feel the same happiness.",
    note:
      "Birdie's answer separates what a camera can do from what a child can feel."
  }
];

const adultReflections = [
  {
    id: "morah-debbie",
    name: "Morah Debbie",
    role: "Teacher reflection",
    excerpt: "“Eye contact, smiles. Hugs and social connections.”",
    note: "She points to the forms of care that do not show up as data.",
    question:
      "In an age where AI can simulate learning environments, what uncomputable elements of early childhood education do you believe are irreplaceable?",
    transcript: [
      "Eye contact, smiles. Hugs and social connections.",
      "Putting on bandaids.",
      "How would AI know if a child was sick?",
      "Nonverbal communication."
    ]
  },
  {
    id: "morah-kim",
    name: "Morah Kim",
    role: "Teacher reflection",
    excerpt: "“We've been studying light, so I loved seeing some mentioned light.”",
    note: "Her response connects child-led photographs back to classroom learning.",
    question:
      "As their educators, what surprised you most about the subjects the children chose to photograph? How did their visual choices differ from your usual pedagogical expectations?",
    transcript: [
      "I thought photographing the three blue slides was an interesting choice made by a few kids. We've been studying light, so I loved seeing some mentioned “light” in their descriptions."
    ]
  },
  {
    id: "morah-erin",
    name: "Morah Erin",
    role: "Teacher reflection",
    excerpt: "“Taking your time and doing things well using your own thought process.”",
    note: "She frames autonomy as patience, craft, and belief in one's own thinking.",
    question:
      "What is the most vital lesson we should teach them to protect their human autonomy for the future?",
    transcript: [
      "While we are living in a world that looks for quick easy fixes, I think it's important to share with kids the value that you get from taking your time and doing things well using your own thought process and your own hands.",
      "If children were to do this, they could achieve a wonderful sense of accomplishment and learn that even though it may take longer, the reward can be far greater.",
      "I also think it's important for children to learn the value of themselves, and the importance of their individuality. The greatest gift you can give to yourself is believing in you and loving you for who you are."
    ]
  },
  {
    id: "hamiltons-mom",
    name: "Hamilton's mom",
    role: "Family reflection",
    excerpt: "“There is a level of abstraction when a child uses their curiosity.”",
    note: "Her response names imagination and free will as part of childhood curiosity.",
    question:
      "Beyond just taking pictures, what is one thing about your child's curiosity that you believe a computer or a robot could never truly understand or replicate?",
    transcript: [
      "There is a level of abstraction when a child uses their curiosity. It's pretty neat because there is a lack of boundaries and principles when they idealize and have a perspective.",
      "I don't see AI getting to a point of abstract thinking and being able to blend principles and bylaws to come up with a unique idea.",
      "In order to do this, it requires not only intelligence but various emotional aptitudes, which all humans have, and free will."
    ]
  }
];

const bookletSections = [
  {
    title: "Letter to Families",
    note: "Michael introduces the project, gratitude to the Levey community, and the idea of handing the lens back to children."
  },
  {
    title: "Adult Reflections",
    note: "Teacher and family responses consider what early childhood education protects in an age of simulated images."
  },
  {
    title: "The Two Questions",
    note: "The booklet frames each child page through present-tense story and future-facing reflection on robots and feeling."
  },
  {
    title: "Selected Child Pages",
    note: "Individual pages pair a child's photograph with their own explanation and their response to the AI question."
  },
  {
    title: "Closing Reflection",
    note: "The draft closes by asking readers to keep the spark of discovery alive."
  }
];

const fullGallery = [
  {
    name: "Aviva",
    age: "Age 5",
    image: "/images/through-their-eyes/aviva-flower-detail.jpg",
    story: "Aviva photographed flowers for their color, beauty, and prettiness.",
    future: "She imagined a robot could take the picture and might feel happy for her."
  },
  {
    name: "Birdie",
    age: "Age 5",
    image: "/images/through-their-eyes/birdie-hole-view.jpg",
    story: "Birdie photographed color, closeness, and the view through small holes.",
    future:
      "She thought robots could zoom close, but might not feel happiness in the same way."
  },
  {
    name: "Dallas",
    age: "Age 6",
    image: "/images/through-their-eyes/dallas-booklet.jpg",
    story: "Dallas chose the image because it felt beautiful, cool, and awesome.",
    future:
      "Dallas was unsure, but imagined robots might love beautiful things and the playground."
  },
  {
    name: "Eli",
    age: "Age 7",
    image: "/images/through-their-eyes/eli-snowflake.jpg",
    story: "Eli photographed snow because each snowflake felt different and individual.",
    future:
      "He said a robot could photograph snow, but not the exact snow from that exact moment."
  },
  {
    name: "Gemma",
    age: "Age 7",
    image: "/images/through-their-eyes/gemma-booklet.jpg",
    story: "Gemma noticed plants, shadow, and sunlight on the rock.",
    future: "She was unsure, but thought a robot might like the image."
  },
  {
    name: "Hamilton",
    age: "Age 5",
    image: "/images/through-their-eyes/hamilton-booklet.jpg",
    story:
      "Hamilton connected red and brown to favorite colors and favorite foods.",
    future: "Hamilton imagined the robot could take it and like the red."
  },
  {
    name: "Jojo",
    age: "Age 4",
    image: "/images/through-their-eyes/jojo-booklet.jpg",
    story:
      "Jojo photographed a favorite subject connected to plants, food, beauty, and helping the Earth.",
    future: "Jojo imagined a robot could take the picture and like the image made by the child."
  },
  {
    name: "Juju",
    age: "Age 4",
    image: "/images/through-their-eyes/juju-booklet.jpg",
    story:
      "Juju photographed flowers for their colors and the beautiful smell she wanted to keep noticing.",
    future:
      "Juju thought machines can take pictures and might feel happy because they like colors."
  },
  {
    name: "Manola",
    age: "Age 4",
    image: "/images/through-their-eyes/manola-slide-angle.jpg",
    story:
      "Manola photographed the blue slide, especially the middle slide, because it lets her go up in the air.",
    future:
      "She imagined robots could take the picture with body cameras and feel happy because taking pictures is her favorite thing."
  },
  {
    name: "Maebel",
    age: "Age 6",
    image: "/images/through-their-eyes/maebel-booklet.jpg",
    story:
      "Maebel photographed sparkly, rainbow-like detail that reminded her of a butterfly kite.",
    future:
      "She thought a robot might not know where she took it, though it might respond to the sparkle."
  },
  {
    name: "Oriana",
    age: "Age 5",
    image: "/images/through-their-eyes/oriana-booklet.jpg",
    story: "Oriana photographed the slide because it was beautiful and blue.",
    future: "She thought a robot could take the picture and feel happy."
  },
  {
    name: "Owen",
    age: "Age 6",
    image: "/images/through-their-eyes/owen-rock-texture.jpg",
    story:
      "Owen noticed a black mark on a hard rock and something very mini inside something big.",
    future: "He thought a robot could take it and might like it enough to keep it."
  },
  {
    name: "Precious",
    age: "Age 4",
    image: "/images/through-their-eyes/precious-booklet.jpg",
    story: "Precious photographed colors because they were all favorite colors.",
    future:
      "Precious thought robots would not know where the school is, but might feel happy if they liked the colors."
  },
  {
    name: "Rissah",
    age: "Age 8",
    image: "/images/through-their-eyes/rissah-booklet.jpg",
    story:
      "Rissah photographed the sky, faraway things, and the whole outside scene.",
    future:
      "Rissah imagined robots could see far away, including houses, and feel happy."
  },
  {
    name: "Tempe",
    age: "Age 9",
    image: "/images/through-their-eyes/tempe-booklet.jpg",
    story:
      "Tempe photographed something beautiful and detailed, connected to a favorite color.",
    future: "Tempe thought a robot probably could take it and feel happy because it was beautiful."
  },
  {
    name: "Thea",
    age: "Age 4",
    image: "/images/through-their-eyes/thea-booklet.jpg",
    story:
      "Thea noticed a log, a table that looked like a mushroom, and a gate in the background.",
    future:
      "Thea connected robots and cameras through batteries and imagined the robot feeling happy."
  },
  {
    name: "Vaela",
    age: "Age 3",
    image: "/images/through-their-eyes/vaela-booklet.jpg",
    story: "Vaela photographed the rock because she liked it.",
    future:
      "Vaela did not think a robot could take the same picture, but imagined a robot might like rocks."
  },
  {
    name: "Willis",
    age: "Age 5",
    image: "/images/through-their-eyes/willis-booklet.jpg",
    story:
      "Willis noticed white, color, and a personal connection to favorite numbers.",
    future:
      "Willis imagined the robot could take the picture because the robot would be like the child."
  },
  {
    name: "Yara",
    age: "Age 4",
    image: "/images/through-their-eyes/yara-booklet.jpg",
    story:
      "Yara photographed the outside, the stones, and the memorial because she loved them.",
    future:
      "Yara imagined a robot seeing the scene as pretty because she loved it."
  }
];

export default function ThroughTheirEyesPage() {
  return (
    <>
      {/* 项目页标题：清楚说明 Levey 项目已经完成。 */}
      <section className="page-hero page-section wide-section">
        <p className="kicker">Completed Project · Levey Day School</p>
        <h1>Through Their Eyes</h1>
        <p>
          In March 2026, Michael gave cameras to 21 preschool children and asked what
          they wanted to show.
        </p>
      </section>

      {/* 项目维度：用具体方法替代抽象说明。 */}
      <section className="page-section wide-section project-dimensions">
        <div className="dimension-copy">
          <p className="kicker">How the Project Works</p>
          <h2>Five concrete dimensions</h2>
          <p>
            Through Their Eyes moves from observation to method: children make images,
            then adults listen, compare, and protect the context around those images.
          </p>
          <div className="chip-list">
            {projectFacts.map((fact) => (
              <span className="archive-chip" key={fact}>
                {fact}
              </span>
            ))}
          </div>
        </div>
        <figure className="dimension-visual">
          <img src="/images/through-their-eyes/aviva-flower-detail.jpg" alt="" />
          <figcaption>Project dimensions</figcaption>
          <div className="dimension-labels">
            {projectDimensions.map((dimension) => (
              <span key={dimension}>{dimension}</span>
            ))}
          </div>
        </figure>
      </section>

      {/* 研究问题：用一句话固定项目焦点。 */}
      <section className="page-section wide-section quote-panel">
        <p className="kicker">Project Question</p>
        <p className="prominent-sentence">
          Instead of photographing children, I asked what children would photograph
          themselves.
        </p>
        <blockquote>
          “What happens when children are given cameras before adults give them
          instructions?”
        </blockquote>
      </section>

      {/* 两个问题：保留 booklet 的 The Story / To Future 访谈结构。 */}
      <section className="page-section wide-section two-questions">
        <div className="section-heading">
          <p className="kicker">The Two Questions</p>
          <h2>Two questions, repeated slowly</h2>
          <p className="section-intro">
            Every interview began with the photograph already in the child's hands.
          </p>
        </div>
        <div className="question-pair">
          <article>
            <span>The Story</span>
            <p>Why did you capture this?</p>
          </article>
          <article>
            <span>To Future</span>
            <p>Can a robot take the same picture and feel the happiness you feel?</p>
          </article>
        </div>
      </section>

      {/* 方法流程：呈现从拍摄到 booklet 草稿的路径。 */}
      <section className="page-section wide-section">
        <p className="kicker">Method Flow</p>
        <div className="flow" aria-label="Project method flow">
          {methodFlow.map((step) => (
            <div className="flow-step" key={step}>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* 材料与发现：把项目从视觉展示推进到研究档案。 */}
      <section className="page-section wide-section research-blocks">
        <article className="research-list">
          <p className="kicker">Materials Collected</p>
          <ul>
            {materials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="research-list">
          <p className="kicker">Selected Findings</p>
          <ul>
            {findings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      {/* 案例卡片：用 booklet 的 The Story / To Future 结构组织儿童解释。 */}
      <section className="page-section wide-section">
        <div className="section-heading">
          <p className="kicker">Featured Research Cases</p>
          <h2>Five photographs, five explanations</h2>
          <p className="section-intro">
            Real images from the booklet, paired with short interview excerpts.
          </p>
        </div>
        <div className="case-grid">
          {cases.map((item) => (
            <article className="case-card" key={item.title}>
              <Image src={item.image} alt="" width={720} height={520} />
              <div className="case-body">
                <p className="caption">{item.caption}</p>
                <p className="participant-line">
                  {item.participant} · {item.age}
                </p>
                <h3>{item.title}</h3>
                <dl>
                  <div>
                    <dt>The Story</dt>
                    <dd>{item.story}</dd>
                  </div>
                  <div>
                    <dt>To Future</dt>
                    <dd>{item.future}</dd>
                  </div>
                  <div>
                    <dt>Michael's Research Note</dt>
                    <dd>{item.note}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 完整画廊：保留研究案例的深度，同时让访客浏览全部儿童摄影页。 */}
      <section className="page-section wide-section full-gallery-section">
        <div className="section-heading">
          <p className="kicker">Complete Archive</p>
          <h2>Full Child-Led Gallery</h2>
          <p className="section-intro">
            A scrollable archive of children's photographs, story explanations, and
            future-facing robot reflections.
          </p>
          <p className="privacy-note">
            This public gallery uses first names only and avoids identifying facial images
            or private family details. Selected excerpts are adapted from the project
            booklet with privacy in mind.
          </p>
        </div>
        <div className="full-gallery-grid">
          {fullGallery.map((item) => (
            <article className="gallery-card" key={item.name}>
              <Image src={item.image} alt="" width={520} height={360} />
              <div className="gallery-card-body">
                <p className="participant-line">
                  {item.name} · {item.age}
                </p>
                <dl>
                  <div>
                    <dt>The Story</dt>
                    <dd>{item.story}</dd>
                  </div>
                  <div>
                    <dt>To Future</dt>
                    <dd>{item.future}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 成人反馈：上层为摘要索引，下层为完整访谈摘录，兼顾阅读节奏与资料深度。 */}
      <section className="page-section wide-section adult-reflections">
        <div className="section-heading">
          <p className="kicker">Adult Interview Archive</p>
          <h2>Teacher and Family Reflections</h2>
          <p className="section-intro">
            Adults were invited to reflect on what children's photographs reveal about
            attention, learning, AI, and human connection.
          </p>
          <p className="privacy-note">
            Full reflections are included with privacy and project-context editing in mind.
          </p>
        </div>
        <div className="reflection-preview-list">
          {adultReflections.map((reflection) => (
            <article className="reflection-preview" key={reflection.name}>
              <div>
                <p className="participant-line">
                  {reflection.name} · {reflection.role}
                </p>
                <blockquote>{reflection.excerpt}</blockquote>
              </div>
              <div>
                <p>{reflection.note}</p>
                <a className="subtle-link" href={`#reflection-${reflection.id}`}>
                  Read full reflection
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="full-reflections" aria-label="Full adult reflections">
          <div className="section-heading">
            <p className="kicker">Full Reflections</p>
            <h2>Interview responses from the booklet</h2>
          </div>
          {adultReflections.map((reflection) => (
            <article
              className="transcript-entry"
              id={`reflection-${reflection.id}`}
              key={reflection.id}
            >
              <div className="transcript-heading">
                <p className="participant-line">
                  {reflection.name} · {reflection.role}
                </p>
                <p>{reflection.question}</p>
              </div>
              <div className="transcript-body">
                {reflection.transcript.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 小册子预览：以 PDF 草稿目录为基础，后续可加入 Canva 页面截图。 */}
      <section className="page-section wide-section booklet-preview">
        <div>
          <p className="kicker">Booklet Preview</p>
          <h2>Through Their Eyes draft structure</h2>
          <p>
            The full booklet draft exists as a 28-page working document. Selected pages
            can be added later as approved Canva screenshots; for now, this preview shows
            the public-facing structure of the draft.
          </p>
        </div>
        <div className="booklet-pages booklet-card-grid" aria-label="Booklet preview structure">
          {bookletSections.map((section) => (
            <article className="booklet-card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 后续方向：把单一项目连接到未来田野。 */}
      <section className="page-section wide-section future-hook">
        <p className="kicker">What Comes Next</p>
        <h2>From one school community to future fieldwork</h2>
        <p>
          The first field phase showed how children use photographs to explain attention,
          memory, and feeling. The next step is to test this method in new communities,
          beginning with planned summer fieldwork in Guizhou.
        </p>
      </section>

      {/* AI 与人类视觉：明确机器描述的边界。 */}
      <section className="page-section wide-section ai-human">
        <div>
          <p className="kicker">AI vs Human Vision</p>
          <h2>AI can describe the object, but the child explains the relationship.</h2>
        </div>
        <p>
          In this archive, AI comparison is used as a reflective tool. A machine may
          identify a snowflake, a rock, a flower, a slide, or a circular opening, but the
          child explains why that view mattered, where attention began, and what feeling
          the image carried.
        </p>
      </section>
    </>
  );
}

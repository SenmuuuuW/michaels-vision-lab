import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  "child-led photography",
  "ethical visual storytelling",
  "AI and human interpretation",
  "education and small school communities"
];

const questions = [
  {
    title: "Child-led photography",
    text: "What changes when children hold the camera?",
    image: "/images/through-their-eyes/manola-slide-angle.jpg"
  },
  {
    title: "Ethical visual storytelling",
    text: "How can schools tell stories while protecting privacy?",
    image: "/images/through-their-eyes/aviva-flower-detail.jpg"
  },
  {
    title: "AI and human meaning",
    text: "What can machines name, and what do children explain?",
    image: "/images/through-their-eyes/owen-rock-texture.jpg"
  }
];

const archiveStripImages = [
  {
    label: "Eli's snowflake",
    image: "/images/through-their-eyes/eli-snowflake.jpg"
  },
  {
    label: "Owen's rock texture",
    image: "/images/through-their-eyes/owen-rock-texture.jpg"
  },
  {
    label: "Aviva's flower detail",
    image: "/images/through-their-eyes/aviva-flower-detail.jpg"
  },
  {
    label: "Manola's slide angle",
    image: "/images/through-their-eyes/manola-slide-angle.jpg"
  },
  {
    label: "Dallas booklet image",
    image: "/images/through-their-eyes/dallas-booklet.jpg"
  },
  {
    label: "Gemma booklet image",
    image: "/images/through-their-eyes/gemma-booklet.jpg"
  },
  {
    label: "Hamilton booklet image",
    image: "/images/through-their-eyes/hamilton-booklet.jpg"
  },
  {
    label: "Juju booklet image",
    image: "/images/through-their-eyes/juju-booklet.jpg"
  },
  {
    label: "Yara booklet image",
    image: "/images/through-their-eyes/yara-booklet.jpg"
  }
];

export default function Home() {
  return (
    <>
      {/* 首页英雄区：先说明整体档案方向，再给出真实项目入口。 */}
      <section className="hero page-section wide-section">
        <div className="hero-copy">
          <p className="kicker">Personal Visual Research Archive</p>
          <h1>Michael's Vision Lab</h1>
          <p className="subtitle">
            A visual research archive on how children use photography to show what adults
            often miss.
          </p>
          <p className="field-note">
            In March 2026, I gave cameras to 21 preschool children and asked what they
            wanted to show.
          </p>
          <div className="chip-list" aria-label="Archive focus areas">
            {focusAreas.map((area) => (
              <span className="archive-chip" key={area}>
                {area}
              </span>
            ))}
          </div>
        </div>
        <figure className="hero-visual" aria-label="Abstract archive table with printed photographs">
          <div className="print print-one" />
          <div className="print print-two" />
          <div className="print print-three" />
          <figcaption>Field notes, child photographs, and booklet drafts.</figcaption>
        </figure>
      </section>

      {/* LEAPS 式叙事：自然说明从观察到方法、从项目到延展。 */}
      <section className="page-section wide-section leaps-line-section">
        <p>
          The lab began as a question about children's attention, but it is growing into a
          way to study education, representation, and ethical problem-solving.
        </p>
      </section>

      {/* 左图右文：用真实项目建立档案的第一个入口。 */}
      <section className="page-section wide-section editorial-pair">
        <figure className="pair-image">
          <img src="/images/through-their-eyes/eli-snowflake.jpg" alt="" />
          <figcaption>Eli's snowflake photograph, Through Their Eyes.</figcaption>
        </figure>
        <div className="pair-copy">
          <p className="kicker">Current Archive</p>
          <h2>Start from what children choose to show.</h2>
          <p>
            Michael's Vision Lab begins with a simple method: hand the camera to the child,
            then listen to the explanation. The archive is built from photographs,
            interviews, teacher reflections, and careful editing.
          </p>
          <Link className="text-link" href="/through-their-eyes">
            View Through Their Eyes
          </Link>
        </div>
      </section>

      {/* 横向图像档案：只提供视觉浏览，不重复案例文字。 */}
      <section className="page-section wide-section home-archive-strip-section">
        <div className="strip-heading">
          <div>
            <p className="kicker">Through Their Eyes</p>
            <h2>Levey Day School image archive</h2>
          </div>
          <p>A scrolling strip of selected child-led photographs from Through Their Eyes.</p>
        </div>
        <div className="home-archive-strip" aria-label="Levey Day School image archive">
          {archiveStripImages.map((item) => (
            <figure className="archive-strip-item" key={item.image}>
              <Image src={item.image} alt="" width={360} height={260} sizes="(max-width: 720px) 72vw, 280px" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 右图左文：说明 AI 比较但不夸大技术。 */}
      <section className="page-section wide-section editorial-pair reverse-pair">
        <div className="pair-copy">
          <p className="kicker">Research Lens</p>
          <h2>Images are not just objects to label.</h2>
          <p>
            In the booklet interviews, children were asked whether a robot could take the
            same picture and feel the same happiness. Their answers make the archive less
            about technology hype and more about attention, feeling, and place.
          </p>
        </div>
        <figure className="pair-image image-strip">
          <img src="/images/through-their-eyes/birdie-hole-view.jpg" alt="" />
          <img src="/images/through-their-eyes/owen-rock-texture.jpg" alt="" />
          <figcaption>Two project images: a through-the-hole view and a rock texture.</figcaption>
        </figure>
      </section>

      {/* 研究入口：用图像碎片替代普通卡片，让三个方向更像档案索引。 */}
      <section className="page-section wide-section lens-section">
        <div className="section-heading">
          <p className="kicker">Research Questions</p>
          <h2>Three archive lenses</h2>
        </div>
        <div className="lens-grid">
          {questions.map((question) => (
            <article className="lens-item" key={question.title}>
              <img src={question.image} alt="" />
              <span>{question.title}</span>
              <p>{question.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 后续田野：保持为小注记，避免误导为已完成项目。 */}
      <section className="page-section wide-section note-section">
        <p className="kicker">Upcoming Fieldwork</p>
        <h2>The Guizhou Echo</h2>
        <p>
          Planned summer fieldwork. For now, it stays as a note until the project is
          completed and edited with the same care as Through Their Eyes.
        </p>
      </section>
    </>
  );
}

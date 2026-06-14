import Image from "next/image";
import Link from "next/link";

const projectCards = [
  {
    title: "Through Their Eyes",
    featured: true,
    status: "Completed first field phase",
    href: "/through-their-eyes",
    image: "/images/through-their-eyes/manola-slide-angle.jpg",
    text:
      "A child-led photography project at Levey Day School with 21 preschool photographers, 1-on-1 interviews, teacher reflections, and a booklet draft."
  },
  {
    title: "The Guizhou Echo",
    status: "Planned / upcoming fieldwork",
    href: "#guizhou-echo",
    image: "/images/through-their-eyes/yara-booklet.jpg",
    text:
      "A planned summer fieldwork note on school, place, and visual storytelling. This project is not yet complete."
  }
];

const articles = [
  "The Two Questions Behind Through Their Eyes",
  "What Children Believe Robots Can and Cannot Feel",
  "Photography as Listening",
  "Adult Reflections on AI and Childhood"
];

const researchMap = [
  {
    label: "Completed Project",
    text: "Through Their Eyes anchors the archive with fieldwork, interviews, adult reflections, and a booklet draft."
  },
  {
    label: "Upcoming Fieldwork",
    text: "The Guizhou Echo remains planned until new material is collected, reviewed, and edited."
  },
  {
    label: "Method",
    text: "Child-led image making, photo reflection interviews, and careful public-facing selection."
  },
  {
    label: "Ethics",
    text: "Consent, privacy, first-name use, and no identifiable child images without permission."
  }
];

export default function ResearchPage() {
  return (
    <>
      {/* 研究首页：把项目放在中心，而不是长篇文章列表。 */}
      <section className="page-hero page-section wide-section">
        <p className="kicker">Research</p>
        <h1>Projects, field notes, and draft essays</h1>
        <p>
          Michael's research begins with images made by children, then follows the
          interviews, school context, and questions those images open.
        </p>
      </section>

      {/* 研究地图：让页面像项目档案总览，而不是普通卡片列表。 */}
      <section className="page-section wide-section research-map-section">
        <div>
          <p className="kicker">Research Map</p>
          <h2>One completed field phase, one planned extension.</h2>
        </div>
        <div className="research-map-grid">
          {researchMap.map((item) => (
            <article className="research-map-item" key={item.label}>
              <span>{item.label}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 项目卡片：Research 成为主入口，Through Their Eyes 放在这里归类。 */}
      <section className="page-section wide-section project-hub-grid">
        {projectCards.map((project) => (
          <article
            className={`project-hub-card${project.featured ? " primary-project-card" : ""}`}
            id={project.title === "The Guizhou Echo" ? "guizhou-echo" : undefined}
            key={project.title}
          >
            <Image
              src={project.image}
              alt=""
              width={720}
              height={520}
              sizes={project.featured ? "(max-width: 980px) 50vw, 38vw" : "(max-width: 980px) 50vw, 28vw"}
            />
            <div className="project-hub-body">
              <span className="status-label">{project.status}</span>
              <h2>{project.title}</h2>
              <p>{project.text}</p>
              {project.href.startsWith("/") ? (
                <Link className="text-link" href={project.href}>
                  Open project
                </Link>
              ) : (
                <span className="quiet-label">Future archive page</span>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* 后续研究：说明从一个学校社区到未来田野的延展。 */}
      <section className="page-section wide-section research-continuation">
        <p className="kicker">Research Continuation</p>
        <h2>From project to model</h2>
        <p>
          Through Their Eyes is the first field phase. Future work will compare children's
          visual attention across different school and cultural environments, including a
          planned Guizhou extension.
        </p>
      </section>

      {/* 草稿方向：保留写作感，但控制文字密度。 */}
      <section className="page-section wide-section writing-strip">
        <div>
          <p className="kicker">Draft Writing</p>
          <h2>Essay notes in progress</h2>
        </div>
        <div className="chip-list">
          {articles.map((article) => (
            <span className="archive-chip" key={article}>
              {article}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

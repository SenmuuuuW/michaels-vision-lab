const profileRows = [
  {
    title: "Why Visual Storytelling",
    text:
      "I work as a student photographer and editor. Photography awards helped me build confidence, but Through Their Eyes changed the question: not only what makes a strong image, but who gets to make it."
  },
  {
    title: "School Leadership",
    text:
      "At Frederick Gunn School, I have learned from community roles as much as classroom work. As a Residential Advisor, I pay attention to trust, belonging, and how people feel seen."
  },
  {
    title: "Editing and Writing",
    text:
      "As Yearbook Senior Editor and Polyphony Lit Editor, I think about sequence, caption, tone, and the responsibility that comes with publishing other people's stories."
  },
  {
    title: "Sports and Team Management",
    text:
      "As Football Team Manager and an Ultimate Frisbee player, I have learned the quiet work behind teams: preparation, communication, and being useful without needing the spotlight."
  },
  {
    title: "Future Direction",
    text:
      "I am interested in education equity, law, privacy, and technology ethics. Harvard Summer School humanities coursework helped me connect those questions to writing, history, and public life."
  }
];

export default function AboutPage() {
  return (
    <>
      {/* 关于页标题：改为 About Me，更像个人档案入口。 */}
      <section className="page-hero page-section wide-section">
        <p className="kicker">About Me</p>
        <h1>About Me</h1>
        <p>
          I am Michael Wang, a student photographer, editor, and community leader at
          Frederick Gunn School. Michael's Vision Lab is where I collect visual research
          projects about schools, images, privacy, and technology.
        </p>
      </section>

      {/* 个人档案：左侧保留未来照片位置，右侧用平衡行说明背景。 */}
      <section className="page-section wide-section profile-layout">
        <aside className="profile-aside">
          <div className="portrait-placeholder" aria-label="Portrait or fieldwork image to be added." />
          <p>Portrait or fieldwork image to be added.</p>
        </aside>
        <div className="profile-main">
          <div className="profile-intro">
            <p className="kicker">Short Bio</p>
            <h2>Images, schools, and the question of who gets seen.</h2>
            <p>
              My work started with photography and editing. It has grown toward questions
              about children, consent, education equity, and how technology changes the
              way people interpret images.
            </p>
          </div>
          <div className="profile-rows">
            {profileRows.map((row) => (
              <article className="profile-row" key={row.title}>
                <h3>{row.title}</h3>
                <p>{row.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

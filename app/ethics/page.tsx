const sections = [
  {
    title: "Consent",
    text: "The project begins with school permission, parent or guardian consent, and child assent. Participation should be explained in plain language, with a clear right to opt out."
  },
  {
    title: "Privacy",
    text: "No identifiable faces are shown without permission. No full names are used unless explicitly permitted, and archive placeholders are used when public display would create unnecessary exposure."
  },
  {
    title: "AI Use",
    text: "Identifiable child images are not uploaded to AI tools. AI may support comparison and reflection, but children's explanations come before machine interpretation."
  },
  {
    title: "Representation",
    text: "The archive avoids turning children, schools, or communities into symbols for an adult agenda."
  },
  {
    title: "Educational Purpose",
    text: "The work is designed for learning, reflection, and ethical visual inquiry, not commercial promotion."
  }
];

const principles = [
  "Children are photographers, not subjects.",
  "No identifiable faces without permission.",
  "AI is used for reflection, not authority.",
  "Children's explanations come before machine descriptions.",
  "No poverty framing or cultural exoticism."
];

const protocol = [
  "School permission before fieldwork begins.",
  "Parent/guardian consent for participation and image use.",
  "Child assent, with the right to opt out at any point.",
  "No identifiable faces without permission.",
  "No full names unless permitted.",
  "No uploading identifiable child images to AI tools.",
  "Children's explanations come before machine interpretation."
];

export default function EthicsPage() {
  return (
    <>
      {/* 伦理页标题：把原则放在视觉研究之前。 */}
      <section className="page-hero page-section">
        <p className="kicker">Ethics</p>
        <h1>Ethical Visual Storytelling Protocol</h1>
        <p>
          Michael's Vision Lab treats visual research as a relationship of care. The
          archive begins with consent, privacy, and humility before interpretation.
        </p>
      </section>

      {/* 伦理原则：清楚列出不可妥协的边界。 */}
      <section className="page-section principles">
        {principles.map((principle) => (
          <p key={principle}>{principle}</p>
        ))}
      </section>

      {/* 具体流程：用简洁语言说明项目执行边界。 */}
      <section className="page-section protocol-section">
        <p className="kicker">Protocol Checklist</p>
        <p>
          Public excerpts are selected with consent and privacy in mind. The archive uses
          first names only, avoids identifiable faces unless permission is clear, and keeps
          family details out of public-facing summaries.
        </p>
        <ul>
          {protocol.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* 协议章节：用简短文字解释每个实践维度。 */}
      <section className="page-section ethics-grid">
        {sections.map((section) => (
          <article className="ethics-card" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}

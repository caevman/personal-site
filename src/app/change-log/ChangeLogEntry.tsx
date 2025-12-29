export type ChangeLogGroup = {
  title: string;
  items: string[];
};

export type ChangeLogEntryProps = {
  date: string;
  summary: string;
  groups: ChangeLogGroup[];
};

export function ChangeLogEntry({ date, summary, groups }: ChangeLogEntryProps) {
  return (
    <section className="change-log__entry">
      <header className="change-log__entry-header">
        <h2>{date}</h2>
        <p className="change-log__summary">{summary}</p>
      </header>

      <div className="change-log__groups">
        {groups.map((group) => (
          <section className="change-log__group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

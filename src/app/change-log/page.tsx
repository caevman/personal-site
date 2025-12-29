import { ChangeLogEntry } from './ChangeLogEntry';
import { entries } from './entries';

export default function Home() {
  return (
    <div className="change-log">
      <h1>Changelog</h1>

      <section className="change-log__intro">
        <p>A running list of updates, improvements, and fixes to the site.</p>
      </section>

      <section className="change-log__list">
        {entries.map((entry) => (
          <ChangeLogEntry
            key={entry.date}
            date={entry.date}
            summary={entry.summary}
            groups={entry.groups}
          />
        ))}
      </section>
    </div>
  );
}

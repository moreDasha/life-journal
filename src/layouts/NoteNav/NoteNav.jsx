import './NoteNav.css';

function NoteNav({ children }) {
  return (
    <nav className="note-nav">
      {children}
    </nav>
  );
}

export default NoteNav;
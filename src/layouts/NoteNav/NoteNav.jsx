import './NoteNav.css';

function NoteNav({ children }) {
  return (
    <div className="note-nav">
      {children}
    </div>
  );
}

export default NoteNav;
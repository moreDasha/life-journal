import './NoteBody.css';

function NoteBody({ children }) {
  return (
    <div className="note-body">
      {children}
    </div>
  );
}

export default NoteBody;
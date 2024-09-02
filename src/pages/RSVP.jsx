// src/pages/RSVP.jsx
const RSVP = () => {
  return (
    <div className="rsvp">
      <h1>RSVP</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Will you attend?
          <select name="attendance">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RSVP;

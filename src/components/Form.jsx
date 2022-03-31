import React from "react";

export function Form() {
  return (
    <form>
      <div className="row">
        <label>Kategoria</label>
        <select>
          <option>Praca</option>
          <option>Hobby</option>
        </select>
      </div>
      <div className="row">
        <label>Tytuł</label>
        <input type="text" />
      </div>
      <div className="row">
        <label>Opis</label>
        <textarea />
      </div>
      <button type="submit">Dodaj</button>
    </form>
  );
}

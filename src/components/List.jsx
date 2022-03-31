import React from "react";

export function List() {
  return (
    <table>
      <thead>
        <tr>
          <th>Kategoria</th>
          <th>Tytuł</th>
          <th>Opis</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Praca</td>
          <td>Zadanie 1</td>
          <td />
          <td>
            <button>Usuń</button>
          </td>
        </tr>
        <tr>
          <td>Praca</td>
          <td>Zadanie 2</td>
          <td>Opis zadania</td>
          <td>
            <button>Usuń</button>
          </td>
        </tr>
        <tr>
          <td>Praca</td>
          <td>Zadanie 3</td>
          <td>Opis zadania</td>
          <td>
            <button>Usuń</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

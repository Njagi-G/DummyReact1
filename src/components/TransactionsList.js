import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ searchTerm }) {
  // "inject" Transaction into the return code block after tr;
  // will auto-fill import Transaction at the top;
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        <Transaction searchTerm={searchTerm} />
      </tbody>
    </table>
  );
}

export default TransactionsList;

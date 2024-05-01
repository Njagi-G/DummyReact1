import React, { useState, useEffect } from "react";

function Transaction({ searchTerm }) {
  // destructure an array and assign it a useState hook;
  // create a useEffect and inside pass an arrow function;
  // import the hooks from react library;
  // create a variable to store url value;
  // fetch method and use promises ton convert the data to readable json data;
  // useEffect dependencies---prevents re-rendering when an event happens;
  // to iterate over the table data w/ .map
  // pass in a key = id to fetch data from data.value in table-data(td);
  const url = "http://localhost:8001/transactions";
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.log(error));

    // setTransactions();
  }, [transactions]);

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {filteredTransactions.map((data, id) => (
        <tr key={id}>
          <td>{data.date}</td>
          <td>{data.description}</td>
          <td>{data.category}</td>
          <td>{data.amount}</td>
        </tr>
      ))}
    </>
  );
}

export default Transaction;

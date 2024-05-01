import React from "react";

function AddTransactionForm() {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      date: formData.get("date"),
      description: formData.get("description"),
      category: formData.get("category"),
      amount: formData.get("amount"),
    };

    try {
      const result = await fetch("http://localhost:8001/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (result.ok) {
        console.log(await result.json());
      } else {
        console.log("There was an error");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;

import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { createAccountForUser } from '../context/authContext';
import { createAccount } from '../utility/api-communicator';

function CreateAccount() {
    const auth = useAuth();
  const [accountData, setAccountData] = useState({
    type: 'Credit Card', // default selected value
    nickname: '',
    rewards: 0,
    balance: 0,
    account_number: generateAccountNumber()
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccountData({
      ...accountData,
      [name]: name === 'rewards' || name === 'balance' ? parseFloat(value) : value
    });
  };

  function generateAccountNumber() {
    let accountNumber = '';
    while (accountNumber.length < 16) {
      if (accountNumber.length === 0) {
        // Ensure the first digit is not zero
        accountNumber += Math.floor(Math.random() * 9) + 1;
      } else {
        accountNumber += Math.floor(Math.random() * 10);
      }
    }
    return accountNumber;
  }
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    await createAccount(accountData, auth.user.uuid);
    
   
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 border border-gray-300">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Account Type
          </label>
          <select
            id="type"
            name="type"
            value={accountData.type}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
          >
            <option value="Checking">Checking</option>
            <option value="Saving">Saving</option>
            <option value="Credit Card">Credit Card</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nickname">
            Nickname
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={accountData.nickname}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
       
        <div className="flex items-center justify-center">
          <button
            className="bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;

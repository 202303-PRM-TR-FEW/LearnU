import React from 'react';

// Define the object with class names
const classNames = {
  maxContainer: 'max-w-2xl my-10 ',
  form: 'flex items-center',
  input: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5',
  button: 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg ml-4 ',
};

function SearchForm() {
  return (
    <div className={classNames.maxContainer}>
      <form className={classNames.form}>
        <input
          type="text"
          id="simple-search"
          className={classNames.input}
          placeholder="Search categories"
          required
        />
        <button
          type="submit"
          className={classNames.button}
        >
        <span>search</span>
        </button>
      </form>
    </div>
  );
}

export default SearchForm;

<template>
  <div class="w-full flex justify-center">
    <div
      class="flex items-center w-full max-w-4xl bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
    >
      <!-- Search input -->
      <div class="flex items-center px-3 flex-1">
        <svg
          class="w-5 h-5 text-gray-400 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search for a job title"
          class="flex-1 border-0 focus:ring-0 text-gray-700 placeholder-gray-400"
        />
      </div>

      <!-- Divider -->
      <div class="w-px h-6 bg-gray-300"></div>

      <!-- Dropdown -->
      <div class="relative px-3 flex items-center">
        <select
          class="appearance-none bg-transparent pr-6 text-gray-700 focus:outline-none"
        >
          <option>All Categories</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Sales</option>
        </select>
        <svg
          class="absolute right-2 w-4 h-4 text-gray-500 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <!-- Button -->
      <button
        class="bg-orange-400 hover:bg-orange-500 text-white font-medium px-5 py-2 rounded-r-lg transition"
      >
        Search
      </button>
    </div>
  </div>
</template>

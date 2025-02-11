<script>
    import { onMount } from 'svelte';
  
    let users = [];
    let name = "";
    let loading = true;
    let error = null;
  
    // Fetch users from FastAPI
    async function fetchUsers() {
      try {
        loading = true;
        const res = await fetch("http://127.0.0.1:8000/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        users = await res.json();
      } catch (err) {
        error = err.message;
      } finally {
        loading = false;
      }
    }
  
    // Add a new user
    async function addUser() {
      if (!name.trim()) return alert("Name cannot be empty");
  
      try {
        const res = await fetch("http://127.0.0.1:8000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
  
        if (!res.ok) throw new Error("Failed to add user");
  
        name = "";
        await fetchUsers(); // Refresh the user list
      } catch (err) {
        error = err.message;
      }
    }
  
    // Fetch users when the page loads
    onMount(fetchUsers);
  </script>
  
  <main class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Users List</h1>
  
    {#if loading}
      <p class="text-center">Loading users...</p>
    {:else if error}
      <p class="text-red-500 text-center">{error}</p>
    {:else}
      <ul class="list-none bg-white shadow-lg rounded-lg p-4 space-y-2">
        {#each users as user}
          <li class="p-2 bg-gray-100 rounded-lg shadow-sm">
            {user.name}
          </li>
        {/each}
      </ul>
    {/if}
  
    <div class="mt-6 flex flex-col items-center">
      <input
        type="text"
        bind:value={name}
        placeholder="Enter name"
        class="input input-bordered w-full max-w-xs"
      />
      <button on:click={addUser} class="btn btn-primary mt-2">
        Add User
      </button>
    </div>
  </main>


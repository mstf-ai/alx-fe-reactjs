import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(
    `https://api.github.com/users/${username}`
  );
  return response.data;
};

export const searchUsersAdvanced = async (query, location, minRepos) => {
  let q = query;

  if (location) {
    q += ` location:${location}`;
  }

  if (minRepos) {
    q += ` repos:>=${minRepos}`;
  }

  const response = await axios.get(
    `https://api.github.com/search/users?q=${q}`
  );

  return response.data.items;
};

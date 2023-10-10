import { useState } from "react";

const useGetRepos = () => {
    const [repos, setRepos] = useState([]);
    const BASE_URL = "https://api.github.com/search/repositories";

    const searchRepos = async (query) => {
        try {
            const response = await fetch(`${BASE_URL}?q=${query}`);
            const data = await response.json();
            setRepos(data.items);
        } catch (error) {
            console.error("Error fetching repos:", error);
        }
    };

    return {
        repos,
        searchRepos
    }
}

export default useGetRepos;
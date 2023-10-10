import { useState } from "react";
import getComparator from "../utils/getComparator";

const BASE_URL = "https://api.github.com/search/repositories";

const useGetRepos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // TODO: Handle loading and error using axios and axios hooks
    const searchRepos = async (query) => {
        setLoading(true);
        setMessage("");
        try {
            const response = await fetch(`${BASE_URL}?q=${query}`);
            const data = await response.json();
            if (data.items.length === 0) {
                setMessage("No repositories found.");
            }
            setRepos(data.items);
        } catch (error) {
            setMessage("Error fetching repos.");
        }
        setLoading(false);
    };

    const handleSortChange = (sortKey) => {
        const comparator = getComparator(sortKey);
        const updatedRepos = repos.sort(comparator);
        setRepos([...updatedRepos]);
    }

    return {
        repos,
        searchRepos,
        loading,
        message,
        handleSortChange
    }
}

export default useGetRepos;
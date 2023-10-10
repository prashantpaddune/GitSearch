const getComparator = (sortKey) => {
    switch (sortKey) {
        case 'stars':
            return (a, b) => b.stargazers_count - a.stargazers_count;
        case 'watchers':
            return (a, b) => b.watchers_count - a.watchers_count;
        case 'score':
            return (a, b) => b.score - a.score;
        case 'full_name':
            return (a, b) => a.full_name.localeCompare(b.full_name);
        case 'created':
            return (a, b) => new Date(b.created_at) - new Date(a.created_at);
        case 'updated':
            return (a, b) => new Date(b.updated_at) - new Date(a.updated_at);
        default:
            return (a, b) => b.stargazers_count - a.stargazers_count;
    }
};

export default getComparator;

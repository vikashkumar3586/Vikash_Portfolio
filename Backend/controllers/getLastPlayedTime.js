function getTimeAgo(dateString){
    const now = new Date();
    const playedDate = new Date(dateString);
    const diffSeconds = Math.floor((now.getTime() - playedDate.getTime()) / 1000);

    if (diffSeconds < 60) {
        return 'Playing now...';
    }
    if (diffSeconds < 3600) {
        const minutes = Math.floor(diffSeconds / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    if (diffSeconds < 86400) {
        const hours = Math.floor(diffSeconds / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }

    const days = Math.floor(diffSeconds / 86400);
    if (days === 1) {
        return 'Yesterday';
    }
    if (days <= 7) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }

    return `on ${playedDate.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })}`;
}

module.exports = { getTimeAgo };
  
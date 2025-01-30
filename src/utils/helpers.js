export const truncateText = (text, maxLength) => {
    if(!text) return "Untitled";
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}
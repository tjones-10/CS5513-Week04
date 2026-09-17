// Import date parsing and formatting helper functions from date-fns
import { parseISO, format } from 'date-fns';

// Component to render a date formatted nicely for display
export default function Date({ dateString }) {
    // Parse the ISO date string into a Date object
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
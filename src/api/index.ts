import Archives from './archives';
import Blog from './blog';
import Search from './search';
import Serial from './serial';
import Tag from './tag';

export default [
    ...Blog,
    ...Serial,
    ...Tag,
    ...Search,
    ...Archives
];

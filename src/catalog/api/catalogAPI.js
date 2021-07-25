import phones from '../../data/phoneCatalog';

export function fetchData(page) {
    const result = phones.slice(10*(page-1), 10 * page);
    return result;
}

export function countTotal() {
    const result = phones.length;
    return result;
}
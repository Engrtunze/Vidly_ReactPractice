import _ from 'lodash';

export function pagination(items, pageNumber, pageSize) {

    const startIndex = (pageNumber - 1) * pageSize;
   return _(items)                //covert items array to lodash wrapper
       .slice(startIndex)
       .take(pageSize)
       .value();

}
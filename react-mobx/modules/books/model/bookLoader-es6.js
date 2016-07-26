import { observable, computed } from 'mobx';
import { observer } from "mobx-react";

class BookLoader {
    @observable books = []
    load(bookSearch = {}, publicUserId = ''){
        Promise.resolve(ajaxUtil.get('/book/searchBooks', {
            search: bookSearch.search,
            subjects: Object.keys(bookSearch.subjects || {}),
            tags: Object.keys(bookSearch.tags || {}),
            searchChildSubjects: bookSearch.searchChildSubjects,
            sort: bookSearch.sort,
            sortDirection: bookSearch.sortDirection,
            author: bookSearch.author,
            publisher: bookSearch.publisher,
            pages: bookSearch.pages,
            pagesOperator: bookSearch.pagesOperator,
            userId: publicUserId
        })).then(resp => {
            this.books = resp.results;
        });
    }
}

export default BookLoader;
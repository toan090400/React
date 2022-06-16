import Home from '../components/Pages/Home/Home.jsx';
import Detail from '../components/Pages/Detail/Detail.jsx';
import Register from '../components/Pages/Register/Register.jsx';

import Book from '../components/Pages/Admin/Book/Book.jsx';
import BookAdd from '../components/Pages/Admin/Book/BookAdd.jsx';
import BookUpdate from '../components/Pages/Admin/Book/BookUpdate.jsx';
import Category from '../components/Pages/Admin/Category/Category.jsx';
import CategoryAdd from '../components/Pages/Admin/Category/CategoryAdd.jsx';
import CategoryUpdate from '../components/Pages/Admin/Category/CategoryUpdate.jsx';


const publicRoutes = [
    { patch: '/', component: Home },
    { patch: '/detail/:id', component: Detail },
    { patch: '/register', component: Register },
];

const privateRoutes = [
    { patch: '/admin/book', component: Book },
    { patch: '/admin/bookAdd', component: BookAdd },
    { patch: '/admin/bookUdate/:id', component: BookUpdate },

    { patch: '/admin/category', component: Category },
    { patch: '/admin/categoryAdd', component: CategoryAdd },
    { patch: '/admin/categoryUdate/:id', component: CategoryUpdate },
];


export { publicRoutes,  privateRoutes};
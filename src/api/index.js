import axios from './request';
//请求登录
export const reqLogin = (username, password) => axios.post('/login', {username, password});
// 请求获取分类列表数据
export const reqGetCategories = () => axios.get('/category/get');
// 请求添加分类数据
export const reqAddCategory = (categoryName) => axios.post('/category/add', {categoryName});
//请求修改数据
export const reqUpdateCategory = (categoryId, categoryName) => axios.post('/category/update', {
    categoryId,
    categoryName
});
//请求商品管理
export const reqGetProducts = (pageNum, pageSize) => axios.get('/product/list', {params: {pageNum, pageSize}});

//删除分类
export const reqDelProduct = ({productId}) => axios.post('product/delete', {
    productId
});

//添加商品
export const reqAddProduct = ({name, desc, price, categoryId, detail}) => axios.post('/product/add', {
    name,
    desc,
    price,
    categoryId,
    detail
});
//修改商品
export const reqUpdateProduct = ({name, desc, price, categoryId, detail, productId}) => axios.post('/product/update', {
    name,
    desc,
    price,
    categoryId,
    detail,
    productId
});
//关键词搜索
export const reqSearchProducts = ({searchKey, searchValue, pageNum, pageSize}) => axios.get('/product/search', {
    params: {
        [searchKey]: searchValue,
        pageNum,
        pageSize
    }
})
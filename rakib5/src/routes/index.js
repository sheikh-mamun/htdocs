import { createBrowserRouter } from "react-router-dom";
import Shop from "../components/Shop";
import About from "../components/About";
import Service from "../components/Service";
import Home from "../components/Home";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Chart from "../components/Chart";
import Admin_index2 from "../admin/Admin_index2";
import BannerAdmin from "../admin/admin2_components/adminComponent/BannerAdmin";
import BannerAdminAdd from "../admin/admin2_components/adminComponent/BannerAdminAdd";
import BannerAdminUpdate from "../admin/admin2_components/adminComponent/BannerAdminUpdate";
import ProdcutAdmin from "../admin/admin2_components/product1admin/ProductAddmin1";
import ProdcutAdminAdd from "../admin/admin2_components/product1admin/ProductAdminAdd";
import ProductAdminList from "../admin/admin2_components/product1admin/ProductAddminList";
import ProductAdminUpdate from "../admin/admin2_components/product1admin/ProductAdminUpdate";
import ProdcutAdmin2 from "../admin/admin2_components/product2admin/ProductAdmin2";
import ProdcutAdminAdd2 from "../admin/admin2_components/product2admin/ProductAdminAdd2";
import ProductsAdminList2 from "../admin/admin2_components/product2admin/ProductAdminList2";
import ProductAdminUpdate2 from "../admin/admin2_components/product2admin/ProductAdminUpdate2";
import BannerAdminList from "../admin/admin2_components/adminComponent/BannerAdminList";
import ChoosesAdmin from "../admin/admin2_components/choosesadmin/ChoosesAdmin";
import ChoosesAdminAdd from "../admin/admin2_components/choosesadmin/ChoosesAdminAdd";
import ChoosesAdminList from "../admin/admin2_components/choosesadmin/ChoosesAdminList";
import ChoosesAdminUpdate from "../admin/admin2_components/choosesadmin/ChoosesAdminUpdate";
import DesignAdmin from "../admin/admin2_components/designadmin/DesignAdmin";
import AddDesignAdmin from "../admin/admin2_components/designadmin/AddDesignAdmin";
import ListDesignAdmin from "../admin/admin2_components/designadmin/ListDesignAdmin";
import UpdateDesignAdmin from "../admin/admin2_components/designadmin/UpdateDesignAdmin";
import PopularAdmin from "../admin/admin2_components/popularadmin/PopularAdmin";
import AddPopularAdmin from "../admin/admin2_components/popularadmin/AddPopularAdmin";
import ListPopularAdmin from "../admin/admin2_components/popularadmin/ListPopularAdmin";
import UpdatePopularAdmin from "../admin/admin2_components/popularadmin/UpdatePopularAdmin";
import SliderAdmin from "../admin/admin2_components/testimonials/SliderAdmin";
import AddSliderAdmin from "../admin/admin2_components/testimonials/AddSliderAdmin";
import ListSliderAdmin from "../admin/admin2_components/testimonials/ListSliderAdmin";
import UpdateSliderAdmin from "../admin/admin2_components/testimonials/UpdateSliderAdmin";
import BlogAdmin from "../admin/admin2_components/blogadmin/BlogAdmin";
import AddBlogAdmin from "../admin/admin2_components/blogadmin/AddBlogAdmin";
import ListBlogAdmin from "../admin/admin2_components/blogadmin/ListBlogAdmin";
import UpdateBlogeAdmin from "../admin/admin2_components/blogadmin/UpdateBlogeAdmin";
import ProductDetails from "../components/DetailsProduct";
import Order from "../components/Order";
import Thanks from "../components/Thanks";



const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/shop', element: <Shop /> },
    { path: '/about', element: <About /> },
    { path: '/service', element: <Service /> },
    { path: '/blog', element: <Blog /> },
    { path: '/contact', element: <Contact /> },
    { path: '/chart', element: <Chart /> },
    { path: '/order', element: <Order /> },
    { path: '/thans', element: <Thanks /> },
{ path: '/admin', element: <Admin_index2 /> },
{ path: '/admin/banner', element: <BannerAdmin /> },
{ path: '/admin/addbanner', element: <BannerAdminAdd /> },
{ path: '/admin/listbanner', element: <BannerAdminList /> },
{ path: '/admin/updatebanner/:id', element: <BannerAdminUpdate /> },
//........................admin panel start...........................

//........................admin panel product start...........................

{ path: '/admin/product', element: <ProdcutAdmin /> },
{ path: '/admin/addproduct', element: <ProdcutAdminAdd /> },
{ path: '/admin/listproduct', element: <ProductAdminList /> },
{ path: '/admin/updateproduct/:id', element: <ProductAdminUpdate/> },
//........................admin panel product end...........................

//........................admin panel product2 start...........................

{ path: '/admin/products2', element: <ProdcutAdmin2 /> },
{ path: '/admin/addproducts2', element: <ProdcutAdminAdd2 /> },
{ path: '/admin/listproducts2', element: <ProductsAdminList2 /> },
{ path: '/admin/updateproducts2/:id', element: <ProductAdminUpdate2/> },
{ path: '/details/:id', element: <ProductDetails/> },
//........................admin panel product2 end...........................
    
//........................admin panel choses start...........................

{ path: '/admin/chooses', element: <ChoosesAdmin /> },
{ path: '/admin/addchooses', element: <ChoosesAdminAdd /> },
{ path: '/admin/listchooses', element: <ChoosesAdminList /> },
{ path: '/admin/updatechooses/:id', element: <ChoosesAdminUpdate/> },
//........................admin panel choses end...........................

//........................admin panel choses start...........................

{ path: '/admin/design', element: <DesignAdmin/> },
{ path: '/admin/adddesign', element: <AddDesignAdmin /> },
{ path: '/admin/listdesign', element: <ListDesignAdmin /> },
{ path: '/admin/updatedesign/:id', element: <UpdateDesignAdmin/> },
//........................admin panel choses end...........................

//........................admin panel choses start...........................

{ path: '/admin/popular', element: <PopularAdmin/> },
{ path: '/admin/addpopular', element: <AddPopularAdmin /> },
{ path: '/admin/listpopular', element: <ListPopularAdmin /> },
{ path: '/admin/updatepopular/:id', element: <UpdatePopularAdmin/> },
//........................admin panel choses end...........................

//........................admin panel choses start...........................

{ path: '/admin/slider', element: <SliderAdmin/> },
{ path: '/admin/addslider', element: <AddSliderAdmin /> },
{ path: '/admin/listslider', element: <ListSliderAdmin /> },
{ path: '/admin/updateslider/:id', element: <UpdateSliderAdmin/> },
//........................admin panel choses end...........................
//........................admin panel choses start...........................

{ path: '/admin/blog', element: <BlogAdmin/> },
{ path: '/admin/addblog', element: <AddBlogAdmin /> },
{ path: '/admin/listblog', element: <ListBlogAdmin /> },
{ path: '/admin/updateblog/:id', element: <UpdateBlogeAdmin/> },
//........................admin panel choses end...........................

])
export default routes
import { get, patch, post, put } from './http-provider';
import featureConstants from './feature-constants';

const SERVICE_URLS = {
  // service URL's (API End-Points)
  //Just Like That

  //Auth Management
  loginLawyer: 'lawyer/login',
  loginLawfirm: "law-firm/login",
  loginClient: "client/login",

  //Category Management
  getCategories: "categories/get-categories",
  getSubCategories: "categories/get-subcategories"


};

//Auth Management
const loginLawyer = data =>
  post(SERVICE_URLS.loginLawyer, data, { feature: featureConstants.static });
const loginLawfirm = data =>
  post(SERVICE_URLS.loginLawfirm, data, { feature: featureConstants.static });
const loginClient = data =>
  post(SERVICE_URLS.loginClient, data, { feature: featureConstants.static });

// Category Management

const getCategories = () =>
  get(SERVICE_URLS.getCategories, {}, { feature: featureConstants.static });
const getSubCategories = data =>
  get(SERVICE_URLS.getSubCategories, {},data, { feature: featureConstants.static });



const apiServices = {
  // define variables

  //Auth Management
  loginLawyer,
  loginLawfirm,
  loginClient,

  //Category Management
  getCategories,
  getSubCategories

};

export default apiServices;

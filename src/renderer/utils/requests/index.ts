import axios from 'axios';
import { baseURL } from '../../configuration';
import AdminRequests from './AdminRequests';
import LoginRequests from './LoginRequests';
import UserRequests from './UserRequests';

axios.defaults.baseURL = baseURL;

export { LoginRequests, AdminRequests, UserRequests };

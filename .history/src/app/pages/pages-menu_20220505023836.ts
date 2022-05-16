import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'dashbord',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  
  {
    title: 'Gestion contrats',
    group: true,
  },
 
  
  
  {
    title: 'Ajouter client',
    icon: 'browser-outline',
    link: '/pages/modal-overlays/dialog',
    
  },
  
  
  {
    title: 'Predictions',
    icon: 'grid-outline',
    children: [
      {
        title: 'Table des clients',
        link: '/pages/tables/smart-table',
      },
      
    ],
  },
 
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
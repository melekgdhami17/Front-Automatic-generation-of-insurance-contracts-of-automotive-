import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashbord',
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
 
  
];
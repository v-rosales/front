const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Home',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/dashboard',
          roles: ['Administrador', 'Médico', 'Enfermero']
        },
        {
          id: 'v_pacientes',
          title: 'Pacientes',
          type: 'item',
          url: '/pacientes_index',
          classes: 'nav-item',
          icon: 'feather icon-user'
        },
        {
          id: 'v_seleccion',
          title: 'Seleccion Triage',
          type: 'item',
          icon: 'feather icon-file-text',
          url: '/seleccion',
          roles: ['Enfermero']
        },
        {
          id: 'v_consultas',
          title: 'Consultas',
          type: 'item',
          icon: 'feather icon-file-text',
          url: '/consulta',
          roles: ['Médico']
        }
      ]
    },
    {
      id: 'crud_admin',
      title: 'Personal Médico',
      type: 'group',
      icon: 'icon-pages',
      children: [
        {
          id: 'v_administradores',
          title: 'Personal_Médico',
          type: 'item',
          url: '/personal',
          classes: 'nav-item',
          icon: 'feather icon-user',
          roles: ['Administrador']
        }
      ]
    },
    {
      id: 'rayosx',
      title: 'Imágenes',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'rayosx_crear',
          title: 'Solicitudes',
          type: 'item',
          icon: 'feather icon-list',
          url: '/rayosx/crear',
          roles: ['Administrador', 'Médico', 'Enfermero']
        },
        {
  id: 'rayosx_informes',
  title: 'Informes',
  type: 'item',
  icon: 'feather icon-file-text',
  url: '/rayosx/informes',
  roles: ['Administrador', 'Médico', 'Enfermero']
},
{
      id: 'rayosx_informes_completados',
      title: 'Informes Completados',
      type: 'item',
      icon: 'feather icon-check-circle',
      url: '/rayosx/informes/completados',
      roles: ['Administrador', 'Médico', 'Enfermero']
    }
      ]
    }
  ]
};

export default menuItems;
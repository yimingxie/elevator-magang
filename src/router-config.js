import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: {
        title: '电梯行业监管战情室',
      },
      // component: Index
      component: (resolve) => require(['./views/Index'], resolve)
    },{
      path: '/mainten',
      name: 'maintenance',
      meta: {
        title: '电梯维保监管战情室',
      },
      // component: maintenance
      component: (resolve) => require(['./views/maintenance'], resolve)
    },{
      path: '/property',
      name: 'property',
      // component: property,
      component: (resolve) => require(['./views/property'], resolve),
      meta: {
        title: '电梯物业监管战情室 ',
      },
    },
    {
      path: "/detail",
      name: "ElevatorDetail",
      meta: {
        title: '电梯运行详情',
      },
      // component: ElevatorDetailNew
      component: (resolve) => require(['./views/xym/ElevatorDetailNew'], resolve),
    },
    {
      path: "/add-devices",
      name: "AddDevices",
      meta: {
        title: "添加电梯设备"
      },
      // component: AddDevices
      component: (resolve) => require(['./views/xym/AddDevices'], resolve),
    },
    // {
    //   path: "/detail-new",
    //   name: "ElevatorDetailNew",
    //   component: ElevatorDetail
    // },
    // {
    //   path: "/detail-new2",
    //   name: "ElevatorDetailNew2",
    //   component: ElevatorDetailNew2
    // },
    // {
    //   path: "/detail-old",
    //   name: "ElevatorDetailOld",
    //   component: ElevatorDetailOld
    // },
    // {
    //   path: '/mainten-map',
    //   name: 'maintenanceMap',
    //   meta: {
    //     title: '电梯维保监管战情室',
    //   },
    //   component: maintenanceMap
    // },
    // {
    //   path: '/mainten-cal',
    //   name: 'maintenanceCal',
    //   meta: {
    //     title: '电梯维保监管战情室',
    //   },
    //   component: maintenanceCal
    // }
   
  
  ]
})



router.beforeEach((to, from, next) => {
  // 设置标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


export default router
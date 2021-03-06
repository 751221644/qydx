import Cookies from 'js-cookie'
import { defaultRouter, addRouters } from '../router/index'
import storage from '../util/storage'
const mutations = {
  getInfo(state, token) {
    var info = storage.get('personInfo')
    var role = storage.get('getInfo')
    console.log('state',sessionStorage.getItem('theRole'));
  
    state.info = {
      role: 'admin',//staff,admin
    }
    // sessionStorage.setItem('info', JSON.stringify(storage.getters.info))
  },
  getPersonInfo(state, info) {
    state.personInfo = info
  },
  getRole(state,role){
    console.log('getRoleRole',role);
    state.getInfo = role
    
  },
  // setRole(state, options) {  // 切换角色，测试权限管理
  //   state.power = {
  //     role: options.role,
  //     permissions: options.permissions
  //   }
    // sessionStorage.setItem('info', JSON.stringify(storage.getters.info));
    // storage.dispatch('newRoutes', options.role)
    // router.addRoutes(storage.getters.addRouters)
  // },

  changeLogin(state,data){
    state.isLogin = data;
},
  changePrice(state,price){
    state.orderTotalPrice = price
  },
  setToken(state, token) {
    state.token = token
    Cookies.set('token', token, { expires: 1 / 24 });
  },
  setRouters: (state, routers) => {
    state.addRouters = routers  // 保存动态路由用来addRouter
    // if(localStorage.getItem('changeRole')){
    //   var  changeRole = storage.get('changeRole')
    // }else{
    //   var  changeRole = '';
    // }
    var _role = storage.get('role')
    
    // var  changeRole = storage.get('changeRole')  
    
    var  role = state.info.role
    if(_role){
      role = _role
    }

    
    switch (role) {
      case 'admin':
        state.routers = defaultRouter.concat(routers)
        break;
      case 'staff':
        var new_router =[]
        routers.forEach((ele,idx)=>{
          ele.meta.role.forEach((e,i)=>{
            if(e=='staff'){
              new_router.push(ele)
            }
          })
          
        })
        state.routers = new_router // 所有有权限的路由表，用来生成菜单列表
      default:
        break;
    }

  

  },
  schoolNum(state,data){
      state.schoolNum = data;
  },
  schoolId(state,data){
    state.schoolId = data;
  }
}

export default mutations
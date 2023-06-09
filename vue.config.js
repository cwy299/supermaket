// module.exports = {
//   configureWebpack:{
//     resolve:{
//       alias:{
//         "assets":"@/assets",
//         'common':'@/common',
//         'components':'@/components',
//         'network':'@/network',
//         'views':'@/views',
//       }
//     }
//   }
// }
const path = require('path');//引入path模块
function resolve(dir){
  return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}


module.exports={
  chainWebpack:(config)=>{
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@',resolve('./src'))
      .set('components',resolve('./src/components'))
      .set('assets',resolve('./src/assets'))
      .set('views',resolve('./src/views'))
      .set('network',resolve('./src/network'))
    //注意 store 和 router 没必要配置

  }
}

// module.exports = {
//   lintOnSave: true,
//   chainWebpack: (config) => {
//     config.resolve.alias
//       .set('@', resolve('src'))
//       // 需要重启 IDE
//       .set('assets',resolve('src/assets'))
//       .set('common',resolve('src/common'))
//       .set('components',resolve('src/components'))
//       .set('network',resolve('src/network'))
//       .set('views',resolve('src/views'))
//     // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
//   }
// };

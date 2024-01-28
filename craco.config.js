// 拿到一个path模块
const path = require('path')
const CracoLessPlugin = require('craco-less');

const resolve = pathname => path.resolve(__dirname, pathname)

// 这些都是通过Node来加载的,通过Node中的commonjs导出一个对象
module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  // webpack中配置别名alias
  // 在这里写上一个webpack,表示要对原来的webpack里的某个东西做一个修改, 这里对应的是个对象
  webpack: {
    // 以前自己在webpack里配置别名时是配置resolve中的alias,但在craco里是直接写上一个alias就可以配置别名了
    alias: { // key(别名的名字) : path(path不能是字符串),要求我们传的是个绝对路径
      // "@": "src",
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils"),
      '@mui/styled-engine': '@mui/styled-engine-sc'
    }
  }
}
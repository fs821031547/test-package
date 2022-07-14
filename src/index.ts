const calc = (a: number, b: number): number => {
  return a - b
}

// calc(1024, 28)
// console.log(calc(1024, 24))

// 实现一个计算函数，接受a,b两个参数，参数类型声明为number类型，函数返回值为两个参数相减
// 打包后最后会生成一个类型声明文件，声明这个计算函数，接受2个number类型的参数，返回一个number类型的值。

export default calc

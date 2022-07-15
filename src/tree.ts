/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/**
 * 扁平化数据改为树结构
 * @param {Array} list 扁平化数组
 * @param {Array} options 配置选项
 * @return {Array} 树结构
 */
interface Employee {
  [key: string]: any
}
export default function (list: any[], options: Employee = {}): any[] {
  const {
    keyField = 'id',
    childField = 'children',
    parentField = 'pid',
    customPid = 999999999
  } = options

  const tree: any[] = []
  const record: Employee = {}

  for (let i = 0, len = list.length; i < len; i++) {
    const item: Employee = list[i]
    const id = item[keyField]

    if (!id) continue
    // 如果当前项的id在record中存在，证明当前项是个父菜单
    item[childField] = record[id] = record[id] ? record[id] : []

    if (!item[parentField] || item[parentField] === customPid) {
      // 如果没有parentId 或者 等于传入的customPid 视为一级菜单【该功能兼容菜单管理拼接功能树，功能树的parentId是上级菜单】
      tree.push(item)
    } else {
      // 如果当前项含有parentId 或者 不等于等于传入的customPid
      const parentId = item[parentField]
      // 根据parentId去对象中找
      if (!record[parentId]) {
        record[parentId] = []
      }
      // 存在就以parentId为key把当前项push
      record[parentId].push(item)
    }
  }

  return tree
}

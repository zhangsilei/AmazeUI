# Amaze UI DataTables
---

[DataTables](https://datatables.net/) 插件 Amaze UI 集成，只修改了样式和默认显示语言，其他参数同官方版。

- [使用示例](http://amazeui.github.io/datatables/docs/demo.html)

**使用说明：**

1. 获取 Amaze UI DataTables

  - [直接下载](https://github.com/amazeui/datatables/archive/master.zip)
  - 使用 NPM: `npm install amazeui-datatables`

2. 在 Amaze UI 样式之后引入 DataTables 样式（`dist`目录下的 CSS）：

  Amaze UI DataTables 依赖 Amaze UI 样式。

  ```html
  <link rel="stylesheet" href="path/to/amazeui.min.css"/>
  <link rel="stylesheet" href="path/to/amazeui.datatables.css"/>
  ```

3. 在 jQuery 之后引入 DataTables 插件（`dist`目录下的 CSS）：

  ```html
  <script src="path/to/jquery.min.js"></script>
  <script src="path/to/amazeui.datatables.min.js"></script>
  ```

4. 初始化 DataTables:

  ```js
  $(function() {
      $('#my-table').DataTable();
  });
  ```

## 功能增强

### 扩展

- **固定表头**：[文档](https://www.datatables.net/extensions/fixedheader/) | [下载](https://www.datatables.net/download/#FixedHeader)
- **固定列**：[文档](https://www.datatables.net/extensions/fixedcolumns/) | [下载](https://www.datatables.net/download/#FixedColumns)
- **[响应式表格](http://datatables.net/extensions/responsive/)**
